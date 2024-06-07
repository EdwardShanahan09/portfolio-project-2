import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { loginWithEmailAndPassword } from "../../lib/firebase/firebase";
import InputField from "../../Components/InputField/InputField";
import { UserContext } from "../../Context/User/UserContext";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [errorMessage, setErrorMessage] = useState(null);
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

    try {
      const { user } = await loginWithEmailAndPassword(email, password);

      setCurrentUser(user);

      navigate("/dashboard");

      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        setErrorMessage("Incorrect email or password. Please try again.");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="text-dark w-4/6">
      <h2 className="text-2xl font-bold mb-4 text-dark">Login</h2>

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

      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
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
