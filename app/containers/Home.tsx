"use client";

import { FiChevronsDown } from "react-icons/fi";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from '@/app/containers/HomeLayout.module.css';
import Image from "next/image";
import imagesweap from '@/public/images/WEAPMATHKU-r.png';
import imagesweap2 from '@/public/images/BATTLE-r.png';
import imagesweap3 from '@/public/images/get-googleplay.png';
import Link from "next/link";

const HomeLayout: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const handleCMS = () => {
    const element = document.getElementById("cms");
    if (element) {
      let offset;
      if (window.innerWidth < 768) {
        offset = element.getBoundingClientRect().top + window.scrollY - 66;
      } else if (window.innerWidth < 1280) {
        offset = element.getBoundingClientRect().top + window.scrollY - 74;
      } else {
        offset = element.getBoundingClientRect().top + window.scrollY - 90;
      }
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    const element = document.getElementById("about");
    if (element) {
      let offset;
      if (window.innerWidth < 768) {
        offset = element.getBoundingClientRect().top + window.scrollY - 66;
      } else if (window.innerWidth < 1280) {
        offset = element.getBoundingClientRect().top + window.scrollY - 74;
      } else {
        offset = element.getBoundingClientRect().top + window.scrollY - 90;
      }
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`h-screen flex items-center max-w-screen ${styles.homeLayout}`}
      data-aos="fade-down"
      data-aos-duration="1000"
      id="home"
    >
      <div className="m-auto max-md:px-4 text-center justify-center">
        <div className="pt-20">
          <Image
            data-aos="slide-up"
            data-aos-duration="1500"
            className="flex items-center justify-center md:h-[200px] lg:h-[350px] max-w-full mx-auto"
            src={imagesweap}
            alt="logo"
          />
        </div>
        <div className="flex justify-center">
          <Image
            data-aos="slide-right"
            data-aos-duration="2000"
            className="absolute top-64 object-cover h-[120px] w-[250px] lg:w-[400px]"
            src={imagesweap2}
            alt="logo2"
          />
        </div>
        <button
          className="w-1/3 lg:w-1/3 h-[60px] object-cover"
          data-aos="slide-down"
          data-aos-duration="2000"
        >
          <Link href="https://play.google.com/store/apps/details?id=com.weapmath.weapmath">
            <Image
              className="flex items-center justify-center object-cover"
              src={imagesweap3}
              alt="logo3"
            />
          </Link>

          <div
            className="text-white flex mx-auto text-2xl md:text-3xl justify-center mt-5 animate-bounce"
            onClick={handleClick}
          >
            <div>
              <FiChevronsDown />
            </div>
          </div>
        </button>

        <div id="about" className="mt-[150px]"></div>
      </div>
    </div>
  );
};

export default HomeLayout;
