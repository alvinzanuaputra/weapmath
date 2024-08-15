"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import HeaderButton from "@/app/components/HeaderButton";
import React, { useState, useEffect, useRef } from "react";
import { BsXLg } from "react-icons/bs";
import 'animate.css';
import Link from "next/link";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref untuk sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
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
    <div className="relative">
      {/* Overlay untuk menggelapkan layar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 pointer-events-none" />
      )}

      <div className={`fixed top-0 w-full z-50 ${isMenuOpen ? 'opacity-1' : ''}`}>
        <div className="px-6 sm:px-16 pt-4 py-4 flex items-center justify-between bg-black">
          <div className="flex items-center gap-4">
            <button onClick={() => handleClick("home")}>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/weapmath.png"
                  height={50}
                  width={50}
                  alt="WEAPMATH LOGO"
                  className="cursor-pointer rounded-full border border-white"
                />
                <h1 className="md:hidden lg:flex font-bold text-lg lg:text-2xl text-white hover:text-green-500 duration-400 transition-all">
                  WEAPMATH
                </h1>
              </div>
            </button>
          </div>

          <div className="justify md:hidden">
            <button
              onClick={handleButtonClick}
              className="text-white dark:text-black text-3xl mt-1"
            >
              <IoMenu />
            </button>
            {isMenuOpen && (
              <div ref={sidebarRef} className="border-l-2 border-green-500 fixed top-0 right-0 w-2/3 h-full p-7 bg-black shadow-lg text-xl animate__animated animate__slideInRight flex flex-col z-50">
                {/* Tombol X di kanan atas */}
                <button
                  onClick={handleButtonClick}
                  className="text-white hover:text-green-500 duration-100 animate__animated animate__fadeInUp animate__delay-0.3s fixed top-7 right-6 z-50"
                >
                  <BsXLg size={24} />
                </button>
                <div className="flex justify-between items-center mt-6">
                  {/* Logo WEAPMATH di kiri atas */}
                  <button onClick={() => handleClick("home")}>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/weapmath.png"
                        height={50}
                        width={50}
                        alt="WEAPMATH LOGO"
                        className="cursor-pointer rounded-full border border-white"
                      />
                      <h1 className="md:hidden lg:flex font-bold text-lg lg:text-2xl text-white hover:text-green-500 duration-400 transition-all">
                        WEAPMATH
                      </h1>
                    </div>
                  </button>
                </div>
                <p className="text-white text-sm font-semibold italic mt-8">
                  Sebuah game yang mengajarkan etnomatematika dan budaya
                </p>
                <div className="border-green-500 border-t-2 mt-3"></div>

                {/* Daftar menu di bawah logo */}
                <div className="mt-10 flex flex-col gap-4">
                  <HeaderButton section="GAME" onClick={() => handleClick("home")} />
                  <HeaderButton section="TENTANG" onClick={() => handleClick("about")} />
                  <HeaderButton section="KARAKTER" onClick={() => handleClick("karakter")} />
                  <HeaderButton section="ABOUT US" onClick={() => handleClick("education")} />
                  <HeaderButton section="TUTORIAL" onClick={() => handleClick("tutorial")} />
                </div>
                <div className="fixed bottom-4">
                  {/* Logo WEAPMATH di kiri atas */}
                  <button onClick={() => handleClick("home")}>
                    <Link href="https://play.google.com/store/apps/details?id=com.weapmath.weapmath" className="flex items-center gap-2">
                      <Image
                        src="/images/get-googleplay.png"
                        height={140}
                        width={140}
                        alt="WEAPMATH LOGO"
                        className="cursor-pointer"
                      />
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex gap-10 xl:gap-12">
            <HeaderButton section="GAME" onClick={() => handleClick("home")} />
            <HeaderButton section="TENTANG" onClick={() => handleClick("about")} />
            <HeaderButton section="KARAKTER" onClick={() => handleClick("karakter")} />
            <HeaderButton section="ABOUT US" onClick={() => handleClick("education")} />
            <HeaderButton section="TUTORIAL" onClick={() => handleClick("tutorial")} />
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.weapmath.weapmath" className="hidden lg:block">
            <button className="bg-green-600 rounded-md px-5 py-1.5 text-white hover:bg-green-400 duration-500">
              MAINKAN GAME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
