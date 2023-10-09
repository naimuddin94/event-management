import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomLi = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-[#FF4B91] bg-slate-200 duration-200 rounded-md font-semibold"
          : ""
      }
    >
      <li className="hover:backdrop-blur-lg duration-200 px-4 py-2 rounded-md">
        {children}
      </li>
    </NavLink>
  );
};

CustomLi.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CustomLi;
