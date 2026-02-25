import { PostListProps } from "@/lib/types";
import { PostCard } from "./PostCard"

export async function FeaturedPostList({ results }: PostListProps) {
    const posts = results;
    const featuredPosts = posts.filter(p => p.author.email == 'alice@example.com')

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
                <PostCard key={post.id} id={post.id} email={post.author.email} title={post.title} body={post.body} />
            ))}
        </div>
    )
}
