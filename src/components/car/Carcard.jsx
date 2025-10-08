import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Car, ArrowRight, CarFront } from "lucide-react";

const Carcard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md inset-ring-1 inset-ring-orange-900/50 border border-gray-200 w-full max-w-sm mx-auto mb-8 hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CarFront className="w-8 h-8 text-orange-600 bg-orange-100 p-1 rounded-md" />
            <span className="font-semibold text-orange-600 text-base">
              {car.name}
            </span>
          </div>
          <span className="text-orange-600/50 text-sm">{car.model}</span>
        </div>

        <div className="flex justify-end">
          <Link
            to={`/cardetails/${car.id}`}
            className="flex items-center text-sm font-medium text-orange-600  transition"
          >
            View Details
            <span className="ml-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carcard;
