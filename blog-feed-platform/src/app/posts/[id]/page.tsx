import Image from "next/image";
import { fetchPost } from "@/lib/posts";
import { SlowSection } from "@/components/SlowSection";
import { Suspense } from "react";

export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params
    const post = await fetchPost(Number(id))

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-1/2 p-4 rounded-lg shadow-lg bg-gray-700 flex flex-col space-y-4
            items-center">
                <Image
                    src='/images/userIcon.png'
                    alt="User Icon"
                    width={130}
                    height={80}
                />
                <h1 className="font-bold text-2xl">User {post.userId}</h1>
                <Suspense fallback={<p>loading...</p>}>
                    <SlowSection title={post.title} body={post.body} />
                </Suspense>
            </div>
        </div>
    )
}
