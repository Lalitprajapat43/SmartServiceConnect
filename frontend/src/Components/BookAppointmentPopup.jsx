import React, { useState } from "react";
import { X } from "lucide-react";

export default function BookAppointmentPopup({ isOpen, onClose, selectedService ,setFormData,formData}) {
  const [popupOpen,setPopupOpen] = useState(false)
  
  
  if (!isOpen) return null;




  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((item) => item.name === name);

      if (index !== -1) {
        updated[index].value = value;
      } else {
        updated.push({ name, value });
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // alert("Successfully Booked!");
    setPopupOpen(!popupOpen)

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#021310cc] bg-opacity-40 flex justify-center items-center z-50 transition duration-75">
      <div className="bg-white w-96 p-6 rounded-xl shadow-lg relative">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold text-teal-600 mb-4">Book Appointment</h2>

        <p className="text-sm text-gray-700 mb-4">
          Service: <span className="font-bold">{selectedService || "General Service"}</span>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            className="border rounded-md p-2 text-sm"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border rounded-md p-2 text-sm"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Location / Address"
            className="border rounded-md p-2 text-sm"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="border rounded-md p-2 text-sm"
            onChange={handleChange}
          />

          <textarea
            name="issue"
            placeholder="Describe your issue"
            rows={3}
            className="border rounded-md p-2 text-sm"
            onChange={handleChange}
          />

          <button className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md font-medium">
            Submit Request
          </button>
        </form>
      </div>
      {/* <div className={`${!popupOpen "flex ":"hidden"}`}>
        <p>YourBooking Is Successfully</p>
        <button>Confirm</button>
      </div> */}
    </div>
  );
}
