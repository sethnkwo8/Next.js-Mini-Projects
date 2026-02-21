export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostCardProps {
    userId: number
    title: string
    body: string
}

export interface PostListProps {
    limit: number
}