import PropTypes from "prop-types";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.js";


const LogIn = ({ onSignUpClick }) => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      if (!email || !password) {
        alert("Please provide both email and password");
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className="bg-cover bg-center h-screen flex justify-center items-center bg-blur">
        <div className="p-6 rounded shadow-lg max-w-xl w-full">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">Login</h2>
          <form onSubmit={handleLogin} className="mx-auto bg-gray-200 bg-opacity-70 p-8 rounded-lg">
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
                name="email"
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
                name="password"
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
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-4 text-white">
            Do not have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={onSignUpClick}
            >
              Sign Up
            </span>
          </p>
          <p className="text-center mt-4 text-white">
            Or login with Google
            <button
              onClick={handleGoogleLogin}
              className="ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Google
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

LogIn.propTypes = {
  onSignUpClick: PropTypes.func.isRequired,
};

export default LogIn;
