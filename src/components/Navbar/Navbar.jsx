"use client";
import Link from "next/link";
import DefaultButton from "../DefaultButton/DefaultButton";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Modal from "../Modal/Modal";
import { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    return (
        <nav className="flex flex-row justify-between items-center p-4 md:shadow-sm md:m-6 md:bg-white md:rounded-md">
            <h2 className="text-3xl font-semibold text-violet-800">ResuMake</h2>
            <ul className="hidden md:flex flex-row space-x-6">
                {
                    navItems?.map(item =>(
                        <li className="font-semibold text-slate-800 hover:text-purple-800" key={item?.link}>
                            <Link href={item?.link}>{item?.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <DefaultButton optionalStyle={'hidden md:inline-block'}>
                <Link href={'/resumes'}>Get Started</Link>
            </DefaultButton>
            {!open && <HiMiniBars3 onClick={() =>setOpen(true)} className="text-3xl md:hidden text-violet-800"/>}
            {
                open && <Modal position={'fixed top-12 right-8'} setOpen={setOpen}>
                    <ul className="flex flex-col space-y-3 text-right">
                {
                    navItems?.map(item =>(
                        <li className="font-semibold text-slate-800 hover:text-purple-800" key={item?.link}>
                            <Link href={item?.link}>{item?.name}</Link>
                        </li>
                    ))
                }
            </ul>
                </Modal>
            }
        </nav>
    );
};

export default Navbar;