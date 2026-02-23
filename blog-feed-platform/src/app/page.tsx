import { FeaturedPostList } from "@/components/FeaturedPostsList";
import { PostList } from "@/components/PostList";
import HomeClient from "@/components/HomeClient";
import { fetchPosts } from "@/lib/posts";
import { logout } from "./actions";

export default async function HomePage() {
  const posts = await fetchPosts(15);

  return (
    <div>
      <div>
        <form action={logout} className="w-full flex flex-row justify-end p-4">
          <button className="rounded-lg shadow-lg py-2 px-4 text-white bg-gray-600 hover:bg-gray-800" type="submit">Logout</button>
        </form>
      </div>
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
    </div>
  )
}
