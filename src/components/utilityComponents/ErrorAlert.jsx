import PropTypes from "prop-types";

const ErrorAlert = ({ children }) => {
  return (
    <div className="bg-red-200 text-center border border-red-400 text-red-700 px-4 py-3 rounded">
      {children}
    </div>
  );
};

ErrorAlert.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorAlert;
