import Hero from "../Components/Hero/Hero";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        Navigate("/dashboard")
      ) : (
        <>
          <Hero />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Auth;
