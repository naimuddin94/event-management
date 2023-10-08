import { NavLink } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";

const NavLi = () => {
  const { user, logOut } = useAuthInfo();
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      {user ? (
        <button
          className="btn glass text-slate-200 btn-sm btn-active"
          onClick={() => logOut()}
        >
          Logout
        </button>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default NavLi;
