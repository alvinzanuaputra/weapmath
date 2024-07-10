import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="pt-4 pb-2">
      <footer className="text-gray-300 mx-8">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-md font-semibold mb-4">Company</h3>
              <ul className="text-sm">
                <li>About</li>
                <li>Work</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Community</h3>
              <ul className="text-sm">
                <li>For Game</li>
                <li>For Developer</li>
                <li>Advertistment</li>
                <li>App In Purchase</li>
                <li>Free App</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Our Place</h3>
              <h3 className="text-sm">
                <p>Supported by : </p><a href="https://www.instagram.com/its_campus/" className="hover:text-white">@its_campus</a> <a href="https://www.instagram.com/dit.belmawadikti/" className="hover:text-white">@dit.belmawadikti </a>
                <p>
                Keputih, Sukolilo, Surabayaa 60111, Jawa Timur, Surabaya, Indonesia 6011
                </p>
              </h3>
            </div>
          </div>
          <a href="https://www.instagram.com/weapmath" className="flex items-center gap-2 mt-4">
            <button
              className="rounded-full p-2 bg-neutral-700 flex items-center justify-center cursor-pointer hover:opacity-75 transition">
              <FaInstagram
                size={20}
                className="text-white"
              />
            </button>
            <h1 className="font-semibold text-slate-200">Instagram</h1>
            {/* <a href="https://twitter.com/AlvinZanua"
                            className="rounded-full p-2 bg-neutral-700 flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                            <FaTwitter
                                size={20}
                                className="text-white"
                            />
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100070957315001"
                            className="rounded-full p-2 bg-neutral-700 flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                            <FaFacebook
                                size={20}
                                className="text-white"
                            />
                        </a> */}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t-2 py-4 border-gray-600">
          <div className="flex justify-between">
            <ul className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
              <li>Judge</li>
              <li>Security & privacy</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>About advertisement</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <p className="text-xs md:text-sm font-semibold flex items-center md:justify-end">Copyright © Weapmath. Trademarks belong to their respective owners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
