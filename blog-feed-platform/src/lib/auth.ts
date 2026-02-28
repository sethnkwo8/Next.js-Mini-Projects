import prisma from "./prisma"
import { hashPassword } from "./password"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import crypto from "crypto"


export function getCurrentUserId() {
    return "cmm1vw8uj0000lx8zxq6d63mf"
}

export async function signUp(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        throw new Error('Email and Password are required')
    }

    const existingUser = await prisma.user.findUnique({
        where: { email }
    })

    if (existingUser) {
        throw new Error('User exists already')
    }

    // Hash password
    const hashedPassword = hashPassword(password);

    // Create user
    const user = await prisma.user.create({
        data: {
            email,
            password
        }
    })

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

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set('session', sessionToken, {
        httpOnly: true,
        sameSite: "lax",
        path: '/',
        expires: expiresAt
    })

    redirect('/')
}