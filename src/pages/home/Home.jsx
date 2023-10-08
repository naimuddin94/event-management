import { useLoaderData } from "react-router-dom";
import Packages from "../../components/others/service/Packages";
import Banner from "../../components/others/home/Banner";
import Client from "../../components/others/home/Client";
import Team from "../../components/others/home/Team";
import Reviews from "../../components/others/home/Reviews";

const Home = () => {
  const { members, packages, reviews } = useLoaderData();
  return (
    <>
      <Banner />
      <Client />
      <Team members={members} />
      <Reviews reviews={reviews} />
      <Packages packages={packages} />
    </>
  );
};

export default Home;
