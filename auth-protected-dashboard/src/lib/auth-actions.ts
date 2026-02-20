'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formdata: FormData) {
    const username = formdata.get('username')
    const cookieStore = await cookies()

    cookieStore.set('authToken', 'user123', {
        httpOnly: true,
        path: '/'
    })

    redirect('/dashboard')
}

export async function logout() {
    const cookieStore = await cookies()

    cookieStore.delete('authToken')
    redirect('/login')
}