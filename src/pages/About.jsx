import React from "react";
import car5 from "../assets/cars/car5.jpg";
import { CarFront, HeartHandshake, Map } from "lucide-react";
import Satisfaction from "../components/about/Satisfaction";
import SelfDrive from "../components/selfdrive/SelfDrive";

const About = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="bg-orange-100 rounded-full text-center mt-20">
            <p className=" text-orange-600 px-4 py-2 font-medium">About Us</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-slate-800 font-semibold text-center md:leading-16">
            Connect with our team and drive your{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Journey
            </span>{" "}
            with comfort, style, and confidence
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2 bg-orange-100 py-1 px-4 rounded-full shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-pulse" />
                  <p className="uppercase font-medium tracking-wide text-orange-600 text-sm">
                    Our story
                  </p>
                </div>
                <h2 className="max-w-3xl text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
                  Who we are
                </h2>
              </div>
              <div className="flex flex-col justify-between space-y-4">
                <p className="text-gray-700 text-sm md:text-base tracking-wide leading-relaxed">
                  We are passionate about helping people explore the world on
                  wheels. Our mission is to provide reliable, affordable, and
                  stylish vehicles for every kind of traveler.
                </p>
                <p className="text-gray-700 text-sm md:text-base tracking-wide leading-relaxed">
                  Whether you're taking a short trip across the city or
                  embarking on a long journey with your loved ones, we’ve got
                  the perfect vehicle to make your travel smooth and enjoyable.
                </p>
                <p className="text-gray-700 text-sm md:text-base tracking-wide leading-relaxed">
                  With a commitment to quality and customer satisfaction, our
                  fleet is regularly maintained and fully equipped to meet your
                  needs. From compact cars to spacious SUVs, we ensure you find
                  the right ride for any occasion.
                </p>
              </div>
            </div>
            <div>
              <img
                src={car5}
                alt="Car"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 py-12">
            <div className="flex flex-col items-start gap-2 md:gap-6 mb-10 md:mb-16">
              <div className="flex items-center gap-2 bg-orange-100 py-1 px-4 rounded-full shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-pulse" />
                <p className="uppercase font-medium tracking-wide text-orange-600 text-sm">
                  Benefits
                </p>
              </div>
              <h2 className="max-w-3xl text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
                What We Offer
              </h2>
              <p className="text-base md:text-lg text-gray-500 max-w-xl md:mt-2">
                Discover a curated collection of travel experiences with our
                modern fleet and personalized service.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="p-4 md:p-8">
                <CarFront className="text-orange-500 bg-orange-100 px-4 py-2 w-16 h-16 rounded-xl mb-2" />

                <h3 className="text-slate-800 font-semibold text-base md:text-lg tracking-tight mb-2">
                  Wide Fleet Selection
                </h3>
                <p className="text-gray-500 text-base md:text-lg tracking-wide leading-relaxed">
                  Hatchbacks, sedans, SUVs, and MUVs – tailored for city drives,
                  weekend getaways, and long journeys.
                </p>
              </div>
              <div className="p-4 md:p-8 border-t border-b border-slate-300">
                <Map className="text-orange-500 bg-orange-100 px-4 py-2 w-16 h-16 rounded-xl mb-2" />

                <h3 className="text-slate-800 font-semibold text-base md:text-lg tracking-tight mb-2">
                  Personalized Travel Solutions
                </h3>
                <p className="text-gray-500 text-base md:text-lg tracking-wide leading-relaxed">
                  Whether it's a spontaneous road trip or a pre-planned tour,
                  we’ve got packages designed just for you.
                </p>
              </div>
              <div className="p-4 md:p-8">
                <HeartHandshake className="text-orange-500 bg-orange-100 px-4 py-2 w-16 h-16 rounded-xl mb-2" />

                <h3 className="text-slate-800 font-semibold text-base md:text-lg tracking-tight mb-2">
                  Comfort & Safety First
                </h3>
                <p className="text-gray-500 text-base md:text-lg tracking-wide leading-relaxed">
                  Every vehicle is cleaned, serviced, and ready. Your peace of
                  mind is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Satisfaction />
        <SelfDrive />
      </div>
    </section>
  );
};

export default About;
