import Marquee from "react-fast-marquee";
import images from "./ClientImg";

const Client = () => {
  return (
    <div className="clientBackground">
      <h1 className="text-3xl md:text-6xl font-black text-center py-10 md:py-16 heading-gradient">
        Our Partners
      </h1>
      <Marquee>
        {images.map((image, index) => (
          <img key={index} className="w-20 md:w-28 mr-8" src={image} alt="" />
        ))}
      </Marquee>
    </div>
  );
};

export default Client;
