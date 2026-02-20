import { logout } from "@/lib/auth-actions";

export function LogoutButton() {
    return (
        <div>
            <form action={logout}>
                <button className="hover:bg-gray-600 p-1 text-left">Logout</button>
            </form>
        </div>
    )
}
