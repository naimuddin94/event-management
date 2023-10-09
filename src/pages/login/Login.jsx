import { Link, useLocation, useNavigate } from "react-router-dom";
import Checkbox from "../../components/utilityComponents/Checkbox";
import Input from "../../components/utilityComponents/Input";
import SocialLoginBtn from "../../components/sharedComponents/SocialLoginBtn";
import useAuthInfo from "../../hooks/useAuthInfo";
import { toast } from "react-toastify";
import { useState } from "react";
import ErrorAlert from "../../components/utilityComponents/ErrorAlert";

const Login = () => {
  const [error, setError] = useState(null);
  const { loginUser, loading, setLoading } = useAuthInfo();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Login successfully");
        setError(null);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        setError(errMessage);
      });
  };

  return (
    <section className="login-background">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          data-aos="flip-left"
          className="w-full backdrop-blur-md rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl text-white text-center">
              Login
            </h1>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <Input type="email" name="email" placeholder="Enter your email">
                Email
              </Input>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
              >
                Password
              </Input>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-slate-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-block btn-primary btn-active"
              >
                {loading ? (
                  <span className="loading loading-spinner text-error"></span>
                ) : (
                  "Login"
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <SocialLoginBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
