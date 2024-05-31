import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  loginWithEmailAndPassword,
  createUserDocument,
  signInWithGoogle,
} from "../../lib/firebase/firebase";
import InputField from "../../Components/InputField/InputField";
import { UserContext } from "../../Context/User/UserContext";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState(null);
  const { setCurrentUser } = useContext(UserContext);
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
    setError(null); // Reset the error message before a new attempt

    try {
      const { user } = await loginWithEmailAndPassword(email, password);

      setCurrentUser(user);

      navigate("/dashboard");

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No user found with this email. Please sign up first.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await createUserDocument(user);
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="text-dark">
      <h2 className="text-2xl font-bold mb-4 text-dark">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mb-4">
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <p className="flex justify-end items-center">
        Don't have an account?{" "}
        <Link to="/" className="text-secondary ml-1">
          SIGNUP
        </Link>
      </p>
      <div className="flex justify-center items-center flex-col mt-8 mb-8">
        <p className="mb-4">Or sign in with:</p>
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

export default Login;
