'use server'
import { getCurrentUserId } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CURRENT_USER_ID = await getCurrentUserId();

export async function CreatePost(formData: FormData) {
    const title = formData.get('title') as string
    const body = formData.get('body') as string

    if (!title || !body) {
        throw new Error('Title and Body are required')
    }

    if (!CURRENT_USER_ID) {
        throw new Error('User not authenticated')
    }

    await prisma.post.create({
        data: {
            title: title,
            body: body,
            authorId: CURRENT_USER_ID,
        }
    })

    console.log('Success');

    revalidatePath('/');
}

export async function deletePost(formData: FormData) {
    const postId = formData.get('postId') as string;

    if (!postId) {
        throw new Error('postId is required')
    }

    const post = await prisma.post.findUnique({
        where: { id: postId },
        include: { author: true }
    })

    if (!post) {
        throw new Error('Post not found')
    }

    if (post.authorId !== CURRENT_USER_ID) {
        throw new Error('Unauthorized')
    }

    await prisma.post.delete({
        where: { id: postId }
    })

    revalidatePath('/')
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    redirect('/login')
}