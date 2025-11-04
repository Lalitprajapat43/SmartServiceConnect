import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import { GrWorkshop, GrUserWorker } from "react-icons/gr";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlinePlumbing, MdElectricBolt } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const mainMenu = [
    {
      title: "My Work",
      icon: <GrWorkshop size={22} />,
      submenu: [
        { name: "Work Done", path: "/" },
        { name: "Coming Soon", path: "/" },
      ],
    },
    {
      title: "Workers",
      icon: <GrUserWorker size={22} />,
      submenu: [
        { name: "Plumber's", path: "/plumber", icon: <MdOutlinePlumbing size={22} /> },
        { name: "Electrician's", path: "/electricien", icon: <MdElectricBolt size={22} /> },
      ],
    },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`
        ${open ? "w-64" : "w-16"}
        fixed top-16 left-0 h-[90vh]
        backdrop-blur-xl bg-white/70
        shadow-xl border-r border-gray-200
        transition-all duration-300 z-50 flex flex-col items-start
      `}
    >
      {/* Toggle Button */}
      <div className="w-full flex items-center justify-between px-3 py-2">
        {!open ? (
          <LuSquareMenu
            size={26}
            onClick={() => setOpen(true)}
            className="cursor-pointer text-teal-700 hover:text-teal-500 transition"
          />
        ) : (
          <>
            <h1 className="text-lg font-bold text-teal-700">Menu</h1>
            <CiMenuKebab
              size={26}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-red-500 transition"
            />
          </>
        )}
      </div>

      {/* Menu Items */}
      <div className="w-full mt-2 px-2 space-y-4">
        {mainMenu.map((menu, index) => (
          <div key={index}>
            <div
              className="
                flex items-center gap-3 py-2 cursor-pointer 
                text-gray-700 hover:text-teal-600
                transition group
              "
            >
              {menu.icon}
              {open && <span className="font-semibold">{menu.title}</span>}
            </div>

            <div
              className={`
                flex flex-col ml-[3.5rem] space-y-2 mt-2
                ${open ? "visible" : "hidden"}
              `}
            >
              {menu.submenu.map((item, idx) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`
                      flex items-center gap-2 p-2 rounded-md
                      text-sm transition
                      ${active ? "bg-teal-100 text-teal-700 font-semibold shadow-sm" : "text-gray-600 hover:bg-gray-100"}
                    `}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Tooltip on collapsed */}
      {!open && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <p className="text-[10px] text-gray-500 rotate-90 tracking-wide">
            OPEN
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
