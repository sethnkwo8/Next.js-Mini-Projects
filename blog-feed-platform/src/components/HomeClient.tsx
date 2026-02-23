'use client'

import { NewPostButton } from "@/components/NewPostButton";
import { AddPostForm } from "@/components/AddPostForm";
import { useState } from "react";

export default function HomeClient({
    children
}: {
    children: React.ReactNode
}) {

    const [showForm, setShowForm] = useState<boolean>(false)

    return (
        showForm ? <AddPostForm onCancel={() => setShowForm(false)} /> : (
            <div className="p-6 min-h-screen flex flex-col items-center space-y-2">
                <h1 className="font-bold text-4xl">Blog</h1>
                <div className="w-full md:w-3/4 flex flex-row justify-end p-6">
                    <NewPostButton setShowForm={setShowForm} />
                </div>
                {children}
            </div>
        )
    )
}
