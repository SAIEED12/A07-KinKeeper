"use client";
import { TimelineContext } from "@/context/timeline.context";
import React, { useContext, useState } from "react";
import call from "@/assets/call.png";
import text from "@/assets/text.png";
import video from "@/assets/video.png";
import Image from "next/image";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const getIcon = (type) => {
    if (type === "Call") return <Image src={call} alt="Call" className="w-6 h-6" />;
    if (type === "Text") return <Image src={text} alt="Text" className="w-6 h-6" />;
    if (type === "Video") return <Image src={video} alt="Video" className="w-6 h-6" />;
  };

  const filteredTimeline = filter === "All"
    ? timeline
    : timeline.filter((item) => item.type === filter);

  return (
    <div className="p-6">
      {timeline.length === 0 ? (
        <div className="text-center text-gray-500 mt-35 sm:mt-50 text-3xl">
          <p>Timeline is empty!</p>
        </div>
      ) : (
        <div className="container mx-auto p-10">
          <h2 className="text-5xl font-bold mb-8 mt-20">Timeline</h2>

          <div className="w-full sm:w-64 mb-10">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-black bg-white cursor-pointer focus:outline-none font-semibold"
            >
              <option value="All">Filter timeline</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
          </div>

          {filteredTimeline.length === 0 ? (
            <p className="text-gray-400 text-lg">No interactions found.</p>
          ) : (
            filteredTimeline.map((item, index) => (
              <div key={index} className="flex gap-4 mb-4 container mx-auto p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl flex justify-center items-center">{getIcon(item.type)}</div>
                <div>
                  <h3 className="font-semibold text-[#244D3F] text-lg">
                    {item.type} <span className="text-gray-400 font-normal">with {item.name}</span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;