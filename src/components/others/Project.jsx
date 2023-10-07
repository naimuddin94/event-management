import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";

const Project = ({ project }) => {
  const { img, company, place, description } = project;
  return (
    <div className="rounded-lg shadow backdrop-blur-md bg-white/5 pb-2 min-h-fit">
      <div className="h-3/5">
        <img className="rounded-t-lg w-full h-full" src={img} alt="" />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {company}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="bg-blue-500 px-4 py-1 rounded-md w-fit text-white font-medium flex items-center gap-1">
          <GrLocation/> {place}
        </p>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
