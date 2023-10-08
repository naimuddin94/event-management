import Marquee from "react-fast-marquee";

const ServiceBanner = () => {
  return (
    <div className="pt-20 h-96">
      <div className="relative h-96">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-md md:text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 md:px-8 ring-8 py-2 rounded-full w-fit">
            Gaming & Tech
          </h1>
        </div>
        <div className="absolute bottom-2">
          <Marquee>
            <p className="text-lg md:text-xl bg-black/50 py-1 md:py-2 font-medium text-slate-100">
              Welcome to EventSphere, where we specialize in orchestrating
              exceptional game and tech events that leave a lasting impression.
              With a deep-rooted passion for the gaming and technology
              industries, we curate experiences that bring together enthusiasts,
              professionals, and industry leaders. Our portfolio includes a
              diverse range of events, from high-energy gaming competitions to
              insightful tech conferences and workshops. We take pride in
              creating dynamic platforms for networking, knowledge sharing, and
              forging valuable connections within the industry.
            </p>
          </Marquee>
        </div>

        <img
          src="https://i.postimg.cc/Njks265J/24a929c3-ffbe-4d30-80ae-9cb53b245306.png"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default ServiceBanner;
