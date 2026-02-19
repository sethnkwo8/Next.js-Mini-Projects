'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function Login(formdata: FormData) {
    const username = formdata.get('username')
    const cookieStore = await cookies()

    cookieStore.set('authToken', 'user123', {
        httpOnly: true,
        path: '/'
    })

    redirect('/dashboard')
}