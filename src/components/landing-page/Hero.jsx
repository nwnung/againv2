import Button from "../Button";

const Hero = () => {
  return (
    <div className="p-5 min-w-[360px] max-w-[512px] mx-auto bg-emerald-950/55 rounded-sm">
      <div className="flex flex-col gap-5 items-center text-center">
        <h1 className="tracking-tighter leading-none text-6xl lg:text-7xl text-center text-white font-bold">
          You don't <br />
          need <br />
          <span className="text-emerald-700/75">superpowers</span>.
        </h1>
        <p className="opacity-90 text-gray-50 font-semibold tracking-tighter">
          Explore new things and new ways every day in your life.
        </p>
        {/* <Button label={"Let Started"} /> */}
      </div>
    </div>
  );
};

export default Hero;
