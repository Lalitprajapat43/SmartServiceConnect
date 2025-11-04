// src/Pages/BookingPage.jsx
import React, { useState } from "react";
import { Calendar, Clock, PhoneCall, MapPin } from "lucide-react";

const SERVICES = [
  "Plumber",
  "Electrician",
  "Carpenter",
  "Cleaner",
  "CCTV Technician",
  "AC Repair",
  "RO Service",
];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES[0],
    date: "",
    time: "",
    address: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API to create booking
    alert(`Booking requested for ${form.service} on ${form.date} at ${form.time}`);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      <div className="bg-teal-600 text-white py-14 text-center">
        <h1 className="text-3xl font-bold">Book a Service</h1>
        <p className="mt-2 opacity-90">Choose date, time and your preferred professional</p>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Your name"
              className="p-3 border rounded-xl focus:ring-2 ring-teal-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              placeholder="Phone number"
              className="p-3 border rounded-xl focus:ring-2 ring-teal-500"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              className="p-3 border rounded-xl"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>

            <input
              type="date"
              className="p-3 border rounded-xl"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="time"
              className="p-3 border rounded-xl"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
            />
            <input
              placeholder="Address"
              className="p-3 border rounded-xl"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button type="submit" className="bg-teal-600 text-white px-5 py-3 rounded-xl hover:bg-teal-700">
              Book Now
            </button>

            <a href="tel:+919876543210" className="flex items-center gap-2 px-4 py-3 rounded-xl border border-teal-200">
              <PhoneCall className="w-5 h-5 text-teal-600" /> Call Support
            </a>

            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
               className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700">
              WhatsApp
            </a>
          </div>
        </form>

        <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm border border-teal-100">
          <h4 className="font-semibold">Need help choosing?</h4>
          <p className="text-sm text-gray-600">Call us or WhatsApp and we'll recommend the right service & estimated price.</p>
        </div>
      </div>
    </div>
  );
}
