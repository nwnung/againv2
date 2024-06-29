import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="container p-8 mx-auto md:px-[15%] flex flex-col md:flex-row gap-5 md:justify-between text-gray-50/80 items-center inset-y-auto inset-x-0 top-[92%] font-semibold z-10">
      <span>© {new Date().getFullYear()}. All rights reserved.</span>

      <ul className="flex gap-3 font-semibold text-sm">
        <li>
          <a href="https://github.com/nwnung">@jona</a>
        </li>
      </ul>

      <div className="flex gap-2">
        {footer.map((el) => (
          <a href={el.url} className="cursor-pointer" key={el.id}>
            <img src={el.iconUrl} alt={el.title} width={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
