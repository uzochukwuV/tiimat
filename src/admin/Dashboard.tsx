import {AdminSidebar} from "./components/Sidebar"
import {Outlet} from "react-router-dom";
export function Dashboard() {
    return (
        <section id="dashboard" className=" absolute top-0 left-0 right-0 bottom-0">
            <div className="flex ">
                <AdminSidebar />
                <div className="flex-1 h-screen rounded">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}