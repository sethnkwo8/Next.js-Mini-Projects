import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardPage() {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div className="md:ml-64 py-24 px-12">
                <h1>Welcome to Dashboard</h1>
            </div>
        </div>
    )
}
