"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="flex justify-center mx-auto mb-14 dark:bg-white py-40">
      <div className="lg:w-1/2">
        <div
          className="relative text-left"
          data-aos="flip-down"
          data-aos-duration="10000"
        >
          <h1 className="text-white relative dark:text-gray-400 text-5xl font-bold hidden lg:flex z-10 text-center">
            Tentang
          </h1>
          <h1 className="text-white text-center dark:text-gray-400 dark:lg:text-gray-100 dark:hover:text-[#38bdf8] text-[75px] max-md:text-5xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] font-bold lg:absolute lg:top-[-10px] lg:left-0 hover:text-green-500 hover:top-2 duration-500">
            Tentang
          </h1>
          <h1 className="pt-10 text-md px-10 lg:px-0 text-white duration-500">
            WeapMath adalah inovasi bisnis digital berbasis game online yang mengintegrasikan pembelajaran matematika dengan pengenalan budaya Indonesia. Nama WeapMath menggabungkan &quot;weapons&quot; (senjata) dan &quot;mathematics&quot; (matematika). Logo WeapMath menampilkan dua senjata tradisional: kapak dari Bali dan parang dari Papua. Usaha ini bertujuan untuk menyediakan media edukatif yang menarik dan bermanfaat bagi siswa, sambil mempromosikan budaya lokal.
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex" style={{ transform: 'scaleX(-1)' }}>
        <Image src="/images/Character/char2.gif" width={400} height={400} alt="Character image" />
      </div>
    </div>
  );
};

export default Tentang;
