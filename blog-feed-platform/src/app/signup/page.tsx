import { signUp } from "./actions"
import Link from "next/link"

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                action={signUp}
                className="rounded-lg shadow-lg m-4 p-8 md:p-12 w-full md:w-1/2 flex flex-col space-y-4 bg-gray-500"
            >
                <h1 className="font-bold text-center text-4xl">Sign Up</h1>

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border-black border outline-0 rounded-lg p-2"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full border-black border outline-0 rounded-lg p-2"
                    required
                />

                <button className="py-4 px-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all ease-in-out duration-300">
                    Create Account
                </button>

                <div className="text-center">
                    <p>Already have an account? <span><Link href="/login" className="text-blue-500 hover:text-blue-700 hover:underline">
                        Log In
                    </Link></span></p>
                </div>
            </form>
        </div>
    )
}