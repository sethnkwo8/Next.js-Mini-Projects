import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Main Dashboard'
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            {children}
        </div>
    )
}