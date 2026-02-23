import { NewPostProps } from "@/lib/types";

export function NewPostButton({ setShowForm }: NewPostProps) {
    return (
        <button className="rounded-lg shadow-lg py-4 px-8 text-white bg-gray-600 hover:bg-gray-800" onClick={() => setShowForm(true)}>New Post</button>
    )
}
