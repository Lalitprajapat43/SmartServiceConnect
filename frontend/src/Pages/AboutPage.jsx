// src/Pages/AboutPage.jsx
import React from "react";
import { Info, Users, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      <div className="bg-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">About Urbar Services</h1>
        <p className="mt-2 max-w-2xl mx-auto opacity-90">
          We connect you with trusted local professionals — fast, secure and reliable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To make home services effortless and trustworthy for everyone. We vet professionals, provide transparent pricing and support you from booking to service delivery.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-teal-600" />
              <div>
                <h4 className="font-semibold">Verified Pros</h4>
                <p className="text-sm text-gray-600">Background checked & trained</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-teal-600" />
              <div>
                <h4 className="font-semibold">High Ratings</h4>
                <p className="text-sm text-gray-600">Real reviews from customers</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-teal-600" />
              <div>
                <h4 className="font-semibold">Trusted Network</h4>
                <p className="text-sm text-gray-600">Thousands of successful jobs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-teal-600" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-600">Assistance whenever you need it</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
          <h2 className="text-2xl font-semibold mb-3">How it works</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-3">
            <li>Search service or pick from our Services page.</li>
            <li>Choose a verified professional and book slot.</li>
            <li>Pay securely or pay after service. Rate & review after completion.</li>
          </ol>

          <div className="mt-6">
            <Link to="/services" className="inline-block bg-teal-600 text-white px-5 py-3 rounded-xl hover:bg-teal-700">
              Browse Services
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
        <p className="text-gray-600">
          We stand behind every job — if something goes wrong, we will assist you until it’s right. Our pros follow safety and hygiene protocols for your family’s well-being.
        </p>
      </div>
    </div>
  );
}
