import { signUp } from "@/lib/auth"

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                action={signUp}
                className="bg-gray-500 p-6 rounded-lg space-y-4"
            >
                <h1 className="text-2xl font-bold text-white">Sign Up</h1>

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 rounded"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 rounded"
                />

                <button className="bg-gray-800 text-white px-4 py-2 rounded">
                    Create Account
                </button>
            </form>
        </div>
    )
}