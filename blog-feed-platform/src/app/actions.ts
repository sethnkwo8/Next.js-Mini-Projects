'use server'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function CreatePost(formData: FormData) {
    const title = formData.get('title') as string
    const body = formData.get('body') as string

    if (!title || !body) {
        throw new Error('Title and Body are required')
    }

    await prisma.post.create({
        data: {
            title: title,
            body: body,
            authorId: 'cmm1vw8uj0000lx8zxq6d63mf',
        }
    })

    console.log('Success');

    revalidatePath('/');
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('authToken');
    redirect('/login')
}