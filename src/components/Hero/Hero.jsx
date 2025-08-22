import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images from the assets folder
import Makeup1 from "../../assets/Makeup1.jpeg";
import Makeup2 from "../../assets/Makeup2.jpeg";
import Makeup3 from "../../assets/Makeup3.jpeg";
import Makeup4 from "../../assets/Makeup4.jpeg";
import Makeup5 from "../../assets/Makeup5.jpeg";
import Makeup6 from "../../assets/Makeup6.jpeg";

const images = [Makeup1, Makeup2, Makeup3, Makeup4, Makeup5, Makeup6];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 🔧 Initialize AOS animation
    AOS.init({
      duration: 1000,
      once: true, // ensures animation runs only once
    });

    // Image carousel interval
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 text-center">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to <span className="text-pink-500">Zeetem</span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 italic">
          “Slay to Perfection”
        </p>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          Zeetem is your go-to makeup service for every occasion — from weddings
          to glam parties. We ensure you look flawless and feel empowered.
        </p>
      </div>

      {/* Image Carousel */}
      <div
        className="mt-16 relative max-w-6xl mx-auto h-[300px] overflow-hidden rounded-xl shadow-xl"
        data-aos="zoom-in-up"
      >
        <img
          src={images[currentIndex]}
          alt={`Makeup job ${currentIndex + 1}`}
          className="w-full h-full object-contain object-center transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? "bg-pink-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Short Description */}
      <p
        className="mt-8 max-w-2xl mx-auto text-sm text-gray-700 dark:text-gray-300"
        data-aos="fade-up"
      >
        Our recent transformations speak for themselves. Each look is a blend of
        precision, personality, and perfection. Whether it's bridal glam or a
        casual glow, we’ve got the magic touch.
      </p>

      {/* Booking Call to Action */}
      <div className="mt-12" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Book a Makeup Session with Us Today!
        </h2>
        <Link
          to="/booking"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
