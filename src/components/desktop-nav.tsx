import { CreditCard, Home, PieChartIcon, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function DesktopNav() {
    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:flex-shrink-0 md:h-screen bg-gray-800 shadow-md">
            <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-6 text-white">FinanceTracker</h1>
                    <nav className="flex flex-col space-y-2">
                        <NavLink to="/overview" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" >
                            <Home className="h-5 w-5" />
                            <span>Overview</span>
                        </NavLink>
                        <NavLink to="/expenses" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" >
                            <PieChartIcon className="h-5 w-5" />
                            <span>Expenses</span>
                        </NavLink>
                        <NavLink to="/transactions" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" >
                            <CreditCard className="h-5 w-5" />
                            <span>Transactions</span>
                        </NavLink>
                        <NavLink to="/settings" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" >
                            <Settings className="h-5 w-5" />
                            <span>Settings</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}