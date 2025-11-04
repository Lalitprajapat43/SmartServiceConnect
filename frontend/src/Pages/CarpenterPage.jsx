import React from 'react';
import { Link } from "react-router-dom";
import { Hammer, PhoneCall, Star, BadgeCheck, Clock } from "lucide-react";

export default function CarpenterPage() {
  const carpenters = [
    { name: "WoodCraft Furniture", experience: "5+ Years", rating: 4.7, available: "9AM - 9PM", img: "https://i.ibb.co/y4TGhZf/carpenter1.png", location: "Indore" },
    { name: "HomeFix Carpentry", experience: "7+ Years", rating: 4.9, available: "24/7", img: "https://i.ibb.co/JsSvkYw/carpenter2.png", location: "Ujjain" },
    { name: "Royal Wood Makers", experience: "6+ Years", rating: 4.8, available: "10AM - 8PM", img: "https://i.ibb.co/3kJmJkC/carpenter3.png", location: "Ratlam" }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">

      {/* Header Section */}
      <div className="bg-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3 flex justify-center items-center gap-2">
          <Hammer className="w-10 h-10" /> Verified Carpenters
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Professional carpentry services: Furniture, Door Repair, Modular Kitchen & Wooden Work.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto flex gap-3 p-6 flex-wrap">
        <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700">
          ⭐ 4.5+ Rating
        </button>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700">
          🕒 Fast Service
        </button>
      </div>

      {/* Listing Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {carpenters.map((worker, index) => (
          <div key={index} className="bg-white shadow-lg p-5 rounded-2xl hover:-translate-y-1 transition text-center">
            <img src={worker.img} alt={worker.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-teal-600" />
            <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
              <BadgeCheck className="w-5 h-5 text-teal-600" /> {worker.name}
            </h2>
            <p className="mt-1 text-gray-600 flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-teal-600" /> {worker.rating} Rating
            </p>
            <p className="mt-1 text-gray-600 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-green-600" /> {worker.available}
            </p>
            <p className="mt-1 text-gray-600">Experience: {worker.experience}</p>

            {/* Services & Pricing */}
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>🪚 Door Repair – ₹199</p>
              <p>🪑 Furniture Making – ₹499</p>
              <p>🏠 Modular Kitchen – ₹999</p>
            </div>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl">
              <PhoneCall className="w-5 h-5" /> Contact Now
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 text-white text-center py-10 mt-10">
        <h3 className="text-2xl font-semibold">Need a carpenter immediately?</h3>
        <p className="opacity-90 mt-1">We fix all wood-related problems at your doorstep.</p>
        <Link to="/contact" className="inline-block mt-4 px-6 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-200">
          Book Now
        </Link>
      </div>

    </div>
  );
}
