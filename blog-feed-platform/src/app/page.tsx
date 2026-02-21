import { FeaturedPostList } from "@/components/FeaturedPostsList";
import { PostList } from "@/components/PostList";

export default function HomePage() {
  return (
    <div className="p-6 min-h-screen flex flex-col items-center space-y-2">
      <h1 className="font-bold text-4xl">Blog</h1>
      <div className="w-full md:w-3/4 flex flex-col space-y-2 md:p-4 lg:p-6">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <PostList limit={15} />
      </div>
      <div className="w-full md:w-3/4 flex flex-col space-y-2 md:p-4 lg:p-6">
        <h2 className="text-2xl font-bold">Featured Posts</h2>
        <FeaturedPostList limit={15} />
      </div>
    </div>
  )
}
