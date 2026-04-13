'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href,children, icon}) => {
    const pathName = usePathname() 
    return (
        <div>
            <Link href={href} className={`flex items-center gap-1 px-3 py-1 rounded-sm font-semibold 
                ${pathName === href ? "bg-[#1a3d35] text-white" : "text-[#64748B] hover:text-[#197460]"}`}>
                    {icon && <span className="w-4 h-4">{icon}</span>}
                    {children}
            </Link>
        </div>
    );
};

export default MyLink;