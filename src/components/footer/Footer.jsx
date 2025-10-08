import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { platformLinks, communityLinks, helpfulLinks } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-orange-600">
        <div className="relative max-w-7xl mx-auto py-4 px-6 xl:px-0">
          <div className="grid items-start sm:grid-cols-3 gap-4 md:gap-6 lg:gap-10 border-b border-neutral-100 py-10 lg:py-12">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-left text-2xl lg:text-3xl text-white font-bold">
                Karthikeya Travels
              </h1>
              <p className="text-left text-neutral-100 text-sm font-normal leading-6 tracking-wide">
                At Karthikeya Travels, we take pride in delivering a travel
                experience that’s built on trust, comfort, and reliability. Your
                journey is our commitment — safe, simple, and seamless.
              </p>
              <ul className="flex justify-evenly md:justify-normal space-x-6">
                {platformLinks.map((link, index) => (
                  <li key={index} className="flex">
                    <a
                      className="text-neutral-200 border border-white rounded-full p-2 transition duration-1000 ease-in-out hover:bg-neutral-200 hover:text-orange-600"
                      href={link.href}
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {communityLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        className="text-neutral-100 text-sm hover:text-white font-normal tracking-wide"
                        to={link.href}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Helpful Links
                </h3>
                <ul className="space-y-2">
                  {helpfulLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        className="text-neutral-100 text-sm hover:text-white font-normal tracking-wider"
                        to={link.href}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Reach Us
                </h3>
                <div className="flex items-start gap-4">
                  <MapPin className="text-neutral-100 w-10 h-10" />
                  <p className="text-neutral-100 text-sm  tracking-wide">
                    Door No 126-230, Om Shakthi Communication Opposite,
                    SambaSiva Complex, Amarvathi Road Gorantla,Guntur-522034
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-neutral-100 w-5 h-5" />
                  <p className="text-neutral-100 text-sm">
                    Karthikeyacartravels1@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-neutral-100 w-5 h-5" />
                  <p className="text-neutral-100 text-sm">+91 9493427015</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
            <div className="col-span-2">
              <h6 className="text-neutral-100 text-sm font-normal text-center md:text-start">
                Copyright © 2025 Karthikeya Travels. All rights reserved.
              </h6>
            </div>
            <div className="col-span-1">
              <h6 className="text-neutral-100 text-sm font-normal md:text-end text-center">
                Developed and maintained by J-Monk Devops
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
