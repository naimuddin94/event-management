const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/n3bcKN3/web-summit-decoded-dublin-dublinglobe-com-1066x533.jpg')] h-screen bg-cover bg-center relative -mt-20 -z-10 text-white flex items-center justify-center md:justify-start bg-black/30 bg-blend-overlay">
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
    </div>
  );
};

export default Banner;
