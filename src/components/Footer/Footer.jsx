import Link from "next/link";
import React from "react";
Link;
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#18191E] text-white border-4 mb-2 border-blue-200 rounded-xl h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              IELTS <span className="text-red-600">CENTER</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook
                  size={30}
                  className="text-2xl hover:text-blue-600 cursor-pointer"
                />
              </Link>
              <Link href="https://www.instagram.coms" target="_blank">
                <FaInstagram
                  size={30}
                  className="text-2xl hover:text-red-600 cursor-pointer"
                />
              </Link>
              <Link href="https://www.snapchat.com" target="_blank">
                <FaSnapchat
                  size={30}
                  className="text-2xl hover:text-yellow-400 cursor-pointer"
                />
              </Link>
              <Link href="https://www.snapchat.com" target="_blank">
                <FaYoutube
                  size={30}
                  className="text-2xl hover:text-red-600 cursor-pointer"
                />
              </Link>
            </div>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Email:- info@example.com
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              +91-9897969594
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              +91-9898989898
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Coaching</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              IELTS
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              PTE
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              SPEAKING
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              INTERVIEW
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Visa Services</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              STUDY VISA
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              WORK VISA
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              TOURIST VISA
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              PR
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Our Branches</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              SIRSA
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              RANIA
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              ELLENABAD
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold">
          Copyright&#169; 2024 All rights reserved | developed by{" "}
          <Link href="https://pawantech.com" target="_blank">
            <span className="font-semibold text-blue-500 hover:text-red-600 cursor-pointer">
              Pawan
            </span>{" "}
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Footer;
