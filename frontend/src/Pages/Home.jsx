import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { MdOutlinePlumbing, MdElectricBolt } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa";
import { GiCctvCamera, GiVacuumCleaner } from "react-icons/gi";

export default function Home() {
  const categories = [
    { name: "Plumber", icon: <MdOutlinePlumbing size={35} />, link: "/plumber" },
    { name: "Electrician", icon: <MdElectricBolt size={35} />, link: "/electricien" },
    { name: "Painter", icon: <FaPaintRoller size={35} />, link: "/painter" },
    { name: "Cleaning", icon: <GiVacuumCleaner size={35} />, link: "/cleaning" },
    { name: "CCTV Install", icon: <GiCctvCamera size={35} />, link: "/cctv" },
  ];

  return (
    <div className="w-full h-auto pb-20">
      
      {/* ✅ Hero Section */}
      <section className="w-full min-h-[60vh] bg-gradient-to-r from-teal-600 to-teal-500 flex flex-col justify-center items-center text-white px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Find the Best <span className="text-yellow-300">Home Services</span>
        </h1>
        <p className="mt-3 text-lg max-w-xl">
          Book trusted workers instantly — Plumbing, Electrician, Cleaning & more!
        </p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-lg bg-white flex items-center rounded-xl shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search: Plumber, Electrician..."
            className="px-4 py-3 w-full text-gray-700 outline-none"
          />
          <button className="bg-yellow-300 text-black px-5 py-3 font-semibold hover:bg-yellow-400 transition">
            Search
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-4">
          <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
            Book a Service
          </button>
          <button className="px-6 py-3 bg-black/40 backdrop-blur text-white rounded-lg font-semibold hover:bg-black/30 transition">
            Become a Worker
          </button>
        </div>
      </section>

      {/* ✅ Popular Categories */}
      <section className="mt-12 px-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Popular Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="flex flex-col items-center justify-center p-6 bg-white shadow rounded-2xl hover:shadow-xl hover:scale-105 transition"
            >
              <div className="text-teal-600">{cat.icon}</div>
              <p className="mt-2 font-semibold">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Featured Worker Card */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Best Rated Workers
        </h2>
        <div className="flex justify-center mt-8">
          <Card />
        </div>
      </section>
    </div>
  );
}
