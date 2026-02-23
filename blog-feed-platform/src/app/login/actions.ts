'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const username = formData.get('username');

    const cookieStore = await cookies();
    cookieStore.set('authToken', 'user123', {
        httpOnly: true,
        path: '/'
    })

    redirect('/');
}