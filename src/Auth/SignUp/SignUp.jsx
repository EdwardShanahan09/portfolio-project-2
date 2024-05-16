import { Link } from "react-router-dom";
import {
  createUserDocument,
  signInWithGoogle,
} from "../../lib/firebase/firebase";

const SignUp = () => {
  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGoogle();

    const userDocRef = await createUserDocument(user);
  };

  const handleSubmit = async () => {};
  return (
    <div className="text-dark">
      <h2 className="text-4xl font-bold mb-4 text-dark">Create an account</h2>

      <form className="mb-4">
        <div className="mb-4">
          <label className="font-bold block text-sm mb-2" htmlFor="name">
            Name:
          </label>

          <input
            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-secondary focus:ring-secondary"
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold block text-sm mb-2" htmlFor="email">
            Email:
          </label>

          <input
            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-secondary focus:ring-secondary"
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
          />
        </div>

        <div className="mb-4">
          <label
            className="font-bold block text-sm mb-2 border-solid"
            htmlFor="password"
          >
            Password:
          </label>

          <input
            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-secondary focus:ring-secondary"
            id="password"
            name="password"
            type="password"
          />
        </div>

        <div className="mb-4">
          <label
            className="font-bold block text-sm mb-2 border-solid"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>

          <input
            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-secondary focus:ring-secondary"
            id="confirmPassword"
            name="password"
            type="password"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

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
