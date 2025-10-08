import React from "react";
import { selfdrive } from "../../constants";

const SelfDrive = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto py-8 md:py-12 px-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 bg-orange-100 py-1 px-4 rounded-full shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping" />
                <p className="uppercase font-semibold tracking-wide text-orange-600 text-sm">
                  self-drive
                </p>
              </div>
              <h2 className="max-w-4xl text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
                Experience the Freedom of{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                  Self Drive
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 mt-2">
                Enjoy a smarter, safer, and smoother travel experience crafted
                to put your comfort first.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left border border-gray-300 py-20 px-4 rounded-2xl">
              {selfdrive.map((drive, index) => {
                return (
                  <div key={index} className="">
                    <div className="text-7xl text-gray-500">{drive.number}</div>

                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {drive.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                      {drive.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelfDrive;
