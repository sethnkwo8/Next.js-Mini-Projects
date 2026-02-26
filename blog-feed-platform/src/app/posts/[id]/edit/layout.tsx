import { Metadata } from "next"

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params

    return {
        title: `Post ${id}`,
        description: `Editing post ${id}`
    }
}

export default async function PostLayout({
    children,
    params,
}: {
    children: React.ReactNode
} & Props) {

    return (
        <div>
            {children}
        </div>
    )
}