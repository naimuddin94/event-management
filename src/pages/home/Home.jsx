import { useLoaderData } from "react-router-dom";
import Banner from "../../components/others/Banner";
import Client from "../../components/others/Client";
import Team from "../../components/others/Team";
import Packages from "../../components/others/service/Packages";

const Home = () => {
  const { members, packages } = useLoaderData();
  return (
    <>
      <Banner />
      <Client />
      <Team members={members} />
      <Packages packages={packages} />
    </>
  );
};

export default Home;
