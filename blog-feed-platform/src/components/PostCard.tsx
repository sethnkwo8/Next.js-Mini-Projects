import Image from "next/image"
import { PostCardProps } from "@/lib/types"

export function PostCard({ userId, title, body }: PostCardProps) {
    return (
        <div className="rounded-lg shadow-lg p-4 flex flex-col space-y-2 bg-gray-500 text-white hover:scale-105
        transition-all ease-in-out duration-300">
            <div className="flex flex-row items-center space-x-3">
                <div>
                    <Image
                        src='/images/userIcon.png'
                        alt="User Icon"
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <p>User {userId}</p>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
            </div>
            <div>
                <p className="text-sm">{body}</p>
            </div>
        </div>
    )
}
