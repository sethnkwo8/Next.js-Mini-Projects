'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";
import crypto from "crypto"

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string

    if (!email || !password) {
        throw new Error('Email and Password is required')
    }

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        throw new Error('Invalid credentials')
    }

    const validPassword = verifyPassword(password, user.password)

    if (!validPassword) {
        throw new Error('Invalid credentials')
    }

    // Create session
    const sessionToken = crypto.randomUUID()
    const expiresAt = new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 7
    )
    await prisma.session.create({
        data: {
            token: sessionToken,
            userId: user.id,
            expiresAt
        }
    })

    // Set cookies
    const cookieStore = await cookies();
    cookieStore.set('session', sessionToken, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        expires: expiresAt
    })

    redirect('/');
}