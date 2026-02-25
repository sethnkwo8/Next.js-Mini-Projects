import prisma from "./prisma"

export async function fetchPosts(limit: number) {
    return prisma.post.findMany({
        take: limit,
        include: { author: true },
        orderBy: { createdAt: 'desc' }
    })

}

export async function fetchPostById(postId: string) {
    return prisma.post.findUnique({
        where: { id: postId },
        include: { author: true }
    })
}