import { navbar } from "../constants";

const MobileMenu = () => {
  return (
    <div className="flex flex-col gap-y-3 h-28 w-28 p-1 rounded bg-gray-200 text-black absolute right-7 top-[30px] text-sm items-center justify-center">
      {/* menu? */}
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
    </div>
  );
};

export default MobileMenu;
