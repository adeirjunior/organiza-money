import DesktopNav from "@/components/desktop-nav";
import MobileNav from "@/components/mobile-nav";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white md:flex-row">
            <DesktopNav />
            <Outlet />
            <MobileNav />
        </div>
    );
}