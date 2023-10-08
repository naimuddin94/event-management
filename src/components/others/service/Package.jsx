import PropTypes from "prop-types";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Package = ({ service }) => {
  const { id, name, features, management_for, price } = service;
  return (
    <div className="backdrop-blur shadow-md bg-clip-border border border-gray-700 shadow-pink-900 rounded-xl text-slate-200 px-16 py-8">
      <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
          {name}
        </p>
        <h1 className="mt-6 flex justify-center gap-1 font-sans text-6xl font-bold tracking-normal text-white antialiased">
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
        <Link to={`/service/${id}`}>
          <button className="btn btn-block btn-secondary btn-active">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Package.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Package;
