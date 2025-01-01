import React from "react";
import {
  FaFacebookF,
  FaDiscord,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white p-16 md:p-32 mt-8 md:mt-16">
      <div className="flex flex-col md:flex-row space-y-6">
        {/* logo section */}
        <div>
          <h2 className="text-4xl">
            Resu<span className="font-bold">Make</span>
          </h2>
          <p className="mt-4 w-full md:w-1/3">
            We are indie developers based in Bangladesh -tigers, not kangaroos.
            Our mission: Empower job seekers worldwide. We are here to make your
            journey smoother, more enjoyable and ultimately more successful.
          </p>
        </div>
        <div >
          <h2 className="text-xl font-semibold mb-4">Find us on:</h2>
          <div className="flex flex-row space-x-4">
            <p className="text-2xl text-purple-800 hover:text-blue-400 bg-slate-200 p-2 rounded-full">
              <FaFacebookF />
            </p>
            <p className="text-2xl text-purple-800 hover:text-green-400 bg-slate-200 p-2 rounded-full">
              <FaWhatsapp />
            </p>
            <p className="text-2xl text-purple-800 hover:text-black bg-slate-200 p-2 rounded-full">
              <RiTwitterXLine/>
            </p>
            <p className="text-2xl text-purple-800 hover:text-purple-600 bg-slate-200 p-2 rounded-full">
              <FaTwitch />
            </p>
            <p className="text-2xl text-purple-800 hover:text-blue-600 bg-slate-200 p-2 rounded-full">
              <FaDiscord />
            </p>
          </div>
        </div>
      </div>
      <p className="text-center font-thin mt-6 text-purple-300">All rights reserved to Gazi Nafis Rafi</p>
    </footer>
  );
};

export default Footer;
