import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import AdminLayout from "./module/admin/AdminLayout";
import AdminDashboard from "./module/admin/pages/AdminDashboard";
import ScrapBoy from "./module/admin/pages/ScrapBoy";
import Wallet from "./module/admin/pages/Wallet";
import Settings from "./module/admin/pages/Settings";
import AdminLogin from "./module/admin/AdminLogin";
import ProtectedRoute from "./module/admin/ProtectedRoute";
import ScrapBoyPortal from "./module/scrapboy/ScrapBoyPortal";
import ScrapBoyLogin from "./module/scrapboy/ScrapBoyLogin";
import ScrapBoyProtectedRoute from "./module/scrapboy/ScrapBoyProtectedRoute";
import PrivacyPolicy from "./PrivacyPolicy";
import Disclaimer from "./Disclaimer";
import TermsConditions from "./TermsConditions";
import BookService from "./BookService";
import ScrapRates from "./ScrapRates";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/admin/login",
        element: <AdminLogin />,
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <AdminDashboard />,
            },
            {
                path: "scrapboy",
                element: <ScrapBoy />,
            },
            {
                path: "wallet",
                element: <Wallet />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
    {
        path: "/scrapboy/login",
        element: <ScrapBoyLogin />,
    },
    {
        path: "/scrapboy",
        element: (
            <ScrapBoyProtectedRoute>
                <ScrapBoyPortal />
            </ScrapBoyProtectedRoute>
        ),
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
    },
    {
        path: "/disclaimer",
        element: <Disclaimer />,
    },
    {
        path: "/terms-conditions",
        element: <TermsConditions />,
    },
    {
        path: "/book-service",
        element: <BookService />,
    },
    {
        path: "/scrap-rates",
        element: <ScrapRates />,
    },
]);
