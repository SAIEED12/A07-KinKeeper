import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-[#FFFFFF] p-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center border-b border-white/10 pb-12">
                    <aside className="mb-8">
                        <h1 className='mb-6 text-6xl md:text-7xl font-bold'>
                            KeenKeeper
                        </h1>
                        <p className="opacity-80 mx-auto ">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </aside>

                    <nav>
                        <h2 className="mb-6 opacity-90">
                            Social Links
                        </h2>
                        <div className="flex justify-center items-center gap-5">
                            <a 
                                href="#" 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244D3F] hover:scale-110 transition-transform duration-200 shadow-lg"
                                aria-label="Instagram"
                            >
                                <FaInstagram></FaInstagram>
                            </a>

                            <a 
                                href="#" 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244D3F] hover:scale-110 transition-transform duration-200 shadow-lg"
                                aria-label="Facebook"
                            >
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244D3F] hover:scale-110 transition-transform duration-200 shadow-lg"
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm ">
                    <p className="opacity-60">
                        © {new Date().getFullYear()} KeenKeeper. All rights reserved.
                    </p>
                    <nav className="flex gap-8 mt-6 md:mt-0 opacity-80">
                        <a className="hover:text-white hover:underline cursor-pointer">Privacy Policy</a>
                        <a className="hover:text-white hover:underline cursor-pointer">Terms of Service</a>
                        <a className="hover:text-white hover:underline cursor-pointer">Cookies</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;