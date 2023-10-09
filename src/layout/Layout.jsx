import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";
import Footer from "../components/sharedComponents/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="font-inter container mx-auto overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Layout;
