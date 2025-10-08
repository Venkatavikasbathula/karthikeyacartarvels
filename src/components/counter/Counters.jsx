import { Star } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

const Counters = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-evenly text-center py-10 md:py-20">
          {[
            { label: "Happy Customers", end: 500, duration: 2.5 },
            { label: "Trips Completed", end: 1000, duration: 2 },
            { label: "Cities Served", end: 25, duration: 2 },
          ].map((item, index, arr) => (
            <div
              key={index}
              className={`flex-1 px-4 md:px-8 py-6 ${
                index !== arr.length - 1 ? "md:border-r md:border-gray-300" : ""
              }`}
            >
              <h2 className="text-5xl font-semibold text-orange-600">
                <CountUp end={item.end} duration={item.duration} />+
              </h2>
              <p className="text-gray-600 mt-2 text-base md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
