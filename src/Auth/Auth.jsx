import Hero from "../Components/Hero/Hero";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        Navigate("/dashboard")
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
