import React from "react";
import { cars } from "../constants";
import Carcard from "../components/car/Carcard";
import FormFill from "../components/form/FormFill";

const groupedCars = {
  MPV: cars.filter((car) => car.category === "MPV"),
  Sedan: cars.filter((car) => car.category === "Sedan"),
  SUV: cars.filter((car) => car.category === "SUV"),
};

const CarsPage = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-0">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="bg-orange-100 rounded-full text-center mt-20">
            <p className=" text-orange-600 px-4 py-2 font-medium">Cars</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-slate-800 font-semibold text-center md:leading-16 mt-4">
            Explore the Full Range of{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              premium
            </span>{" "}
            Vehicles Ready for Your Next Journey
          </h1>

          <div className="flex flex-col items-center text-justify md:text-start space-y-4">
            <p className="text-gray-700 text-base md:text-lg">
              We offer a wide selection of meticulously maintained vehicles
              tailored to match your unique style, needs, and travel
              preferences. Whether you’re looking for a compact hatchback for
              city cruising, a rugged SUV for adventurous terrains, or a premium
              MUV for family road trips — we have the perfect ride for every
              journey. Choose from fuel-efficient models for everyday commutes,
              spacious options for group travel, and stylish rides that make a
              statement wherever you go. With top-tier comfort, safety, and
              performance in every vehicle, your travel experience with us is
              always smooth, reliable, and enjoyable.
            </p>

            <p className="text-gray-700 text-base md:text-lg">
              Whether you're heading out for a quick city ride, a spontaneous
              weekend escape, or a long-awaited family vacation, our diverse
              fleet is designed to fit every lifestyle and occasion. Each
              vehicle is meticulously maintained to ensure peak performance and
              cleanliness, offering fuel efficiency, comfort, and safety in
              every mile. With flexible booking options and competitive pricing,
              you get the convenience you need — without compromising on
              quality. Let us take the stress out of travel so you can focus on
              making memories, wherever the road leads.
            </p>

            <p className="text-gray-700 text-base md:text-lg">
              Browse through our well-organized collection below — from zippy
              hatchbacks to luxurious SUVs, we've got something for every kind
              of journey. Each vehicle listing includes comprehensive
              specifications and key features to help you choose with
              confidence. Find the perfect match for your travel needs and let
              your next ride be smooth, stylish, and stress-free.
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              Sri Karthikeya Travels gives you the freedom to enjoy your journey
              your way — with complete privacy and independence. Start savoring
              the road trip from the moment you hit the road, not just when you
              reach your destination. To make your experience even better, Sri
              Karthikeya Travels in India offers unlimited kilometers on all
              bookings — no usage caps, no hidden limits. We believe the best
              things in life shouldn’t come with restrictions, and this is our
              way of saying that choosing our cars is one of the best decisions
              you'll make. Our goal is simple: help you focus on counting
              memories, not kilometers — making every journey more joyful and
              fulfilling.
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              Having your friends and family coming over for a long weekend?
              Bored of driving your own vehicle and wanting to try your hands on
              a different car? Used to owning your own car but somehow stranded
              without one? Peak hour rush in all modes of public transport
              horrifying you? Or just afraid of running the risk of being
              fleeced by local autowallahs and taxiwallahs in a new town?
              Whatever your reason may be, Sri Karthikeya travels is your
              default choize to address all these reasons.
            </p>
          </div>
        </div>

        {Object.entries(groupedCars).map(([category, carList]) => (
          <div key={category} className="my-12 text-left">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {carList.map((car) => (
                <Carcard key={car.id} car={car} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FormFill />
    </section>
  );
};

export default CarsPage;
