import { useContext } from "react";
import Hero from "../Components/Hero/Hero";
import GoogleSignIn from "../Components/GoogleSignIn/GoogleSignIn";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../Context/User/UserContext";

const Auth = () => {
  const { currentUser } = useContext(UserContext);
  const isAuthenticated = currentUser;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <main className="grid md:grid-cols-1 lg:grid-cols-2 h-screen">
          <section className="flex flex-col justify-center items-center p-10">
            <Hero />
            <Outlet />
            <GoogleSignIn />
          </section>
          <section className="h-screen hidden lg:block">
            <img
              src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-screen object-cover"
            />
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
