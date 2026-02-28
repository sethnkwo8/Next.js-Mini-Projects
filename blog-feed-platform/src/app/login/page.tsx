import { login } from "./actions";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-row justify-center items-center text-white">
            <form action={login} className="rounded-lg shadow-lg m-4 p-8 md:p-12 w-full md:w-1/2 flex flex-col space-y-4 bg-gray-500">
                <h1 className="font-bold text-center text-4xl">Login</h1>
                <div>
                    <input className="w-full border-black border outline-0 rounded-lg p-2" id="email" name="email" placeholder="Email" required type="email" />
                </div>
                <div>
                    <input className="w-full border-black border outline-0 rounded-lg p-2" id="password" name="password" placeholder="Password" required type="password" />
                </div>
                <button type="submit" className="py-4 px-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all ease-in-out duration-300">Login</button>
                <div className="text-center">
                    <p>Don't have an account? <span><Link href="/signup" className="text-blue-500 hover:text-blue-700 hover:underline">
                        Sign Up
                    </Link></span></p>
                </div>
            </form>
        </div >
    )
}
