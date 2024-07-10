"use client";

import Image from "next/image";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import "aos/dist/aos.css";
import { BiCaretRight } from "react-icons/bi";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/Character/char1.gif",
    "/images/Character/char2.gif",
    "/images/Character/char3.gif"
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 15000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true
  });

  return (
    <div className="pb-20 border-t-2 border-black flex mb-4 bg-white px-10 sm:px-40">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex-1 lg:mx-40 mx-10 mt-20 w-full">
          <div className="text-left" data-aos="fade-right">
            <h1 className="text-4xl text-black hidden lg:flex z-10 font-bold">
              TUTORIAL
            </h1>
            <h1 className="text-5xl text-black hidden lg:flex z-10 font-bold">
              MEMAINKAN
            </h1>
            <div className="mt-4 border-2 border-green-500 hidden lg:flex w-1/6"></div>
            <div className="border-2 border-green-500 hidden lg:flex w-1/12"></div>
            <h1 className="text-black [#38bdf8] text-[75px] max-md:text-4xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] lg:absolute lg:top-[-10px] lg:left-0 duration-500 font-bold">
              TUTORIAL
            </h1>
            <h1 className="text-black [#38bdf8] text-[75px] max-md:text-3xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] lg:absolute lg:top-[-10px] lg:left-0 font-bold duration-500">
              MEMAINKAN
            </h1>
            <div className="mt-4 border-2 border-green-500 w-1/3 lg:hidden flex"></div>
            <div className="border-2 border-green-500 w-1/6 lg:hidden flex"></div>

            <div className="mt-20">
              <div className="flex justify-center items-center w-full relative" {...handlers}>
                <button onClick={prevImage} className="absolute left-2 px-2 py-2 bg-gray-300 rounded hover:bg-gray-400 z-50">
                  <FaCaretLeft size={32} />
                </button>
                <div className="flex justify-center items-center overflow-hidden rounded-md shadow-md shadow-blue-500 border border-blue-500 mx-4 lg:mx-10" style={{ width: 'calc(100% - 2rem)', maxWidth: '1000px', height: '500px' }}>
                  <div className="flex transition-transform duration-500 w-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {images.map((src, index) => (
                      <Image key={index} src={src} className="rounded-md w-full h-auto" width={1920} height={1080} alt={`char${index + 1}`} />
                    ))}
                  </div>
                </div>
                <button onClick={nextImage} className="px-2 py-2 bg-gray-300 rounded hover:bg-gray-400 absolute right-2 z-50">
                  <FaCaretRight size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
