import React from "react";
import { FiFileText } from "react-icons/fi";
import { TfiRulerPencil } from "react-icons/tfi";
import { FaShareSquare } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import Link from "next/link";

const SideNav = ({ activeSection, setActiveSection }) => {
  return (
    <>
      <section className="hidden md:flex flex-col space-y-8 p-6 w-full md:w-1/12 rounded-xl md:bg-white">
        <h2 className="text-xl text-purple-800">
          <Link href={'/'}>
          Resu<span className="font-bold">Make</span>
          </Link>
        </h2>
        <div className="flex flex-col space-y-4">
        <div
          onClick={() => setActiveSection("content")}
          className={`flex flex-col cursor-pointer items-center p-4 ${
            activeSection === "content"
              ? " text-purple-800  bg-slate-200  rounded-lg"
              : "text-slate-800"
          }`}
        >
          <FiFileText className="text-2xl" />
          <p className="mt-2">Content</p>
        </div>
        <div
          onClick={() => setActiveSection("customize")}
          className={`flex flex-col cursor-pointer items-center p-4 ${
            activeSection === "customize"
              ? " text-purple-800  bg-slate-200  rounded-lg"
              : "text-slate-800"
          }`}
        >
          <TfiRulerPencil className="text-2xl" />
          <p className="mt-2">Customize</p>
        </div>
        <div
          onClick={() => setActiveSection("links")}
          className={`flex flex-col cursor-pointer items-center p-4 ${
            activeSection === "links"
              ? " text-purple-800  bg-slate-200  rounded-lg"
              : "text-slate-800"
          }`}
        >
          <FaShareSquare className="text-2xl" />
          <p className="mt-2">Links</p>
        </div>
        </div>
      </section>
      <div className="fixed flex flex-col space-y-6 bottom-12 right-4 md:hidden">
      <div
          onClick={() => setActiveSection("content")}
          className={`flex flex-col cursor-pointer items-center p-4 rounded-full ${
            activeSection === "content"
              ? " text-white  bg-purple-800"
              : "text-slate-800 bg-slate-200"
          }`}
        >
          <FiFileText className="text-2xl" />
          
        </div>
        <div
          onClick={() => setActiveSection("customize")}
          className={`flex flex-col cursor-pointer items-center p-4 rounded-full ${
            activeSection === "customize"
              ? " text-white  bg-purple-800"
              : "text-slate-800 bg-slate-200"
          }`}
        >
          <TfiRulerPencil className="text-2xl" />
          
        </div>
        <div
          onClick={() => setActiveSection("links")}
          className={`flex flex-col cursor-pointer items-center p-4 rounded-full ${
            activeSection === "links"
              ? " text-white  bg-purple-800"
              : "text-slate-800 bg-slate-200"
          }`}
        >
          <FaShareSquare className="text-2xl" />
          
        </div>
        <div
          onClick={() => setActiveSection("view")}
          className={`flex flex-col cursor-pointer items-center p-4 rounded-full ${
            activeSection === "view"
              ? " text-white  bg-purple-800"
              : "text-slate-800 bg-slate-200"
          }`}
        >
          <GrFormView className="text-2xl" />
          
        </div>
      </div>
    </>
  );
};

export default SideNav;
