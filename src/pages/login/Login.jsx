import { Link } from "react-router-dom";
import Checkbox from "../../components/utilityComponents/Checkbox";
import Input from "../../components/utilityComponents/Input";

const Login = () => {
  return (
    <section className="-mt-20 py-16 md:py-10 bg-[url('/images/login.jpg')] bg-cover  bg-black/40 bg-blend-overlay">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full backdrop-blur-md rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl text-white text-center">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6">
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
                    <Checkbox required={false} />
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
                Login
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
