import React, { useState } from "react";
import { PhoneCall, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted ✅ We will contact you shortly!");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">

      {/* Header */}
      <div className="bg-teal-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="opacity-90 mt-2">We're here to help you anytime!</p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-8">

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200"
        >
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Send Us A Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl mb-3 focus:ring-2 ring-teal-500"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-xl mb-3 focus:ring-2 ring-teal-500"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Service Required (Plumber, AC, Electric etc)"
            className="w-full p-3 border rounded-xl mb-3 focus:ring-2 ring-teal-500"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-xl mb-3 focus:ring-2 ring-teal-500"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold"
          >
            <Send className="w-5 h-5" /> Submit Now
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 bg-white p-6 rounded-2xl shadow-lg border border-teal-200">

          <div className="flex items-start gap-3">
            <PhoneCall className="text-teal-600 w-6 h-6" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-teal-600 w-6 h-6" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p>support@urbarservices.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-teal-600 w-6 h-6" />
            <div>
              <h3 className="font-bold">Address</h3>
              <p>Indore, Madhya Pradesh</p>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href="tel:+919876543210"
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" /> Call
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-72 mt-10">
        <iframe
          title="Indore Location"
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.983890585104!2d75.857725!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d90b09e1e63%3A0x282e433df!2sIndore!5e0!3m2!1sen!2sin!4v1623580477647!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
