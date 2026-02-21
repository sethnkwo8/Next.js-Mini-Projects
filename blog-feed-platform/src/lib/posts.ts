import { Post } from "./types"

export async function fetchPosts(limit: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
        {
            next: { revalidate: 300 }
        }
    )
    const data: Post[] = await res.json()

    return data

}