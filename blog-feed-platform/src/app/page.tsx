import { FeaturedPostList } from "@/components/FeaturedPostsList";
import { PostList } from "@/components/PostList";
import HomeClient from "@/components/HomeClient";
import { fetchPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await fetchPosts(15);

  return (
    <HomeClient>
      <div className="w-full md:w-3/4 flex flex-col space-y-2 md:p-4 lg:p-6">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <PostList results={posts} />
      </div>
      <div className="w-full md:w-3/4 flex flex-col space-y-2 md:p-4 lg:p-6">
        <h2 className="text-2xl font-bold">Featured Posts</h2>
        <FeaturedPostList results={posts} />
      </div>
    </HomeClient>
  )
}
