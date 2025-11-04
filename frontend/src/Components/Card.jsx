import React, { useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { IoCloudOffline } from "react-icons/io5";
import { MdLocationPin, MdOutlineWatchLater } from "react-icons/md";

export default function Card() {
  const [online, setOnline] = useState(true);

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      
      {/* Profile Section */}
      <div className="flex gap-5 items-center border-b pb-3">
        <div className="relative">
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            className="w-20 h-20 rounded-full border-4 border-teal-300 object-cover"
          />

          <span className="absolute bottom-1 right-1">
            {online ? (
              <FaCheckCircle className="text-green-500 text-xl" />
            ) : (
              <IoCloudOffline className="text-red-500 text-xl" />
            )}
          </span>
        </div>

        <div>
          <h1 className="text-xl font-bold">User Name</h1>
          <p className="text-teal-600 font-semibold text-sm">
            User Speciality
          </p>

          <div className="flex items-center gap-1 mt-1">
            <FaStar className="text-yellow-400" />
            <p className="font-medium">4.8</p>
            <span className="text-gray-600 text-sm ml-1">• 4+ Years</span>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex justify-between items-start mt-3">
        <div className="space-y-1 text-sm">
          <p className="flex items-center text-gray-600 gap-1">
            <MdLocationPin className="text-blue-400" /> User Location
          </p>

          <p className="flex items-center text-gray-600 gap-1">
            <MdOutlineWatchLater className="text-teal-400" />
            Available: Immediate
          </p>
        </div>

        <p className="text-teal-500 font-bold text-lg">12-18 LPA</p>
      </div>
    </div>
  );
}
