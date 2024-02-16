
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const LogIn = ({ onSignUpClick }) => {
  return (
    <section
      className="bg-cover bg-center h-auto flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded max-w-xl w-full">
        <h2 className="text-4xl font-bold text-center mb-8">Log In</h2>
        <form className="max-w-lg mx-auto">
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
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label
              htmlFor="remember"
              className="text-gray-700 text-sm font-bold"
            >
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={onSignUpClick}
          >
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

LogIn.propTypes = {
  onSignUpClick: PropTypes.func.isRequired,
};

export default LogIn;
