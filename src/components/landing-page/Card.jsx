const Card = ({ name, img, desc }) => {
  return (
    <div className="bg-gray-50 p-4 rounded shadow flex flex-col gap-4 items-center cursor-pointer hover:scale-105 transition max-w-[310px]">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-zinc-900 tracking-tighter leading-tight">{desc}</p>
      <img src={img} alt={name} className="object-cover w-4/5 bg-no-repeat" />
    </div>
  );
};

export default Card;
