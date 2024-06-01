import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserDocument,
  signInWithGoogle,
} from "../../lib/firebase/firebase";
import { UserContext } from "../../Context/User/UserContext";

const GoogleSignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();

      setCurrentUser(user);

      navigate("/dashboard");

      await createUserDocument(user);

      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Google sign-in encountered an error: " + error.message);
    }
  };
  return (
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
  );
};

export default GoogleSignIn;
