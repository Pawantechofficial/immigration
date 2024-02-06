import Image from "next/image";
import React from "react";
import canada from "../../../public/canada.jpg";
import team from "../../../public/team.jpg";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="pt-10 w-full justify-center">
      {/* Hero section starts */}
      <div className="h-full w-full items-center p-2 xl:p-0 flex mx-auto flex-col-reverse lg:flex-row">
        <div className="basis-[50%] text-white p-2 lg:px-8 hero-content">
          <h1 className="text-2xl xl:text-4xl text-white text-center lg:text-left">
            <span className="text-blue-500">IELTS</span>{" "}
            <span className="text-red-500">CENTER</span> - Your Gateway to
            Success!
          </h1>
          <p className="py-4 md:py-8 xl:text-xl text-white">
            At IELTS CENTER, we are dedicated to helping you achieve your dreams
            of studying or working abroad. With a team of experienced educators
            and visa consultants, we provide comprehensive services to guide you
            through the IELTS journey and visa application process.
          </p>
          <div>
            <Link href="/">
              <button className="px-1 py-1  mr-4 w-full sm:w-fit text-white mt-3 rounded-full">
                <span className="block bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
                  Get Advise
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="basis-[50%] xl:h-screen  p-6 xl:p-0">
          <Image src={canada} className="w-full xl:hidden rounded-xl" />
        </div>
      </div>

      {/* background image */}
      <div className=" hidden xl:block my-auto">
        <Image
          src={canada}
          fill={true}
          className="max-h-screen p-0 opacity-50 object-cover pt-14 -z-10 rounded-2xl"
        />
      </div>

      {/* about section */}
      <div className="h-full lg:min-h-screen w-full items-center p-4 flex mx-auto flex-col lg:flex-row">
        <div className="basis-[50%] p-5">
          <Image src={team} className="w-full rounded-xl" />
        </div>
        <div className="basis-[50%] p-5">
          <div className="pb-10">
            <h1 className="text-center lg:text-left text-2xl lg:text-4xl text-blue-600">
              Why Choose Us?
            </h1>
          </div>
          <h1 className="text-2xl xl:text-4xl text-white text-center lg:text-left">
            Expert IELTS & PTE Coaching
          </h1>
          <p className="py-4 md:py-8 xl:text-xl text-slate-400">
            Our certified instructors offer personalized coaching to enhance
            your English language skills and ensure success in the IELTS exam.
            Our proven methods focus on all four language skills: listening,
            reading, writing, and speaking.
          </p>
          <h1 className="text-2xl xl:text-4xl text-white text-center lg:text-left">
            Visa Services
          </h1>
          <p className="py-4 md:py-8 xl:text-xl text-slate-400">
            Navigating the visa application process can be complex. Our
            experienced consultants are here to simplify the journey, providing
            step-by-step guidance, document preparation, and application support
            for various visa categories.
          </p>
          <Link href="/about">
            <button className="px-1 py-1  mr-4 w-full sm:w-fit text-white mt-3 rounded-full">
              <span className="block bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
                Explore More
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* our services */}
      <div className="w-full py-5 lg:pb-20 mx-auto">
        <h1 className="text-4xl text-center text-white">Our Services</h1>
      </div>

      <div className="h-full max-w-[1200] w-full items-center px-8 lg:px-24 flex mx-auto flex-col lg:flex-row">
        <div className="basis-[70%] p-2 lg:px-10">
          <h1 className="text-2xl xl:text-4xl text-white text-center lg:text-left">
            Expert IELTS & PTE Coaching
          </h1>
          <p className="py-4 md:py-8 xl:text-xl text-slate-400">
            Our certified instructors offer personalized coaching to enhance
            your English language skills and ensure success in the IELTS exam.
            Our proven methods focus on all four language skills: listening,
            reading, writing, and speaking.
          </p>
          <h1 className="text-2xl xl:text-4xl text-white text-center lg:text-left">
            Visa Services
          </h1>
          <p className="py-4 md:py-8 xl:text-xl text-slate-400">
            Navigating the visa application process can be complex. Our
            experienced consultants are here to simplify the journey, providing
            step-by-step guidance, document preparation, and application support
            for various visa categories.
          </p>
        </div>

        <div className="basis-[30%] p-2">
          <Image src={team} className="w-full rounded-xl" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-2 px-8 pb-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <div className="shadow-lg p-4 text-white mx-4 sm:mx-0 bg-slate-500 text-center rounded-lg">
          <h3 className="text-2xl py-2">IELTS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
          <div>
            <Link href="/">
              <button className="px-1 py-1  mr-4 w-full sm:w-fit text-white mt-3 rounded-full">
                <span className="block bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
                  More Details
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-lg p-4 text-white mx-4 sm:mx-0 bg-slate-500 text-center rounded-lg">
          <h3 className="text-2xl py-2">PTE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
          <div>
            <Link href="/">
              <button className="px-1 py-1  mr-4 w-full sm:w-fit text-white mt-3 rounded-full">
                <span className="block bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
                  More Details
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-lg p-4 text-white mx-4 sm:mx-0 bg-slate-500 text-center rounded-lg">
          <h3 className="text-2xl py-2">SPOKEN ENGLISH</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
          <div>
            <Link href="/">
              <button className="px-1 py-1  mr-4 w-full sm:w-fit text-white mt-3 rounded-full">
                <span className="block bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
                  More Details
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-lg p-4 text-white mx-4 sm:mx-0 bg-slate-500 text-center rounded-lg">
          <h3 className="text-2xl py-2">VISA SERVICES</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolorem.
          </p>
          <div>
            <Link href="/">
              <button className="px-1 py-1  mr-4 w-full sm:w-fit text-white mt-3 rounded-full">
                <span className="block bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
                  More Details
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
