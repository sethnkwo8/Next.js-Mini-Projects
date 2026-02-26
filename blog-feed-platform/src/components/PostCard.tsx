import Image from "next/image"
import { PostCardProps } from "@/lib/types"
import Link from "next/link";
import { DeletePostButton } from "./DeletePostButton";
import { getCurrentUserId } from "@/lib/auth";

export function PostCard({ id, authorId, email, title, body }: PostCardProps) {
    const CURRENT_USER_ID = getCurrentUserId();

    return (
        <div className="rounded-lg shadow-lg bg-gray-500 text-white p-4 flex flex-col space-y-3">

            <Link href={`/posts/${id}`} className="hover:scale-105 transition-all">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/images/userIcon.png"
                            alt="User Icon"
                            width={50}
                            height={50}
                        />
                        <p>{email}</p>
                    </div>

                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-sm">{body}</p>
                </div>
            </Link>

            {authorId === CURRENT_USER_ID && (
                <div className="flex gap-4 text-sm">
                    <Link
                        href={`/posts/${id}/edit`}
                        className="text-blue-300 hover:text-blue-500"
                    >
                        Edit
                    </Link>

                    <DeletePostButton postId={id} />
                </div>
            )}
        </div>
    )
}
