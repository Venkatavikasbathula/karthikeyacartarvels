import React from "react";
import { rideFeatures } from "../../constants";

const WhyRideWithUs = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 xl:px-0 text-center">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-orange-100 py-1 px-4 rounded-full shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping" />
            <p className="uppercase font-semibold tracking-wide text-orange-600 text-sm">
              benefits
            </p>
          </div>
          <h2 className="max-w-3xl text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Ride
            </span>{" "}
            With Us?
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mt-2">
            Enjoy a smarter, safer, and smoother travel experience crafted to
            put your comfort first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {rideFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100 text-orange-600 mb-6 md:mb-12 shadow-inner group-hover:shadow-orange-300 transition-shadow duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRideWithUs;
