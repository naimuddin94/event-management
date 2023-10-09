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
          className="custom-btn w-fit py-2"
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
