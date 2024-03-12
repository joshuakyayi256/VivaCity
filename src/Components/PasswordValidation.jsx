import { useState, useEffect } from "react";
import validator from "validator";

// eslint-disable-next-line react/prop-types
const PasswordValidation = ({ value }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (password) => {
    // Validate if password meets all criteria
    //Try and add the specific criteria for the password special characters

    const strongPasswordCriteria = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    };

    if (!validator.isStrongPassword(password, strongPasswordCriteria)) {
      setErrorMessage("Password does not meet strong criteria");
      return false;
    }

    // Check for personal information
    if (
      password.toLowerCase().includes("username") ||
      password.toLowerCase().includes("email") ||
      password.toLowerCase().includes("name") ||
      password.toLowerCase().includes("birthday") ||
      password.toLowerCase().includes("address") ||
      password.toLowerCase().includes("phone")
    ) {
      setErrorMessage("Avoid using personal information in the password");
      return false;
    }

    // Check for keyboard sequences, common phrases, and dictionary words
    const commonPasswords = [
      "password",
      "123456",
      "qwerty",
      "football",
      "letmein",
      "welcome",
    ];
    if (commonPasswords.includes(password.toLowerCase())) {
      setErrorMessage("Avoid using common passwords or phrases");
      return false;
    }

    // If all criteria pass, set success message
    setErrorMessage("Password strength: Strong");
    return true;
  };

  useEffect(() => {
    validatePassword(value);
  }, [value]);

  return (
    <span
      style={{
        fontWeight: "bold",
        color: errorMessage.includes("meets") ? "green" : "red",
      }}
    >
      {errorMessage}
    </span>
  );
};

export default PasswordValidation;
