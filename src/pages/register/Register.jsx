import { Link } from "react-router-dom";
import Checkbox from "../../components/utilityComponents/Checkbox";
import Input from "../../components/utilityComponents/Input";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };

  return (
    <section className="pt-32 pb-20 -mt-20 bg-[url('/images/login.jpg')] bg-cover  bg-black/40 bg-blend-overlay min-h-fit">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-lg dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight md:text-4xl text-white">
              Register
            </h1>
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
              <Input type="text" name="name" placeholder="Enter your name">
                Full Name
              </Input>
              <Input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
              >
                Photo URL
              </Input>
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
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox required={true} />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 dark:text-gray-300">
                    I accept the{" "}
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-block btn-primary btn-active"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
