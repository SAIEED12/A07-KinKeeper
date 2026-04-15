"use client";
import { TimelineContext } from '@/context/timeline.context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// export const metadata = {
//   title: "Stats | KinKeeper",
//   description: "your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
// };



const StatsPage = () => {

    const { timeline, setTimeline } = useContext(TimelineContext);
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });
  
const data = [
    { name: "Call", value: counts.Call, fill: "#016630" },
  { name: "Text", value: counts.Text, fill: "#8142f5" },
  { name: "Video", value: counts.Video, fill: "#33ab63" },
];

    return (
        <>
        {counts.Call === 0 && counts.Text === 0 &&   counts.Video === 0 ? (
  <div className="text-center text-gray-500 mt-35 sm:mt-50 text-3xl">
    <p>No Stats Found!</p>
  </div>
) : (
  <div className="container mx-auto p-10">
    <h2 className="text-5xl font-bold mb-8 mt-20">
      Friendship Analytics
    </h2>

    <div className="shadow-md p-10 rounded-lg mb-10">
      <p className="text-[#244D3F] font-semibold text-lg">
        By Interaction Type
      </p>

      <div className="flex justify-center items-center mb-5 mt-5 p-2 rounded-lg">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  </div>
)}
        </>
    );
};

export default StatsPage;