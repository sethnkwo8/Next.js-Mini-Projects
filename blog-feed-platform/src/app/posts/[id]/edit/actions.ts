'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePost(formData: FormData) {
    const postId = formData.get("postIdUpdate") as string;
    const title = formData.get("updatedTitle") as string;
    const body = formData.get("updatedBody") as string;

    await prisma.post.update({
        where: { id: postId },
        data: { title, body }
    })

    revalidatePath('/')
    redirect('/')
}