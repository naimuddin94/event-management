import { useLoaderData } from "react-router-dom";
import Content from "../../components/others/service/Content";
import Packages from "../../components/others/service/Packages";
import ServiceBanner from "../../components/others/service/ServiceBanner";

const Services = () => {
  const packages = useLoaderData();

  return (
    <div className="background">
      <ServiceBanner />
      <Content />
      <div className="flex justify-center items-center flex-wrap py-10 gap-8 px-12">
        {packages?.map((service) => (
          <Packages key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
