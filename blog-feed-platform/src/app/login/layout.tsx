import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login Form'
}

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
