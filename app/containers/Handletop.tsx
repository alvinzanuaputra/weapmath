"use client";

// src/components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed right-4 bottom-10 z-50">
            {isVisible && (
                <button
                    data-aos="slide-up"
                    data-aos-duration="1000"
                    onClick={scrollToTop}
                    className="border border-black bg-white text-black px-2 py-1 font-bold rounded-full shadow-lg hover:bg-slate-300 transition duration-400 text-lg"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
