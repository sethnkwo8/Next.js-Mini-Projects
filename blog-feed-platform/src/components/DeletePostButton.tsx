import { deletePost } from '@/app/actions'

export function DeletePostButton({ postId }: { postId: string }) {
    return (
        <form action={deletePost}>
            <input type="hidden" name="postId" value={postId} />
            <button
                type="submit"
                className="text-white rounded-lg shadow-lg py-2 px-4 bg-red-600 hover:scale-105 transition-all ease-in-out duration-300 text-sm"
            >
                Delete
            </button>
        </form>
    )
}