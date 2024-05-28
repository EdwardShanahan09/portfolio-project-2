import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  signInWithGoogle,
} from "../../lib/firebase/firebase";
import InputField from "../../Components/InputField/InputField";
import { UserContext } from "../../Context/User/UserContext";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentContext } = useContext(UserContext);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentContext(user);

      navigate("/dashboard");

      await createUserDocument(user, { displayName });
      resetFormFields();
      setErrorMessage("");
      alert("User created successfully!");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Cannot create user, email already in use.");
      } else {
        setErrorMessage("User creation encountered an error: " + error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await createUserDocument(user);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Google sign-in encountered an error: " + error.message);
    }
  };

  return (
    <div className="text-dark">
      <h2 className="text-4xl font-bold mb-4 text-dark">Create an account</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <InputField
          labelName="Name"
          labelId="name"
          name="displayName"
          type="text"
          placeholder="John Doe"
          value={displayName}
          onChange={handleChange}
        />

        <InputField
          labelName="Email"
          labelId="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={handleChange}
        />

        <InputField
          labelName="Password"
          labelId="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <InputField
          labelName="Confirm Password"
          labelId="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      <p className="flex justify-end items-center">
        Have an account?{" "}
        <Link to="/login" className="text-secondary ml-1">
          LOGIN
        </Link>
      </p>

      <div className="flex justify-center items-center flex-col mt-8 mb-8">
        <p className="mb-4">Or sign up with:</p>
        <svg
          className="cursor-pointer"
          onClick={handleGoogleSignIn}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36003 19.27 5.00003 16.25 5.00003 12C5.00003 7.9 8.20003 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42003 2 2.03003 6.8 2.03003 12C2.03003 17.05 6.16003 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z"
            fill="#001B29"
          />
        </svg>
      </div>
    </div>
  );
};

export default SignUp;
