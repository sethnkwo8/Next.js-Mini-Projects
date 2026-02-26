import { EditPostForm } from "@/components/EditPostForm"
import { getCurrentUserId } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function EditPage({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const CURRENT_USER_ID = getCurrentUserId()
    const { id } = await params
    const post = await prisma.post.findUnique({
        where: { id: id },
        include: { author: true }
    })

    if (post?.authorId !== CURRENT_USER_ID) {
        redirect('/')
    }
    return (
        <EditPostForm id={id} title={`${post?.title}`} body={`${post?.body}`} />
    )
}
