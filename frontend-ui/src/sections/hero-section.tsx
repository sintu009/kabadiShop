import { companiesLogo } from "../data/companies-logo";
import { ArrowRightIcon, StarIcon, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function HeroSection() {

    return (
        <>
            <div className="min-h-screen pb-20">
                <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    <div className="absolute top-28 xl:top-10 -z-50 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

                    <div className="flex items-center mt-32">
                        {/* <div className="flex -space-x-3 pr-3">
                            <img width={80} height={80} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200" alt="user3" className="size-8 aspect-square object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1" />
                            <img width={80} height={80} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200" alt="user1" className="size-8 aspect-square object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2" />
                            <img width={80} height={80} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200" alt="user2" className="size-8 aspect-square object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3" />
                            <img width={80} height={80} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200" alt="user3" className="size-8 aspect-square object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4" />
                            <img width={80} height={80} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=80&h=80&auto=format&fit=crop" alt="user5" className="size-8 aspect-square rounded-full border-2 border-white hover:-translate-y-0.5 transition z-5" />
                        </div>

                        <div>
                            <div className="flex ">
                                {Array(5).fill(0).map((_, i) => (
                                    <StarIcon key={i} className="size-4 text-transparent fill-green-600" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">
                                Trusted by 12,000+ creators
                            </p>
                        </div> */}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-17.5">
                        Sell Your Scrap, <span className=" bg-linear-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">Earn Money</span> Instantly.
                    </h1>

                    <p className="max-w-lg text-center text-zinc-600 text-base my-7">
                        KabadiShop connects scrap sellers with verified buyers. Get the best prices for your recyclable materials with doorstep pickup service.
                    </p>

                    <div className="flex items-center gap-4 ">
                        <Link to='/book-service' className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors">
                            Book Now
                            <ArrowRightIcon className="ml-1 size-5" />
                        </Link>
                        <Link to='/scrap-rates' className="flex items-center gap-2 border border-gray-300 hover:bg-zinc-100 transition rounded-full px-7 h-12 text-slate-700">
                            <span>Scrap Rate</span>
                        </Link>
                    </div>

                    <p className="py-6 text-base text-zinc-500 mt-14">Trusted by thousands of scrap sellers nationwide</p>

                    {/* <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-3xl w-full mx-auto py-4" id="logo-container">
                        {companiesLogo.map((company, index) => (
                            <React.Fragment key={index}>
                                {company.logo}
                            </React.Fragment>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    );
}