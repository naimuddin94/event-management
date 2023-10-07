import { useLoaderData } from "react-router-dom";
import Banner from "../../components/others/Banner";
import Client from "../../components/others/Client";
import Team from "../../components/others/Team";

const Home = () => {
  const members = useLoaderData();
  return (
    <>
      <Banner />
      <Client />
      <Team members={members} />
    </>
  );
};

export default Home;
