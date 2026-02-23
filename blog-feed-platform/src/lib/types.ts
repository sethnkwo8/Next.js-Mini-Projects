export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostCardProps {
    id: number
    userId: number
    title: string
    body: string
}

export interface PostListProps {
    results: Post[]
}

export interface SlowSectionProps {
    title: string
    body: string
}

export interface NewPostProps {
    setShowForm(value: boolean): void
}