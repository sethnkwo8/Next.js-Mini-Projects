export default function LoginPage() {
    return (
        <div className="bg-white min-h-screen flex flex-row justify-center items-center">
            <form action="" className="w-1/2 border-gray-500 border rounded-lg p-8 flex flex-col items-center space-y-4">
                <h1 className="font-bold text-3xl text-black">Login</h1>
                <input className="outline-0 border border-gray-400 p-2 w-full rounded-lg text-black " name="username" placeholder="Username" type="text" />
                <button className="w-3/4 text-lg py-4 px-8 rounded-lg bg-blue-400 hover:bg-blue-600 transition-all ease-in-out duration-300">Login</button>
            </form>
        </div>
    )
}
