import React from 'react'
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check login status

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-teal-600 shadow-lg h-[10vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <h1 className="text-white text-2xl font-bold tracking-wide">Logo</h1>

          {/* Menu Links */}
          <ul className="flex space-x-8">
            <li><Link to={"/"} className="text-white hover:text-teal-200 font-medium">Home</Link></li>
            <li><Link to={"/worker"} className="text-white hover:text-teal-200 font-medium">Worker</Link></li>
            <li><Link to={"/contact"} className="text-white hover:text-teal-200 font-medium">Contact</Link></li>
            <li><Link to={"/about"} className="text-white hover:text-teal-200 font-medium">About</Link></li>
          </ul>

          {/* Right Side Conditional */}
          <div className="flex items-center space-x-3">
            {
              !token ? (
                // If NOT logged in
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-white text-teal-600 px-5 py-2 rounded-md font-semibold hover:bg-teal-50 duration-200"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => navigate("/register")}
                    className="bg-teal-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-teal-800 duration-200"
                  >
                    Register
                  </button>
                </>
              ) : (
                // If Logged in → Show Profile + Logout
                <div className="flex items-center space-x-4">
                  <Link to="/profile">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 font-semibold shadow-md cursor-pointer hover:shadow-lg duration-200">
                      PP
                    </div>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="text-white border border-white px-4 py-1 rounded-md hover:bg-white hover:text-teal-600 duration-200"
                  >
                    Logout
                  </button>
                </div>
              )
            }
          </div>

        </div>
      </div>
    </nav>
  )
}
