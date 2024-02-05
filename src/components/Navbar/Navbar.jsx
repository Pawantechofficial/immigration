"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed bg-[#18191E] w-full h-16 shadow-xl border-b-1 z-40 border-b-white border-b-2 border-blue-600">
      <div className="text-white flex justify-between items-center z-50 h-full w-full px-4 sm:px-8 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={160}
            height={42}
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="hidden md:flex text-white">
            <Link href="/">
              <li className="ml-10 uppercase text-base lg:text-xl hover:text-[#C7252F]">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase text-base lg:text-xl hover:text-[#C7252F]">
                About
              </li>
            </Link>
            <Link href="/coaching">
              <li className="ml-10 uppercase text-base lg:text-xl hover:text-[#C7252F]">
                coaching
              </li>
            </Link>
            <Link href="/visas">
              <li className="ml-10 uppercase text-base lg:text-xl hover:text-[#C7252F]">
                visas
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase text-base lg:text-xl hover:text-[#C7252F]">
                contact
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden pl-24 text-white cursor-pointer"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#18191E] text-white p-10 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={handleNav}
                className="py-4 px-3 uppercase cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={handleNav}
                className="py-4 px-3 uppercase cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/coaching">
              <li
                onClick={handleNav}
                className="py-4 px-3 uppercase cursor-pointer"
              >
                coaching
              </li>
            </Link>
            <Link href="/visas">
              <li
                onClick={handleNav}
                className="py-4 px-3 uppercase cursor-pointer"
              >
                visas
              </li>
            </Link>
            <Link href="/contacts">
              <li
                onClick={handleNav}
                className="py-4 px-3 uppercase cursor-pointer"
              >
                contact
              </li>
            </Link>
            {/* demo booking button */}
            <Link href="/contact">
              <button className="py-2 mt-2 text-white cursor-pointer bg-[#C7252F] px-3 rounded-3xl">
                Demo Booking
              </button>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook size={30} className="cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.coms" target="_blank">
            <FaInstagram size={30} className="cursor-pointer" />
          </Link>
          <Link href="https://www.snapchat.com" target="_blank">
            <FaSnapchat size={30} className="cursor-pointer" />
          </Link>
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={160}
            height={42}
            className="cursor-pointer pt-10"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
