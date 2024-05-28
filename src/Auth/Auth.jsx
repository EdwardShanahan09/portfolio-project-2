import { useContext } from "react";
import Hero from "../Components/Hero/Hero";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../Context/User/UserContext";

const Auth = () => {
  const { currentUser } = useContext(UserContext);
  const isAuthenticated = currentUser;

  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <main className="grid md:grid-cols-2 h-screen">
          <section className="flex flex-col justify-center items-center text-center">
            <Hero />
          </section>
          <section className="flex flex-col justify-center items-center">
            <Outlet />
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
