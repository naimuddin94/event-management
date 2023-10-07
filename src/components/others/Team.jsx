import PropTypes from "prop-types";
import TeamCard from "./TeamCard";

const Team = ({ members }) => {
  return (
    <div className="bg-[url('/images/cool-background.svg')] bg-cover bg-no-repeat bg-center">
      <div className="p-8">
        <h1 className="text-7xl font-black text-end bg-gradient-to-t from-[#1D267D] to-[#CD1818] bg-clip-text text-transparent">
          A-Team
        </h1>
        <h2 className="text-end font-medium text-2xl text-slate-700">You can count on</h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-8">
        {members?.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

Team.propTypes = {
  members: PropTypes.array.isRequired,
};

export default Team;
