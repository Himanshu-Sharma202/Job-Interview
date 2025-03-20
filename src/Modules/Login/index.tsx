"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState<"candidate" | "employer">("candidate");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-3xl">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Toggle Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gray-100 rounded-lg flex w-full p-1 transition-all duration-300 ease-in-out">
            <button
              onClick={() => setUserType("candidate")}
              className={`w-1/2 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                userType === "candidate"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Candidate
            </button>
            <button
              onClick={() => setUserType("employer")}
              className={`w-1/2 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                userType === "employer"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Employer
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          {/* Email Field */}
          <div className="relative group">
            <Mail className="absolute left-4 top-3 text-gray-400 transition-all duration-300 group-focus-within:text-blue-500" size={22} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300 ease-in-out hover:border-blue-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <Lock className="absolute left-4 top-3 text-gray-400 transition-all duration-300 group-focus-within:text-blue-500" size={22} />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300 ease-in-out hover:border-blue-400"
            />
            <button
              type="button"
              className="absolute right-4 top-3 text-gray-500 hover:text-gray-700 transition-all duration-300 ease-in-out"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out shadow-md transform hover:scale-[1.05] hover:shadow-lg hover:from-blue-700 hover:to-blue-600"
          >
            LOGIN
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center hidden mt-4 transition-all duration-300">
          <a href="#" className="text-blue-600 text-sm hover:underline hover:text-blue-800 transition-all duration-300">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;




