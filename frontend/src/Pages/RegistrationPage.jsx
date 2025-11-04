// src/Pages/RegisterPage.jsx
import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: register API
    alert("Registered (mock)");
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
        <h2 className="text-2xl font-semibold text-center mb-4">Create an account</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-2 border rounded-xl p-2">
            <User className="w-5 h-5 text-teal-600" />
            <input placeholder="Full name" required className="w-full outline-none p-2" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>

          <div className="flex items-center gap-2 border rounded-xl p-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <input type="email" placeholder="Email" required className="w-full outline-none p-2" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>

          <div className="flex items-center gap-2 border rounded-xl p-2">
            <Lock className="w-5 h-5 text-teal-600" />
            <input type="password" placeholder="Password" required className="w-full outline-none p-2" value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>

          <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Register</button>

          <p className="text-sm text-center">Already have an account? <Link to="/login" className="text-teal-600">Login</Link></p>
        </form>
      </div>
    </div>
  );
}
