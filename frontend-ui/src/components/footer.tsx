import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-gray-500 bg-linear-to-r from-green-200/60 via-green-200/60 to-green-200/60 md:from-white md:via-green-200/60 md:to-white mt-52">
                <div className="flex flex-wrap items-start gap-10 md:gap-15 xl:gap-35">
                    <a href="/" className="max-md:w-full max-md:mb-10">
                        <div className="flex items-center gap-2">
                            <svg className="size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">KabadiShop</span>
                        </div>
                    </a>
                    <div>
                        <p className="font-semibold text-gray-800">Services</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/" className="hover:text-green-600 transition">Sell Scrap</Link></li>
                            <li><Link to="/" className="hover:text-green-600 transition">Scrap Rates</Link></li>
                            <li><Link to="/" className="hover:text-green-600 transition">Book Pickup</Link></li>
                            <li><Link to="/" className="hover:text-green-600 transition">Track Order</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Company</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/" className="hover:text-green-600 transition">About Us</Link></li>
                            <li><Link to="/" className="hover:text-green-600 transition">Contact</Link></li>
                            <li><Link to="/" className="hover:text-green-600 transition">Blog</Link></li>
                            <li><Link to="/" className="hover:text-green-600 transition">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Legal</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/privacy-policy" className="hover:text-green-600 transition">Privacy Policy</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-green-600 transition">Disclaimer</Link></li>
                            <li><Link to="/terms-conditions" className="hover:text-green-600 transition">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end max-md:mt-10">
                    <p className="max-w-60">Turn your scrap into cash. We offer the best rates and hassle-free doorstep pickup service.</p>
                    <div className="flex items-center gap-4 mt-3">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 hover:text-green-500">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 hover:text-green-500">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 hover:text-green-500">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 hover:text-green-500">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-3 text-center">© 2025 <a href="/">KabadiShop</a>. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};
