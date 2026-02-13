import React from "react";
import { Navigate } from "react-router-dom";

export default function ScrapBoyProtectedRoute({ children }: { children: React.ReactNode }) {
    const isAuthenticated = localStorage.getItem("scrapboyToken");

    if (!isAuthenticated) {
        return <Navigate to="/scrapboy/login" replace />;
    }

    return <>{children}</>;
}
