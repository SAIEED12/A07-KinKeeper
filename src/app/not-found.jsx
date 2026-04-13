import React from 'react';
import { HiHome } from "react-icons/hi2"; 
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-black text-[#244D3F]">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-4 max-w-md">
                Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="mt-8">
                <button className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none normal-case px-6">
                    <HiHome className="text-lg" />
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;