import Image from "next/image";
import React from "react";
import { GoBell } from "react-icons/go";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import ToggleButton from "@/components/ToggleButton";


const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const FriendsDetailsPage = async ({ params }) => {
  const friends = await friendsPromise();
  const { id } = await params;
  const friend = friends.find((friend) => String(friend.id) === id);
  return (
    <div className="container mx-auto">
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">

  <div className="left flex flex-col gap-3">
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className="rounded-full mb-3"
      />
      <h2 className="font-semibold text-[#1F2937] text-lg">{friend.name}</h2>
      <p className={`rounded-full px-3 py-1 mt-1 text-xs font-semibold ${
        friend.status === "Overdue" ? "bg-red-500 text-white" :
        friend.status === "On-track" ? "bg-green-800 text-white" :
        friend.status === "Almost Due" ? "bg-[#EFAD44] text-white" :
        "bg-gray-300 text-gray-700"
      }`}>
        {friend.status}
      </p>
      <div className="flex flex-wrap justify-center gap-1 mt-2 mb-3">
        {friend.tags.map((tag) => (
          <span key={tag} className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-[#64748B] text-sm italic mb-1">{`"${friend.bio}"`}</p>
      <p className="text-[#94A3B8] text-xs">{friend.email}</p>
    </div>

    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-lg shadow-sm p-4 flex justify-center items-center gap-3 cursor-pointer hover:bg-gray-50">
        <GoBell className="text-[#1F2937]" />
        <span className="text-[#1F2937] font-medium">Snooze 2 Weeks</span>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 flex justify-center items-center gap-3 cursor-pointer hover:bg-gray-50">
        <FiArchive className="text-[#1F2937]" />
        <span className="text-[#1F2937] font-medium">Archive</span>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 flex justify-center items-center gap-3 cursor-pointer hover:bg-gray-50">
        <RiDeleteBin5Line className="text-red-500" />
        <span className="text-red-500 font-medium">Delete</span>
      </div>
    </div>
  </div>
  <div className="right lg:col-span-2 flex flex-col gap-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</h3>
        <p className="text-[#64748B] text-sm mt-1">Days Since Contact</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h3>
        <p className="text-[#64748B] text-sm mt-1">Goal (Days)</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center">
        <h3 className="text-xl font-bold text-[#244D3F]">{friend.next_due_date}</h3>
        <p className="text-[#64748B] text-sm mt-1">Next Due</p>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[#244D3F] font-semibold">Relationship Goal</h3>
        <button className="border border-gray-300 text-[#1F2937] text-sm px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50">
          Edit
        </button>
      </div>
      <p className="text-[#64748B] text-sm">
        Connect every <span className="font-bold text-[#1F2937]">{friend.goal} days</span>
      </p>
    </div>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-[#244D3F] font-semibold text-base mb-4">Quick Check-In</h3>
 
        <ToggleButton friend={friend}></ToggleButton>

    </div>

  </div>
</div>
    </div>
  );
};

export default FriendsDetailsPage;
