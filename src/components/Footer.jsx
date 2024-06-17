import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="pt-12 p-5 md:px-[15%] bg-[#2d3333fd] flex flex-col md:flex-row gap-5 md:justify-between text-gray-50/70 items-center">
      <ul className="flex gap-3 font-semibold text-sm">
        <li>@jonaanw</li>
        <li>Donation</li>
      </ul>

      <div className="flex gap-2">
        {footer.map((el) => (
          <img
            src={el.img}
            alt={el.label}
            key={el.label}
            className="w-9 cursor-pointer rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
