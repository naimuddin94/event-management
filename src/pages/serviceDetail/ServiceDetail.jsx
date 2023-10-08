import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const ServiceDetail = () => {
  const packages = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const findService = packages.find((service) => service.id === idInt);
  const { description, image, price, features, management_for } = findService;

  return (
    <div className="background">
      <div className="pt-28 pb-10 mx-auto">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div data-aos="fade-up-right" className="lg:col-span-3">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white flex items-center">
                Make great together
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                {description}
              </p>

              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full sm:w-auto">
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Enter contact information"
                  />
                </div>
                <button className="btn btn-secondary btn-active">
                  Book now
                </button>
              </div>

              <div className="mt-6 lg:mt-12">
                <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
                  Package Details:
                </span>

                <div className="mt-4 flex gap-x-8">
                  <h2 className="text-2xl font-black text-slate-300  flex gap-2 items-center">
                    {price} <FaDollarSign />
                    <span className="text-lg font-normal">for</span>{" "}
                    {management_for}{" "}
                    <span className="text-lg font-normal">persons</span>
                  </h2>
                </div>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="lg:col-span-4 mt-10 lg:mt-0"
            >
              <img className="w-full rounded-xl" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
