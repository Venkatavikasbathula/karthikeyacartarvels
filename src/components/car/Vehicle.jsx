import React from "react";
import { cars } from "../../constants/index";
import Carcard from "./Carcard";
import { Link } from "react-router-dom";

const Vehicle = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 xl:px-0 text-center">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-orange-100 py-1 px-4 rounded-full shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping" />
            <p className="uppercase font-semibold tracking-wide text-orange-600 text-sm">
              fleet
            </p>
          </div>
          <h2 className="max-w-3xl text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
            Take a Look At Our{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Fleet
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mt-4">
            Experience unmatched quality, style, and performance with our
            top-tier selection of vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.slice(0, 3).map((car) => (
            <Carcard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
