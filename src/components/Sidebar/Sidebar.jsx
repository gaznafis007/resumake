"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DefaultButton from "../DefaultButton/DefaultButton";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full md:w-1/5 p-6 bg-slate-300 text-slate-800 md:h-screen">
      <div className="flex flex-row md:flex-col justify-between md:h-full">
      <div className="flex flex-row md:flex-col md:space-y-8 space-x-4 md:space-x-0">
        <h2 className="text-purple-800 text-3xl md:text-center">
          <Link href={'/'}>Resu<span className="font-semibold">Make</span></Link>
        </h2>
        <div className="mt-8 hidden md:flex flex-col space-y-4">
        <Link
            className={`text-purple-800 rounded-md px-4 py-2 ${
              pathname == "/" ?
              "bg-white font-semibold" : "border border-slate-500"
            }`}
            href={"/"}
          >
            Home
          </Link>
      <Link
            className={`text-purple-800 rounded-md px-4 py-2 ${
              pathname == "/resumes" ?
              "bg-white font-semibold" : "border border-slate-500"
            }`}
            href={"/resumes"}
          >
            Resumes
          </Link>
      <Link
            className={`text-purple-800 rounded-md px-4 py-2 ${
              pathname == "/about" ?
              "bg-white font-semibold" : "border border-slate-500"
            }`}
            href={"/about"}
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex flex-row md:flex-col md:space-y-4 space-x-4 md:space-x-0">
        <DefaultButton><Link href={'/login'}>Login</Link></DefaultButton>
        <DefaultButton><Link href={'/register'}>Register</Link></DefaultButton>
      </div>
      </div>
      <div className="flex flex-row space-x-4 md:hidden mt-4">
      <Link
            className={`text-purple-800 rounded-md px-4 py-2 ${
              pathname == "/" ?
              "bg-white font-semibold" : "border border-slate-500"
            }`}
            href={"/"}
          >
            Home
          </Link>
      <Link
            className={`text-purple-800 rounded-md px-4 py-2 ${
              pathname == "/resumes" ?
              "bg-white font-semibold" : "border border-slate-500"
            }`}
            href={"/resumes"}
          >
            Resumes
          </Link>
      <Link
            className={`text-purple-800 rounded-md px-4 py-2 ${
              pathname == "/about" ?
              "bg-white font-semibold" : "border border-slate-500"
            }`}
            href={"/about"}
          >
            About
          </Link>
      </div>
    </div>
  );
};

export default Sidebar;