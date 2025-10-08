import React from "react";
import { CarFrontIcon, FuelIcon, PersonStanding } from "lucide-react";
import { Link } from "react-router-dom";

const IndividualCarDetails = ({ car }) => {
  return (
    <>
      <div className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 md:h-96 object-cover rounded-lg mb-6"
          />
          <div className="flex flex-col items-start">
            <p className="text-gray-800 text-sm md:text-base">
              {car.description || "No description provided for this vehicle."}
            </p>
            <div className="mt-4 flex justify-center w-full text-center">
              <Link
                to="/form"
                className="w-full px-5 py-3 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6 text-base md:text-lg text-gray-800 text-center ">
          <div className="p-4 flex justify-center items-center gap-2 md:border-r-2">
            <FuelIcon /> Fuel Type:{" "}
            <span className="font-medium">{car.fuelType}</span>
          </div>
          <div className="p-4 flex justify-center items-center gap-2 md:border-r-2">
            <CarFrontIcon /> Seating:{" "}
            <span className="font-medium">{car.seatingCapacity}</span>
          </div>
          <div className="p-4 flex justify-center items-center gap-2">
            <PersonStanding /> Drive:{" "}
            <span className="font-medium">{car.driveType}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualCarDetails;
