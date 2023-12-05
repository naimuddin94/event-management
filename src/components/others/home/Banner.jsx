import Lottie from "lottie-react";
import animationData from "../../../assets/game_two.json";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1480563597043-1c877e682fc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-fit bg-cover bg-center relative text-white flex flex-col md:flex-row items-center justify-center md:justify-start bg-black/30 bg-blend-overlay py-16 lg:py-0">
      <div data-aos="fade-right" className="md:pl-20 lg:pl-36 px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black py-5">
          <span className="bg-gradient-to-t from-orange-600 to-rose-800 text-5xl md:text-6xl lg:text-8xl bg-clip-text text-transparent font-satisfy p-1">
            E
          </span>
          manage <br /> Agency
        </h1>
        <p className="font-mono max-w-xs">
          We help brands and game devs reach consumers through esports and video
          games.
        </p>
      </div>
      <div className="flex justify-center flex-1">
        <div className="h-full">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
