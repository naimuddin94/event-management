import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";

const Project = ({ project }) => {
  const { img, company, place, description, date } = project;
  return (
    <div className="rounded-lg shadow backdrop-blur-md bg-white/5 pb-2 min-h-fit">
      <div className="h-1/2">
        <img className="rounded-t-lg w-full h-full" src={img} alt="" />
      </div>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white hover:underline cursor-pointer">
          {company}
        </h2>
        <h5 className="text-gray-400 text-sm pb-2">{date}</h5>

        <p className="mb-3 font-normal text-gray-400">
          {description}
        </p>
        <p className="bg-blue-500 px-4 py-1 rounded-md w-fit text-white font-medium flex items-center gap-1">
          <GrLocation /> {place}
        </p>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
