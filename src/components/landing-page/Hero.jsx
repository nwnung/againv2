import Button from "../Button";

const Hero = () => {
  return (
    <div className="p-5 max-w-[490px] md:w-2/3 lg:w-5/6 mx-auto bg-emerald-950/55">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="tracking-tighter leading-none text-7xl lg:text-7xl text-center text-white font-bold">
          You don't <br />
          need &nbsp;
          <span className="text-emerald-700/75">superpowers</span>.
        </h1>
        <p className="opacity-90 text-gray-50 font-semibold tracking-tighter">
          Explore new things and new ways every day in your life.
        </p>
        <Button label={"Let Started"} />
      </div>
    </div>
  );
};

export default Hero;
