import { SlowSectionProps } from "@/lib/types";

export async function SlowSection({ title, body }: SlowSectionProps) {

    // Artificial delay for 3 seconds 

    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div>
            <div>
                <h2 className="font-bold">{title}</h2>
            </div>
            <p className="text-center">{body}</p>
        </div>
    )
}
