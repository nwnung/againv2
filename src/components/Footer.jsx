import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="container pt-12 p-8 mx-auto md:px-[15%] flex flex-col md:flex-row gap-5 md:justify-between text-gray-50/80 items-center">
      <span>© {new Date().getFullYear()}. All rights reserved.</span>

      <ul className="flex gap-3 font-semibold text-sm">
        <li>jonaanw</li>
        <li>Donation</li>
      </ul>

      <div className="flex gap-2">
        {footer.map((el) => (
          <>{el.title}</>
        ))}
      </div>
    </div>
  );
};

export default Footer;
