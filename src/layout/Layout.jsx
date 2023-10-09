import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";
import Footer from "../components/sharedComponents/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Layout = () => {
  const navigation = useNavigation();
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="font-inter max-w-7xl mx-auto overflow-hidden">
      <Navbar />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-[60vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Outlet />
      )}
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
