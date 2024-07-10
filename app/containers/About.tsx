"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="flex mt-10 mb-4">
      <div
        className="flex items-center justify-center h-screen w-screen overflow-hidden bg-center"
        style={{ backgroundImage: "url('/images/bg-kar.jpg')", backgroundSize: "127% 114%" }}
      >
        <div className="flex-1 lg:mx-40 mx-10 mt-6">
          <div className="text-left" data-aos="fade-right">
            <h1 className="text-4xl text-black hidden lg:flex z-10 font-bold">
              KARAKTER
            </h1>
            <h1 className="text-5xl text-black hidden lg:flex z-10 font-bold">
              WEAPMATH
            </h1>
            <div className="mt-4 border-2 border-green-500 hidden lg:flex w-1/6"></div>
            <div className="border-2 border-green-500 hidden lg:flex w-1/12"></div>
            <h1 className="text-black text-[75px] max-md:text-4xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] lg:absolute lg:top-[-10px] lg:left-0  duration-500 font-bold">
              KARAKTER
            </h1>
            <h1 className="text-black text-[75px] max-md:text-3xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] lg:absolute lg:top-[-10px] lg:left-0 font-bold  duration-500">
              WEAPMATH
            </h1>
            <div className="mt-4 border-2 border-green-500 w-1/3 lg:hidden flex"></div>
            <div className="border-2 border-green-500 w-1/6 lg:hidden flex">
            </div>
            <div className="">
              <div className="mx-6 sm:mx-1 grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-1">
                <div className="">
                  <Image src="/images/Character/char1.gif" className="shadow-md shadow-black rounded-md border border-black hover:scale-105 duration-500 transition-all my-2" width={500} height={500} alt="char1" />
                  <div className="flex items-center gap-1">
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">19/07/2024</p>
                  <p className="text-xs text-green-500 font-bold">  | </p>
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">PATCH</p>
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">NOTE</p>
                  </div>
                  <h1 className="font-semibold text-sm lg:text-lg">Sumatra Utara </h1>
                </div>
                <div className="">
                  <Image src="/images/Character/char2.gif" className="rounded-md shadow-md shadow-black border border-black hover:scale-105 duration-500 transition-all my-2" width={500} height={500} alt="char2" />
                  <div className="flex items-center gap-1">
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">19/07/2024</p>
                  <p className="text-xs text-green-500 font-bold">  | </p>
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">PATCH</p>
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">NOTE</p>
                  </div>
                  <h1 className="font-semibold text-sm lg:text-lg">Jawa Barat</h1>
                </div>
                <div className="">
                  <Image src="/images/Character/char3.gif" className="rounded-md shadow-md shadow-black border border-black hover:scale-105 duration-500 transition-all my-2" width={500} height={500} alt="char3" />
                  <div className="flex items-center gap-1">
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">19/07/2024</p>
                  <p className="text-xs text-green-500 font-bold">  | </p>
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">PATCH</p>
                  <p className="text-[8px] text-black sm:text-xs font-semibold text-sm lg:text-lg">NOTE</p>
                  </div>
                  <h1 className="font-semibold text-sm lg:text-lg">Sumatra Barat</h1>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
