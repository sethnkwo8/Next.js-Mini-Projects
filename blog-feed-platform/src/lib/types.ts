import { Prisma } from "@/generated/prisma/client"

export type PostWithAuthor = Prisma.PostGetPayload<{
    include: { author: true }
}>

export interface PostCardProps {
    id: string
    email: string
    title: string
    body: string
}

export interface PostListProps {
    results: PostWithAuthor[]
}

export interface SlowSectionProps {
    title: string
    body: string
}

export interface NewPostProps {
    setShowForm(value: boolean): void
}

export interface AddPostProps {
    onCancel(): void
}

export interface EditPostProps {
    id: string
    title: string
    body: string
}