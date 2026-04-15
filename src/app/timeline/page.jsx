"use client";
import { TimelineContext } from "@/context/timeline.context";
import React, { useContext } from "react";
import call from "@/assets/call.png";
import text from "@/assets/text.png";
import video from "@/assets/video.png";
import Image from "next/image";

// export const metadata = {
//   title: "Timeline | KinKeeper",
//   description: "your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
// };

const TimelinePage = () => {
  const { timeline, setTimeline } = useContext(TimelineContext);

  const getIcon = (type) => {
  if (type === "Call") return <Image src={call} alt="Call" className="w-6 h-6" />;
  if (type === "Text") return <Image src={text} alt="Text" className="w-6 h-6" />;
  if (type === "Video") return <Image src={video} alt="Video" className="w-6 h-6" />;
};

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-5xl font-bold mb-8 mt-20">Timeline</h2>
      <div className=" w-full sm:w-64 mb-10">
        <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-black bg-white cursor-pointer focus:outline-none font-semibold">
          <option disabled selected>
            Filter timeline
          </option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
     
      </div>
      {timeline.map((item) => (
  <div key={item.id} className="flex gap-4 mb-4 container mx-auto p-4 bg-white rounded-lg shadow-sm ">
    <div className="text-2xl flex justify-center items-center">{getIcon(item.type)}</div>

    <div>
      <h3 className="font-semibold">
        {item.type} with {item.name}
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
))}
    </div>
  );
};

export default TimelinePage;
