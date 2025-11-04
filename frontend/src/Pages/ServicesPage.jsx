import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Camera,
  Sparkles,
  Snowflake,
  Droplets,
  IceCream,
  WashingMachine,
  Bug,
  Leaf,
  Sofa,
  Laptop,
  Boxes,
  Shirt,
  Car
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { name: "Plumber", category: "Home Repair", city: "Indore", icon: Wrench, link: "/plumber" },
    { name: "Electrician", category: "Home Repair", city: "Ujjain", icon: Zap, link: "/electrician" },
    { name: "Carpenter", category: "Home Repair", city: "Ratlam", icon: Hammer, link: "/carpenter" },
    { name: "Painter", category: "Home Repair", city: "Indore", icon: Paintbrush, link: "/painter" },
    { name: "Cleaning", category: "Hygiene", city: "Ujjain", icon: Sparkles, link: "/cleaning" },
    { name: "CCTV Repair", category: "Electronics", city: "Indore", icon: Camera, link: "/cctv" },
    { name: "AC Repair", category: "Electronics", city: "Indore", icon: Snowflake, link: "/ac" },
    { name: "RO Water Purifier", category: "Electronics", city: "Ratlam", icon: Droplets, link: "/ro" },
    { name: "Refrigerator Repair", category: "Electronics", city: "Ujjain", icon: IceCream, link: "/fridge" },
    { name: "Washing Machine", category: "Electronics", city: "Indore", icon: WashingMachine, link: "/washing" },
    { name: "Pest Control", category: "Hygiene", city: "Indore", icon: Bug, link: "/pest" },
    { name: "Gardener", category: "Hygiene", city: "Ujjain", icon: Leaf, link: "/gardener" },
    { name: "Welder", category: "Skilled", city: "Ratlam", icon: Wrench, link: "/welder" },
    { name: "Sofa Repair", category: "Skilled", city: "Indore", icon: Sofa, link: "/sofa" },
    { name: "Computer Repair", category: "Electronics", city: "Indore", icon: Laptop, link: "/computer" },
    { name: "Packers & Movers", category: "Moving", city: "Ratlam", icon: Boxes, link: "/packers" },
    { name: "Laundry", category: "Hygiene", city: "Indore", icon: Shirt, link: "/laundry" },
    { name: "Driver On Demand", category: "Transport", city: "Ujjain", icon: Car, link: "/driver" },
  ];

  const cities = ["Indore", "Ujjain", "Ratlam"];
  const categories = ["Home Repair", "Electronics", "Hygiene", "Skilled", "Moving", "Transport"];

  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredServices = services.filter((service) => {
    return (
      service.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCity ? service.city === selectedCity : true) &&
      (selectedCategory ? service.category === selectedCategory : true)
    );
  });

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="bg-teal-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Find The Best Services</h1>
        <p className="mt-2 opacity-90">Search workers near you and book instantly</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search service..."
          className="p-3 border border-teal-600 rounded-xl outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="p-3 border border-teal-600 rounded-xl"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          className="p-3 border border-teal-600 rounded-xl"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-6">
        {filteredServices.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="bg-white p-6 rounded-2xl text-center shadow-md hover:scale-105 transition border border-teal-200"
          >
            <service.icon className="w-12 h-12 mx-auto text-teal-600" />
            <h2 className="mt-3 font-bold text-lg">{service.name}</h2>
            <p className="text-sm text-gray-600">{service.city}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
