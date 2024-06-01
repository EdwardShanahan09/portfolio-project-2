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
    <div className="text-dark w-4/6">
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
    </div>
  );
};

export default Login;
