import { CreditCard, Home, PieChartIcon, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 shadow-md">
          <nav className="flex justify-around items-center h-16">
              <NavLink to="/overview" className="flex flex-col items-center justify-center text-gray-300 hover:text-white" >
                  <Home className="h-5 w-5" />
                  <span className="text-xs">Overview</span>
              </NavLink>
              <NavLink to="/expenses"  className="flex flex-col items-center justify-center text-gray-300 hover:text-white" >
                  <PieChartIcon className="h-5 w-5" />
                  <span className="text-xs">Expenses</span>
              </NavLink>
              <NavLink to="/transactions" className="flex flex-col items-center justify-center text-gray-300 hover:text-white" >
                  <CreditCard className="h-5 w-5" />
                  <span className="text-xs">Transactions</span>
              </NavLink>
              <NavLink to="/settings" className="flex flex-col items-center justify-center text-gray-300 hover:text-white">
                  <Settings className="h-5 w-5" />
                  <span className="text-xs">Settings</span>
              </NavLink>
          </nav>
      </div>
  );
}