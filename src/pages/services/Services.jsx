import { useLoaderData } from "react-router-dom";
import Content from "../../components/others/service/Content";
import ServiceBanner from "../../components/others/service/ServiceBanner";
import Packages from "../../components/others/service/Packages";

const Services = () => {
  const packages = useLoaderData();

  return (
    <div className="background">
      <ServiceBanner />
      <Content />
      <Packages packages={packages} />
    </div>
  );
};

export default Services;
