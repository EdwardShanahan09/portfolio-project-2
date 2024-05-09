import { Link } from "react-router-dom";

const SignUp = () => {
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
    </div>
  );
};

export default SignUp;
