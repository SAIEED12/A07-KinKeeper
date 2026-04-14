import React from "react";
import { IoMdAdd } from "react-icons/io";
const Banner = () => {
  return (
    <div className="contaiener mx-auto ">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6 text-center ">
        Friends to keep close in your life
      </h2>
      <p className="text-[#64748B] mb-10 text-center lg:max-w-2xl text-lg lg:ml-auto lg:mr-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center bg-[#244D3F] text-white p-3 rounded-sm gap-1 cursor-pointer hover:bg-[#1A3A2D] mb-10">
          <IoMdAdd />
          Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
        <div className="bg-[#FFFFFF] shadow-lg gap-4 p-10 rounded-lg">
          <h2 className="text-center text-[#244D3F] font-bold text-3xl mb-2">10</h2>
          <p className="text-[#64748B] text-[18px] text-center">Total Friends</p>
        </div>
        <div className="bg-[#FFFFFF] shadow-lg gap-4 p-10 rounded-lg">
          {" "}
          <h2 className="text-center text-[#244D3F] font-bold text-3xl mb-2">4</h2>
          <p className="text-[#64748B] text-[18px] text-center">On Track</p>
        </div>
        <div className="bg-[#FFFFFF] shadow-lg gap-4 p-10 rounded-lg">
          {" "}
          <h2 className="text-center text-[#244D3F] font-bold text-3xl mb-2">6</h2>
          <p className="text-[#64748B] text-[18px] text-center">Need Attention</p>
        </div>
        <div className="bg-[#FFFFFF] shadow-lg gap-4 p-10 rounded-lg">
          {" "}
          <h2 className="text-center text-[#244D3F] font-bold text-3xl mb-2">12</h2>
          <p className="text-[#64748B] text-center">Interactions This Month</p>
        </div>
      </div>
      <div className="bg-gray-200 h-0.5 w-full"></div>
    </div>
  );
};

export default Banner;
