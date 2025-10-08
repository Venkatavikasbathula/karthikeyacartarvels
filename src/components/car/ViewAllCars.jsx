import React from "react";
import { cars } from "../../constants";
import { Link } from "react-router-dom";
import car4 from "../../assets/cars/car4.jpg";
import { CarFront } from "lucide-react";

const ViewAllCars = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-20 xl:px-0">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-orange-100 py-1 px-4 rounded-full shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping" />
            <p className="uppercase font-semibold tracking-wide text-orange-600 text-sm">
              explore
            </p>
          </div>
          <h2 className="max-w-4xl text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
            Explore Our Wide Range Of{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Cars
            </span>
          </h2>
          <p className="max-w-4xl text-base md:text-lg text-gray-600 text-center">
            Experience seamless travel with our modern, fully-inspected, and
            comfort-focused fleet—designed for smooth rides and unforgettable
            journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={car4}
              alt="car"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="flex flex-col justify-center space-y-10">
            <div className="flex flex-col justify-center items-start space-y-6">
              <div>
                <CarFront className="w-16 h-16 p-4 bg-orange-100 text-orange-600 rounded-2xl" />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  Explore Our Fleet
                </h3>
                <p className="text-slate-500 text-base md:text-lg">
                  Check out our complete collection of rental cars to find the
                  perfect ride for your next trip.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {cars.map((car) => (
                  <span
                    key={car.id}
                    className="border border-slate-400 text-slate-600 font-medium px-4 py-2 rounded-full transition-all duration-300"
                  >
                    {car.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full">
              <Link
                to="/carspage"
                className="w-full block text-center px-5 py-3 text-base rounded-full bg-black opacity-90 hover:opacity-100 text-white transition-all duration-300 font-medium"
              >
                Check Out All Cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAllCars;
