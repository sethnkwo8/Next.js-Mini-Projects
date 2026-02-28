'use server'

import { getCurrentUserId } from "@/lib/auth";
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePost(formData: FormData) {
    const CURRENT_USER_ID = await getCurrentUserId();

    const postId = formData.get("postIdUpdate") as string;
    const title = formData.get("updatedTitle") as string;
    const body = formData.get("updatedBody") as string;

    const post = await prisma.post.findUnique({
        where: { id: postId }
    })

    if (!post) {
        throw new Error('Post not Found')
    }

    if (post.authorId !== CURRENT_USER_ID) {
        throw new Error('Unauthorized')
    }

    await prisma.post.update({
        where: { id: postId },
        data: { title, body }
    })

    revalidatePath('/')
    redirect('/')
}