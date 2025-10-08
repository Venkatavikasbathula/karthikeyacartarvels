import React from "react";
import CountUp from "react-countup";

const Satisfaction = () => {
  const stats = [
    { label: "Satisfaction Rate", end: 98, duration: 2.5, suffix: "%" },
    { label: "Trips Completed", end: 1000, duration: 2, suffix: "+" },
    { label: "Happy Clients", end: 90, duration: 2, suffix: "%" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-neutral-100 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-evenly text-center py-10 md:py-20">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex-1 px-4 md:px-8 py-6 ${
              index !== stats.length - 1 ? "md:border-r md:border-gray-300" : ""
            }`}
          >
            <h2 className="text-5xl font-semibold text-slate-900">
              <CountUp end={item.end} duration={item.duration} />
              <span className="text-orange-600">{item.suffix}</span>
            </h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Satisfaction;
