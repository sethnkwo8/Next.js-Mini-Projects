'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function CreatePost(formData: FormData) {
    const title = formData.get('title')
    const description = formData.get('description')

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            description: description,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const data = await response.json();

    console.log('Success');

    revalidatePath('/');
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('authToken');
    redirect('/login')
}