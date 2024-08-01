import React from "react";

const statsData = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];
const Stats = () => {
  return (
    <div className="flex justify-evenly">
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <p className="text-3xl font-bold">{stat.count}</p>
          <p className="text-richblack-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
