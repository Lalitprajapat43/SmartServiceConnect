import React, { useEffect, useState } from "react";

export default function BookingHistory({formData}) {


 

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h2 className="text-xl font-bold text-center text-teal-700 mb-5">
        Booking History
      </h2>

      {formData.length === 0 ? (
        <p className="text-center text-gray-600">
          No previous bookings found ❌
        </p>
      ) : (
        <div className="grid gap-4 max-w-xl mx-auto">
          {formData.map((b, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md border"
            >
              
              <p><strong>Name:</strong> {b.username}</p>
              <p><strong>Phone:</strong> {b.phone}</p>
              <p><strong>Address:</strong> {b.address}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Issue:</strong> {b.issue}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
