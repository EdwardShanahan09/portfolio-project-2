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

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      navigate("/dashboard");

      await createUserDocument(user, { displayName });

      resetFormFields();

      alert("User created successfully!");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Cannot create user, email already in use.");
      } else {
        setErrorMessage("User creation encountered an error: " + error.message);
      }
    }
  };

  return (
    <div className="text-dark w-4/6">
      <h2 className="text-2xl font-bold mb-4 text-dark">Sign Up</h2>

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
    </div>
  );
};

export default SignUp;
