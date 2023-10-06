import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";

const Layout = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
