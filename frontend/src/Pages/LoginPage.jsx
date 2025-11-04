// src/Pages/LoginPage.jsx
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call auth API
    alert("Logged in (mock)");
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-2 border rounded-xl p-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <input type="email" required placeholder="Email" className="w-full outline-none p-2" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>

          <div className="flex items-center gap-2 border rounded-xl p-2">
            <Lock className="w-5 h-5 text-teal-600" />
            <input type="password" required placeholder="Password" className="w-full outline-none p-2" value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>

          <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Login</button>

          <p className="text-sm text-center">Don't have an account? <Link to="/register" className="text-teal-600">Register</Link></p>
        </form>
      </div>
    </div>
  );
}
