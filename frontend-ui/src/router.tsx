import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import AdminLayout from "./module/admin/AdminLayout";
import AdminDashboard from "./module/admin/pages/AdminDashboard";
import ScrapBoy from "./module/admin/pages/ScrapBoy";
import Wallet from "./module/admin/pages/Wallet";
import Settings from "./module/admin/pages/Settings";
import PickupOrders from "./module/admin/pages/pickupOrder";
import ScrapPrice from "./module/admin/pages/scrapRate";
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
import Login from "./Login";
import Signup from "./Signup";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/admin/login",
        element: <AdminLogin />,
    },
    {
        path: "/admin/forgot-password",
        element: <ForgotPassword />,
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
                path: "pickup-orders",
                element: <PickupOrders />,
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
                path: "scrapRate",
                element: <ScrapPrice />,
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
    {
        path: "/about-us",
        element: <AboutUs />,
    },
    {
        path: "/contact-us",
        element: <ContactUs />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
