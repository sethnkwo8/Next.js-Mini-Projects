import { PostListProps } from "@/lib/types";
import { PostCard } from "./PostCard"
import { getCurrentUserId } from "@/lib/auth";

export async function FeaturedPostList({ results }: PostListProps) {
    const CURRENT_USER_ID = await getCurrentUserId()
    const posts = results;
    const featuredPosts = posts.filter(p => p.author.id === CURRENT_USER_ID)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
                <PostCard key={post.id} id={post.id} authorId={post.authorId} email={post.author.email} title={post.title} body={post.body} />
            ))}
        </div>
    )
}
