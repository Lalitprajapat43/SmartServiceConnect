import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { Wrench, PhoneCall, Star, BadgeCheck, Clock } from "lucide-react";
import BookAppointmentPopup from "../Components/BookAppointmentPopup";

export default function PlumberPage({setFormData,formData}) {
  const plumbers = [
    { name: "Amit Plumbing Service", experience: "5+ Years", rating: 4.8, available: "24/7", img: "https://i.ibb.co/h8r8HQ0/plumber1.png", location: "Indore" },
    { name: "Sharma Pipe Masters", experience: "3+ Years", rating: 4.5, available: "9AM - 8PM", img: "https://i.ibb.co/4VJtWZy/plumber2.png", location: "Ujjain" },
    { name: "WaterFix Experts", experience: "7+ Years", rating: 4.9, available: "24/7", img: "https://i.ibb.co/wSbj6fp/plumber3.png", location: "Ratlam" }
  ];
const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3 flex justify-center items-center gap-2">
          <Wrench className="w-10 h-10" /> Certified Plumbers
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Fast and trusted plumbing solutions. Leak Repair, Pipe Installation, Bathroom Fittings & more.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto flex gap-3 p-6 flex-wrap">
        <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700">
          ⭐ 4.5+ Rating
        </button>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700">
          🕒 24/7 Available
        </button>
      </div>

      {/* Listing Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {plumbers.map((worker, index) => (
          <div key={index} className="bg-white shadow-lg p-5 rounded-2xl hover:-translate-y-1 transition">
            <img src={worker.img} alt={worker.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-teal-600" />
            <h2 className="text-xl font-semibold flex items-center gap-2 justify-center">
              <BadgeCheck className="w-5 h-5 text-teal-600" /> {worker.name}
            </h2>
            <p className="mt-1 text-gray-600 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" /> {worker.rating} Rating
            </p>
            <p className="mt-1 text-gray-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-600" /> {worker.available}
            </p>
            <p className="mt-1 text-gray-600">Experience: {worker.experience}</p>

            <button 
             onClick={() => setPopupOpen(true)}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl">
              <PhoneCall className="w-5 h-5" /> Contact Now
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-teal-600 text-white text-center py-10 mt-10">
        <h3 className="text-2xl font-semibold">Need a plumber right now?</h3>
        <p className="opacity-90 mt-1">Call our emergency support anytime.</p>
        <Link to="/contact" className="inline-block mt-4 px-6 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-200">
          Book Urgent Service
        </Link>
      </div>
            <BookAppointmentPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
         setFormData={setFormData}
         formData={formData}
        selectedService="Plumber"
      />

    </div>
  );
}
