import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Laptop,
  BadgeIndianRupee,
  Shapes,
  TicketXIcon,
  Check,
  TabletSmartphoneIcon,
  TabletSmartphone,
  Youtube,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cars", href: "/carsPage" },
  { label: "Contact US", href: "/form" },
];

export const platformLinks = [
  { href: "#", icon: <Facebook /> },
  { href: "#", icon: <Instagram /> },
  { href: "#", icon: <Twitter /> },
];

export const communityLinks = [
  { href: "/home", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/carspage", text: "Cars" },
  { href: "/form", text: "Contact Us" },
];

export const helpfulLinks = [
  { href: "/", text: "Deals" },
  { href: "/", text: "Blog" },
  { href: "/", text: "Location" },
  { href: "/", text: "Privacy Policy" },
  { href: "/", text: "Terms and Conditions" },
];

import { ShieldCheck, Clock, Car, Wifi, MapPin, Smile } from "lucide-react";

export const rideFeatures = [
  {
    title: "Safe & Secure",
    description:
      "Travel with confidence thanks to safety protocols, background checks, and real-time trip monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "On Time Always",
    description:
      "Live traffic updates and smart routing help ensure your ride arrives right when you need it.",
    icon: Clock,
  },
  {
    title: "Comfort Guaranteed",
    description:
      "Relax in clean, modern vehicles with spacious seating, climate control, and a smooth ride.",
    icon: Car,
  },
  {
    title: "Free In-Ride Wi-Fi",
    description:
      "Stay connected on the go with complimentary high-speed Wi-Fi in every vehicle.",
    icon: Wifi,
  },
  {
    title: "Easy Pickup & Drop",
    description:
      "Get picked up and dropped off at your preferred location with GPS-accurate tracking.",
    icon: MapPin,
  },
  {
    title: "Friendly Drivers",
    description:
      "Enjoy your trip with polite, helpful, and professionally trained drivers who put your comfort first.",
    icon: Smile,
  },
];

import carens from "../assets/cars/kiacarens.avif";
import sonet from "../assets/cars/sonet.avif";
import swiftdzire from "../assets/cars/swiftdzire.avif";
import tatanexon from "../assets/cars/tatanexon.avif";
import toyotainnova from "../assets/cars/toyotainnova.avif";
export const cars = [
  {
    id: 1,
    name: "Kia",
    model: "Carens",
    image: carens,
    category: "MPV",
    description:
      "The Kia Carens is a versatile 7-seater MPV designed for maximum space, comfort, and style. Whether you’re going on a family trip or simply navigating city streets, the Carens offers a smooth ride, ample legroom, and advanced infotainment to keep everyone connected. Experience a blend of practicality and premium design, perfect for growing families.",
    fuelType: "petrol",
    seatingCapacity: "7",
    mileage: "12-15",
    driveType: "driver/self",
  },
  {
    id: 2,
    name: "Toyota",
    model: "Innova",
    image: toyotainnova,
    category: "MPV",
    description:
      "The Toyota Innova Crysta stands as a benchmark for comfortable family travel. With its powerful engine, sophisticated ride quality, and generous cabin space for 7 passengers, it's designed to make every journey enjoyable. Durable, reliable, and stylish — a true multi-purpose vehicle for both city commutes and long highway drives.",
    fuelType: "petrol",
    seatingCapacity: "7",
    mileage: "10-12",
    driveType: "driver/self",
  },
  {
    id: 3,
    name: "Tata",
    model: "Nexon",
    image: tatanexon,
    category: "SUV",
    description:
      "The Tata Nexon is a compact yet powerful 5-seater SUV, perfect for those who want a stylish ride without compromising on space or performance. Built with a strong body structure and numerous safety features, the Nexon offers a comfortable, stable ride across city roads and rough terrains alike. Get ready for your next adventure!",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "16-18",
    driveType: "driver/self",
  },
  {
    id: 4,
    name: "Maruti Suzuki",
    model: "Swift Dzire",
    image: swiftdzire,
    category: "Sedan",
    description:
      "The Swift Dzire is a sophisticated and reliable sedan that combines power, mileage, and style in a compact package. With a comfortable cabin for 5, generous boot space, and a smooth ride, it's perfect for both daily commutes and weekend getaways. Experience a blend of practicality and prestige with the Swift Dzire!",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "20-22",
    driveType: "driver/self",
  },
  {
    id: 5,
    name: "Kia",
    model: "Sonet",
    image: sonet,
    category: "SUV",
    description:
      "The Kia Sonet stands out with its sporty design, high ground clearance, and numerous high-tech features. This 5-seater crossover is tailored for those who want a stylish ride without compromise. From its turbocharged engine to its premium infotainment, the Sonet guarantees a comfortable and connected driving experience for all.",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "18-20",
    driveType: "driver/self",
  },
];

import profile7 from "../assets/profile/profile7.avif";
import profile5 from "../assets/profile/profile5.avif";
import profile8 from "../assets/profile/profile8.avif";

export const testimonials = [
  {
    name: "Mark Davis",
    date: "March 5, 2024",
    comment:
      "Amazing service and great prices! The booking process was seamless, and the car was in perfect condition.",
    photo: profile5,
  },
  {
    name: "Jane Smith",
    date: "March 5, 2024",
    comment:
      "The best car rental experience I've had. The staff was friendly, and the car was clean and well-maintained.",
    photo: profile7,
  },
  {
    name: "Alice Johnson",
    date: "March 5, 2024",
    comment:
      "Fast, easy, and affordable! I loved the convenience and the responsive customer support.",
    photo: profile8,
  },
];

export const selfdrive = [
  {
    number: "01",
    title: "Drive at Your Own Pace",
    description:
      "Enjoy the freedom of flexible travel. No driver, no schedule—just you and the open road.",
  },
  {
    number: "02",
    title: "Fully Sanitized & Ready to Go",
    description:
      "Every self-drive car is thoroughly cleaned, sanitized, and inspected before each ride for your peace of mind.",
  },
  {
    number: "03",
    title: "Modern Fleet, Maximum Comfort",
    description:
      "Choose from a wide range of premium vehicles with advanced features, plush interiors, and smooth handling—perfect for every journey.",
  },
];
