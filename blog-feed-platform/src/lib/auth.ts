import prisma from "./prisma"
import { cookies } from "next/headers"

export async function getCurrentUserId() {
    const cookieStore = await cookies();
    const token = cookieStore.get('session')?.value;

    if (!token) return null;

    const session = await prisma.session.findUnique({
        where: { token },
        include: { user: true }
    })

    if (!session) return null;

    if (session.expiresAt < new Date()) return null;

    return session?.userId
}
