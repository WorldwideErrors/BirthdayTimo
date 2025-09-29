"use client";

import React, { useState, useEffect, useRef } from "react";

export default function SuccessPage() {
  const [showReady, setShowReady] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [readyVisible, setReadyVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play music
    audioRef.current?.play().catch((err) => console.log("Audio play failed:", err));

    // Step 0: Show "You finished already?" and fade in
    setLoadingVisible(true);

    const hideLoadingTimer = setTimeout(() => setLoadingVisible(false), 3000);

    // Step 1: Show "Are you ready?" after 9.2s
    const readyTimer = setTimeout(() => {
      setShowReady(true);
      setTimeout(() => setReadyVisible(true), 50);

      // Step 2: Hide "Are you ready?" after 7s
      const hideReadyTimer = setTimeout(() => {
        setReadyVisible(false);

        // Step 3: Show main content after fade-out (2s)
        const showContentTimer = setTimeout(() => {
          setShowReady(false);
          setShowContent(true);
          setTimeout(() => setContentVisible(true), 50);
        }, 2000);

        return () => clearTimeout(showContentTimer);
      }, 7000);

      return () => clearTimeout(hideReadyTimer);
    }, 9200);

    return () => {
      clearTimeout(hideLoadingTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  const slides = [
    {
      img: "/moulin1.avif",
      title: "Cabaret Nights",
      desc: "Experience the dazzling lights, music, and dance of Paris' most iconic cabaret shows.",
    },
    {
      img: "/moulin2.avif",
      title: "Dance Extravaganza",
      desc: "Get swept away by mesmerizing performances that capture the spirit of Moulin Rouge.",
    },
    {
      img: "/moulinrouge3.avif",
      title: "Parisian Glamour",
      desc: "Immerse yourself in a world of elegance, lights, and unforgettable memories.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Audio */}
      <audio ref={audioRef} src="/audio.m4a" loop />

      {/* Loading */}
      {!showReady && !showContent && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            loadingVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-3xl md:text-5xl font-bold font-cinzel text-red-900 drop-shadow-lg text-center px-4">
            You finished already? Well done...
          </p>
        </div>
      )}

      {/* Are you ready */}
      {showReady && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
            readyVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-playfair animate-slideDown text-yellow-400 drop-shadow-lg">
            Are you ready?
          </h1>
          <p className="text-xl md:text-3xl font-cinzel animate-slideUp text-white drop-shadow-md">
            Let's continue the adventure!
          </p>
        </div>
      )}

      {/* Main content */}
{/* Main content */}
{showContent && (
  <div
    className={`absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 m-1 transition-opacity duration-1000 ${
      contentVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    {[
      {
        img: "/moulin1.avif",
        title: "Cabaret Nights",
        desc: "Experience the dazzling lights, music, and dance of Paris' most iconic cabaret shows.",
      },
      {
        img: "/moulin2.avif",
        title: "Dance Extravaganza",
        desc: "Get swept away by mesmerizing performances that capture the spirit of Moulin Rouge.",
      },
      {
        img: "/moulinrouge3.avif",
        title: "Parisian Glamour",
        desc: "Immerse yourself in a world of elegance, lights, and unforgettable memories.",
      },
      {
        img: "/moulin6.jpg",
        title: "Red Velvet Nights",
        desc: "Feel the energy and passion of the performers under the iconic red lights.",
      },
      {
        img: "/moulin4.webp",
        title: "Showstopper Acts",
        desc: "Marvel at breathtaking acts that combine skill, artistry, and spectacle.",
      },
      {
        img: "/moulin5.jpg",
        title: "Midnight Cabaret",
        desc: "End the night with unforgettable performances that linger in memory.",
      },
    ].map((slide, i) => (
      <div
        key={i}
        className="relative h-80 md:h-96 overflow-hidden rounded-lg transform transition-transform duration-500 hover:scale-105"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.img})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute h-100 inset-0 flex flex-col justify-end items-center text-center px-4 pb-6 bg-gradient-to-t from-black/80 via-transparent to-black/50">
          <h2 className="text-2xl md:text-3xl font-bold text-red-100 drop-shadow-2xl mb-2 font-playfair animate-fadeInUp">
            {slide.title}
          </h2>
          <p className="text-white text-sm md:text-base drop-shadow-2xl font-cinzel animate-fadeInUp delay-300">
            {slide.desc}
          </p>
        </div>
      </div>
    ))}
    <footer>
        <div className="text-center bg-black text-black py-6 ">
          2025 Jeffrey van Tillo
        </div>
      </footer>
  </div>
)}

{/* Animations */}
<style jsx>{`
  .animate-fadeInUp {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out forwards;
  }
  .animate-fadeInUp.delay-300 {
    animation-delay: 0.3s;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>


    </div>
  );
}
