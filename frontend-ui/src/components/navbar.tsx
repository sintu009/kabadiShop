import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
    onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "/scrap-rates", label: "Scrap Rates" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#pricing", label: "Pricing" },
    ];

    return (
        <>
            <nav className="z-50 border-y border-dashed border-slate-200 w-full">
                <div className="flex items-center justify-between py-4 px-4 md:px-10 text-sm border-x border-dashed border-slate-200 max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                        <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Kabadi Zone</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        {navLinks.map((link) => (
                            <Link key={link.href} to={link.href} className="hover:text-green-600 transition">{link.label}</Link>
                        ))}
                    </div>

                    <div className="flex gap-2">
                    
                        <button onClick={onLoginClick} className="hidden md:block px-7 py-2 border border-gray-200 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                            Login
                        </button>
                            <Link to="/book-service" className="hidden md:block px-7 py-2 bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-full text-white">
                            Book Now
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                        <MenuIcon />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                {navLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="text-white">{link.label}</Link>
                ))}
                <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex" >
                    X
                </button>
            </div>
        </>
    );
}