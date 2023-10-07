import { useLoaderData } from "react-router-dom";

const Projects = () => {
    const projects = useLoaderData();
    
    return (
      <div className="bg-[url('https://i.postimg.cc/pXphb1cf/blob-scene-haikei-2.png')] bg-cover bg-center h-screen bg-black/30 bg-blend-overlay -mt-20">
        projects
      </div>
    );
};

export default Projects;
