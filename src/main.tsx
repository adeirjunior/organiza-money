import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/dashboard/layout";
import DashboardPage from "./pages/dashboard";
import Home from ".";
import Settings from "./pages/dashboard/settings";
import Expenses from "./pages/dashboard/expenses";
import Transactions from "./pages/dashboard/transactions";

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <HashRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
