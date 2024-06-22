const Card = ({ name, img, desc, handleopenPopUp }) => {
  return (
    <>
      <div
        className="bg-gray-50/90 p-4 rounded shadow flex flex-col gap-4 items-center cursor-pointer transition max-w-[240px]"
        onClick={handleopenPopUp}
      >
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-zinc-900/90 tracking-tighter leading-tight">
          {desc}
        </p>
        <img
          src={img}
          alt={name}
          className="object-cover w-full shadow-xl blur-sm bg-no-repeat"
        />
      </div>
    </>
  );
};

export default Card;
