import { navbar } from "../constants";

const NavLinks = () => {
  return (
    <ul className="hidden md:flex gap-5">
      {navbar.map((link) => {
        return (
          <a
            href={link.url}
            key={link.label}
            className="hover:opacity-80 duration-200"
          >
            {link.label}
          </a>
        );
      })}
    </ul>
  );
};

export default NavLinks;
