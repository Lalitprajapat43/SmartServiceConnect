import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white pt-10 mt-16">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold">Urbar<span className="text-gray-200">Service</span></h2>
          <p className="mt-3 text-sm opacity-90">
            Book skilled workers near you instantly.  
            Reliable service for every home need.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Popular Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/plumber" className="hover:text-gray-300">Plumber</Link></li>
            <li><Link to="/electrician" className="hover:text-gray-300">Electrician</Link></li>
            <li><Link to="/carpenter" className="hover:text-gray-300">Carpenter</Link></li>
            <li><Link to="/cleaning" className="hover:text-gray-300">Cleaning</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 99999 88888</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@urbarservice.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Indore, MP</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 bg-teal-800 py-4 text-center text-sm opacity-90">
        © {new Date().getFullYear()} UrbarService. All Rights Reserved.
      </div>

    </footer>
  );
}
