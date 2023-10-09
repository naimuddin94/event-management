import PropTypes from "prop-types";
import Package from "./Package";

const Packages = ({ packages }) => {
  return (
    <div className="bg-[url('https://i.postimg.cc/3W52TYx9/blob-scene-haikei-4.png')] bg-cover bg-center bg-black/30 bg-blend-overlay">
      <div className="py-8 md:py-12">
        <h1 className="text-3xl md:text-6xl font-black text-center  bg-gradient-to-t from-[#FF4B91] to-[#232D3F] bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-slate-200 text-lg font-medium text-center">
          Welcome to here{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8 px-5 md:px-12">
        {packages?.map((service) => (
          <Package key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

Packages.propTypes = {
  packages: PropTypes.array.isRequired,
};

export default Packages;
