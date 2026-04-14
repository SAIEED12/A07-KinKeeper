'use client'
import { TimelineContext } from '@/context/timeline.context';
import React, { useContext } from 'react';

// export const metadata = {
//   title: "Timeline | KinKeeper",
//   description: "your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
// };



const TimelinePage = () => {

    const{timeline, setTimeline} = useContext(TimelineContext)

    return (
        <div>
            
        </div>
    );
};

export default TimelinePage;