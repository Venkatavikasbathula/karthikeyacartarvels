import React from "react";
import Hero1 from "../components/home/Hero1";
import WhyRideWithUs from "../components/home/WhyRideWithUs";
import Vehicle from "../components/car/Vehicle";
import Counters from "../components/counter/Counters";
import Testimonial from "../components/testimonial/Testimonial";
import ViewAllCars from "../components/car/ViewAllCars";
import SelfDrive from "../components/selfdrive/SelfDrive";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Counters />
      <WhyRideWithUs />
      <Vehicle />
      <SelfDrive />
      <ViewAllCars />
      {/* <Testimonial /> */}
    </>
  );
};

export default Home;
