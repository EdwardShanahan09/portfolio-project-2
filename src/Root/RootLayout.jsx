import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
