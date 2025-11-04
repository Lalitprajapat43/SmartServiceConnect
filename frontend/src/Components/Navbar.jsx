import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [navBg, setNavBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 50) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  // Dynamic Color Classes
  const textColor = navBg ? "text-gray-800" : "text-white";
  const logoColor = navBg ? "text-teal-600" : "text-white";
  const menuIconColor = navBg ? "text-teal-600" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${navBg ? "bg-white shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">

            {/* ✅ Logo */}
            <h1 className={`text-2xl font-extrabold cursor-pointer ${logoColor}`}>
         <Link to={'/'}>     UC Services</Link>
            </h1>

            {/* ✅ Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {["Home", "Service", "Contact", "About","History"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className={`${textColor} hover:text-teal-500 font-medium transition`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ✅ Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {!token ? (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className={`px-5 py-2 rounded-lg font-medium transition
                    ${navBg
                      ? "border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                      : "border border-white text-white hover:bg-white hover:text-teal-600"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className={`px-5 py-2 rounded-lg font-medium transition
                    ${navBg
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-white text-teal-600 hover:bg-gray-100"
                    }`}
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <Link to="/profile">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer transition
                      ${navBg
                        ? "bg-teal-200 text-teal-800 hover:bg-teal-300"
                        : "bg-white text-teal-700 hover:bg-gray-100"
                      }`}
                    >
                      PP
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`px-4 py-2 rounded-lg transition
                    ${navBg
                      ? "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      : "border border-white text-white hover:bg-white hover:text-red-600"
                    }`}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* ✅ Mobile Menu Icon */}
            <div className="md:hidden">
              <HiMenuAlt3
                onClick={() => setMenuOpen(true)}
                className={`text-3xl cursor-pointer ${menuIconColor}`}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 z-50 
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-teal-600 text-xl font-bold">Menu</h2>
          <IoClose
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-teal-600 cursor-pointer"
          />
        </div>

        <ul className="space-y-6 text-lg">
          {["Home", "Service", "Contact", "About"].map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => setMenuOpen(false)}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Auth Buttons */}
        <div className="mt-10 space-y-4">
          {!token ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="w-full py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
