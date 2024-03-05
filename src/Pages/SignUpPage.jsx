import { useState } from "react";
import LogIn from "./LogIn";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import ScentedImage from "../images/Scented.jpg";
import Footer from "../Components/Footer";

const SignUpPage = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const middleName = e.target.middleName.value;
    
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    
    try {
      if (!email || !password || !firstName || !lastName) {
        alert("Please provide all required information");
        return;
      }
      
      const displayName = `${firstName} ${middleName ? middleName + ' ' : ''}${lastName}`;
      
      // Create user with email, password, and display name
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user display name
      const user = auth.currentUser;
      if (user) {
        await user.updateProfile({
          displayName: displayName
        });
      }
      
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section
        className="bg-cover bg-center h-screen flex justify-center items-center bg-blur"
        style={{ backgroundImage: `url(${ScentedImage})` }}
      >
        <div className="p-6 rounded shadow-lg max-w-xl w-full">
          {showSignUp ? (
            <>
              <h2 className="text-4xl font-bold text-center mb-8 text-white">Sign Up</h2>
              <form onSubmit={handleSignUp} className="mx-auto bg-gray-200 bg-opacity-70 p-8 rounded-lg">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="w-full p-4 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full p-4 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="middleName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Middle Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    placeholder="Doe"
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
                    name="email"
                    placeholder="johndoe@example.com"
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
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="********"
                    className={`w-full p-4 border border-gray-300 rounded ${passwordError ? 'border-red-500' : ''}`}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded"
                  >
                    Signup
                  </button>
                </div>
              </form>
              <p className="text-center mt-4 text-white">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowSignUp(false)}
                >
                  Login
                </span>
              </p>
              <p className="text-center mt-4 text-white">
                <button
                  onClick={handleGoogleSignUp}
                  className="bg-red-500 text-white font-bold py-4 px-8 rounded"
                >
                  Signup with Gmail
                </button>
              </p>
            </>
          ) : (
            <LogIn onSignUpClick={() => setShowSignUp(true)} />
          )}
        </div>
      </section>
      <div className="pb-8">
        <Footer />
      </div>
    </>
  );
};

export default SignUpPage;
