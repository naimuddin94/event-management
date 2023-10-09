import useAuthInfo from "../../hooks/useAuthInfo";
import CustomLi from "../utilityComponents/CustomLi";

const NavLi = () => {
  const { user, logOut } = useAuthInfo();
  return (
    <>
      <CustomLi path="/">Home</CustomLi>
      <CustomLi path="/blog">Blog</CustomLi>
      <CustomLi path="/projects">Projects</CustomLi>
      {user ? (
        <button
          className="btn glass text-slate-200 btn-sm btn-active"
          onClick={() => logOut()}
        >
          Logout
        </button>
      ) : (
        <>
          <CustomLi path="/login">Login</CustomLi>
          <CustomLi path="/register">Register</CustomLi>
        </>
      )}
    </>
  );
};

export default NavLi;
