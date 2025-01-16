import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

const Resumes = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full md:3/4 p-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Start building your resume
          </h1>
          <p className="mt-4 font-thin text-xl text-slate-800">
            Your first resume – 100% free, all design features, unlimited
            downloads – yes really.
          </p>
        </div>
        <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href={"/resumes/create"}
            className="rounded-lg border border-slate-400 hover:bg-slate-300 border-dashed p-6 flex flex-col items-center space-y-4"
          >
            <FiPlus className="text-slate-400 text-2xl" />
            <h2 className="text-slate-400 font-semibold">New Blank</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resumes;
