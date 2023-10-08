import PropTypes from "prop-types";
import { BsCheck2Circle } from "react-icons/bs";

const Packages = ({ service }) => {
  const { name, features, management_for, price } = service;
  return (
    <div className="relative flex flex-col rounded-xl bg-gray-900 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40 flex-1 max-w-sm lg:max-w-none">
      <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
          {name}
        </p>
        <h1 className="mt-6 flex justify-center gap-1 font-sans text-6xl font-normal tracking-normal text-white antialiased">
          <span className="mt-2 text-4xl">$</span>
          {price}
          <span className="self-end text-4xl">/for</span>
        </h1>
        <h1 className="text-slate-200 text-xl pt-3">
          {" "}
          {management_for} persons
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
          {features?.map((feature, indx) => (
            <li key={indx} className="flex items-center gap-4">
              <BsCheck2Circle />
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 p-0">
        <button className="btn btn-block btn-primary btn-active">
          Details
        </button>
      </div>
    </div>
  );
};

Packages.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Packages;
