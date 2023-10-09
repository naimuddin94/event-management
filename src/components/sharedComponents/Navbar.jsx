import useAuthInfo from "../../hooks/useAuthInfo";
import NavLi from "./NavLi";

const Navbar = () => {
  const { user } = useAuthInfo();
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(user?.photoURL);
  return (
    <div className="navbar z-50 text-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-100"
          >
            <NavLi />
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl md:text-3xl font-satisfy font-bold">
          EventSphere
        </a>
      </div>
      <div className="navbar-end flex gap-10">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            <NavLi />
          </ul>
        </div>
        <h2>{user && user?.displayName}</h2>
        <div className="">
          {user && (
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    urlRegex
                      ? user.photoURL
                      : "https://i.postimg.cc/m2HKMNv9/istockphoto-1451587807-612x612.jpg"
                  }
                />
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
