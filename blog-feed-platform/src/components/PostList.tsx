import { PostListProps } from "@/lib/types";
import { PostCard } from "./PostCard"
import { fetchPosts } from "@/lib/posts"

export async function PostList({ limit }: PostListProps) {
    const posts = await fetchPosts(limit);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
                <PostCard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
            ))}
        </div>
    )
}
