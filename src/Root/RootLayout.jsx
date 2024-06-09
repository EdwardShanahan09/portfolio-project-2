import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const RootLayout = () => {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-4 min-h-screen">
      <div className="lg:col-span-1 order-last lg:order-first">
        <Navigation />
      </div>
      <div className="lg:col-span-3">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
