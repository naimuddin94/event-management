import PropTypes from "prop-types";

const Input = ({ children, type = "text", name = "", placeholder = "" }) => {
  return (
    <div>
      <label className="mb-2 text-sm font-medium text-white">
        {children}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
};

Input.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
