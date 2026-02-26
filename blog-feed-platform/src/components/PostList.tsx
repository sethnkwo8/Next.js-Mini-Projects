import { PostCard } from "./PostCard"
import { PostListProps } from "@/lib/types";

export async function PostList({ results }: PostListProps) {
    const posts = results;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
                <PostCard key={post.id} id={post.id} authorId={post.authorId} email={post.author.email} title={post.title} body={post.body} />
            ))}

        </div>
    )
}
