const Card = ({ name, img, desc, link, handleopenPopUp }) => {
  return (
    <>
      <a
        className="bg-gray-50/90 p-4 rounded shadow flex flex-col gap-4 items-center cursor-pointer transition max-w-[240px]"
        onClick={handleopenPopUp}
        href={link}
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
      </a>
    </>
  );
};

export default Card;
