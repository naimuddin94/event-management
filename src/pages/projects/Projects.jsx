import { useLoaderData } from "react-router-dom";
import Project from "../../components/others/project/Project";

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div className="background">
      <div className="pt-28">
        <h1 className="text-5xl text-center font-black text-slate-400">
          PROJECTS
        </h1>
        <h2 className="text-lg font-medium text-center text-slate-400">
          We made possible
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-8">
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
