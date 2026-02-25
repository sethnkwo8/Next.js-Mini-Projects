import { CreatePost } from "@/app/actions";
import { AddPostProps } from "@/lib/types";

export function AddPostForm({ onCancel }: AddPostProps) {
    async function handleAction(formData: FormData) {
        await CreatePost(formData);
        onCancel();
    }


    return (
        <div className="min-h-screen flex flex-row justify-center items-center text-white">
            <form action={handleAction} className="rounded-lg shadow-lg m-4 p-6 w-full md:w-1/2 flex flex-col space-y-4 bg-gray-500">
                <h1 className="font-bold text-center text-4xl">Add Post</h1>
                <div>
                    <label className="text-xl" htmlFor="title">Title</label>
                    <input className="w-full border-black border outline-0 rounded-lg p-2" id="title" name="title" type="text" />
                </div>
                <div>
                    <label className="text-xl" htmlFor="body">Body</label>
                    <textarea className="w-full border-black border outline-0 rounded-lg p-2" id="body" name="body" />
                </div>
                <button type="submit" className="py-4 px-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all ease-in-out duration-300">Add Post</button>
            </form>
        </div >
    )
}
