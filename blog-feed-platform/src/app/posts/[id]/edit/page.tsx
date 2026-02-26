import { EditPostForm } from "@/components/EditPostForm"
import prisma from "@/lib/prisma"

export default async function EditPage({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params
    const post = await prisma.post.findUnique({
        where: { id: id },
        include: { author: true }
    })

    return (
        <EditPostForm id={id} title={`${post?.title}`} body={`${post?.body}`} />
    )
}
