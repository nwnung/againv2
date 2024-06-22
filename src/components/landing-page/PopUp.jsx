const PopUp = () => {
  return (
    <div className="transition shadow-2xl duration-300 ease-in-out p-2 bg-gray-300 rounded absolute z-10 w-[300px] h-[300px] md:w-[50%] md:h-[50%] top-1/2 y left-1/2 -translate-y-1/2 transform -translate-x-1/2 flex gap-5 flex-col items-center justify-center">
      {/* content / text */}
      <div className="flex flex-col gap-2 font-semibold text-center">
        <h1>Coming Soon...</h1>
        <p>Sorry its not time yet</p>
      </div>
      {/* image rick roll omg */}
      <img
        src="/coming.jpg"
        alt="coming"
        className="w-full h-auto md:max-w-[500px] lg:max-w-[720px] rounded"
      />
    </div>
  );
};

export default PopUp;
