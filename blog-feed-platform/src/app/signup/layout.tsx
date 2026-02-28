import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Sign Up Form'
}

export default function SignUpLayout({
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
