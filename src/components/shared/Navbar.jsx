import React from 'react';
import logo from "../../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import Link from 'next/link';
import MyLink from './MyLink';
import Image from 'next/image';
const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <RiHome2Line></RiHome2Line>
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <MdOutlineWatchLater />
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <TfiStatsUp />
        },
    ]
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="container mx-auto"> 
    <div className="navbar-start">
      <Link href="/" className="text-xl font-bold hover:bg-slate-100">
        <Image src={logo} alt="Logo" className="" />
      </Link>
    </div>
    <div className="navbar-end">
        {
            navItems.map((item,ind)=>(
                <MyLink key={ind} href={item.path} icon={item.icon}>{item.text}</MyLink>
            ))
        }
        
    </div>
  </div>
</div>
    );
};

export default Navbar;