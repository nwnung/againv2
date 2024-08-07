const Hero = () => {
  return (
    <div className="p-5 min-w-[360px] max-w-[600px] mx-auto bg-emerald-950/55 shadow-xl rounded">
      <div className="flex flex-col gap-5 items-center text-center">
        <h1 className="tracking-tighter text-6xl lg:text-8xl text-center text-white font-bold">
          You don't <br />
          need <br />
          <span className="text-emerald-700/75">superpowers</span>.
        </h1>
        <p className="opacity-90 text-gray-50/90 font-semibold tracking-wide">
          Explore new things and new ways every day in your life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
