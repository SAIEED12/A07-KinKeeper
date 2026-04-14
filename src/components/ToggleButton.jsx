"use client";
import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { PiVideoCamera } from "react-icons/pi";
import { TimelineContext } from "@/context/timeline.context";
import { toast, Zoom } from "react-toastify";

const ToggleButton = ({friend}) => {
  const { timeline, setTimeline } = useContext(TimelineContext);

  const handleCall = () => {
    setTimeline([...timeline, friend]);
    toast.success(`Call with ${ friend.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  };
  const handleText = () => {
    setTimeline([...timeline, friend]);
    toast.success(`Text with ${ friend.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  };
  const handleVideoCall = () => {
    setTimeline([...timeline, friend]);
    toast.success(`Video Call with ${ friend.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={handleCall}
        className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50"
      >
        <BiPhoneCall className="text-2xl text-[#1F2937]" />
        <span className="text-sm text-[#1F2937]">Call</span>
      </button>
      <button
        onClick={handleText}
        className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50"
      >
        <RiMessage2Line className="text-2xl text-[#1F2937]" />
        <span className="text-sm text-[#1F2937]">Text</span>
      </button>
      <button
        onClick={handleVideoCall}
        className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50"
      >
        <PiVideoCamera className="text-2xl text-[#1F2937]" />
        <span className="text-sm text-[#1F2937]">Video</span>
      </button>
    </div>
  );
};

export default ToggleButton;
