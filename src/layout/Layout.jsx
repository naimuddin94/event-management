import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";
import Footer from "../components/sharedComponents/Footer";

const Layout = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
