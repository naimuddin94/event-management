import PropTypes from "prop-types";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const TeamCard = ({ member }) => {
  const { img, position, name } = member;
  return (
    <div
      data-aos="fade-down-right"
      className="relative flex flex-col rounded-xl text-gray-700 shadow-xl bg-[url('/images/blob.png')] bg-cover "
    >
      <div className="relative mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img src={img} alt="profile-picture" className="w-full h-full" />
      </div>
      <div className="p-5 text-center">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-300 antialiased">
          {name}
        </h4>
        <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          {position}
        </p>
      </div>
      <div className="flex justify-around p-6 text-2xl text-slate-200 pt-2">
        <FaFacebookSquare className="social" />
        <FaTwitterSquare className="social" />
        <FaLinkedin className="social" />
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default TeamCard;
