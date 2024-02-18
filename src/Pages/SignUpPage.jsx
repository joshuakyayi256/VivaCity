// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Login from "./LogIn"; // Import the Login component
import ScentedImage from "../images/Scented.jpg"; // Import the image

export default function SignUpPage() {
  const [showSignUp, setShowSignUp] = useState(true); // State to toggle between SignUp and Login

  return (
    <section
      className="bg-cover bg-center h-screen flex justify-center items-center bg-blur"
      style={{ backgroundImage: `url(${ScentedImage})` }} // Use imported image variable
    >
      <div className="bg-white p-6 rounded shadow-lg max-w-xl w-full">
        {showSignUp ? (
          <>
            <h2 className="text-4xl font-bold text-center mb-8">Sign Up</h2>
            <form className="mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Takuwa Rose"
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="magerojoshua@example.com"
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="********"
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div>
              <div>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setShowSignUp(false)}
              >
                Log In
              </span>
            </p>
          </>
        ) : (
          <Login onSignUpClick={() => setShowSignUp(true)} />
        )}
      </div>
    </section>
  );
}
