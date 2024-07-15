import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import NavLinks from "./Nav-Links";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(null);

  const [navbarScroll, setNavbarScroll] = useState(null);
  const scrollTopPx = 22;

  const handleOpenMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollTopPx) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-10 w-full`}>
      <div
        className={`px-12 md:px-[11%] lg:px-[22%] py-6 mx-auto font-semibold text-gray-50 ${
          navbarScroll
            ? "p-4 bg-gray-50 text-zinc-900 transition ease-in-out shadow"
            : "bg-transparent transition duration-200"
        }`}
      >
        <nav className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex gap-5">
            <a
              href="/"
              className="hover:opacity-65 duration-300 after:content-['nation'] after:absolute after:top-[20%] font-bold after:text-xs text-xl"
            >
              nw
            </a>
          </div>
          <NavLinks />
          <span className="md:hidden relative" onClick={() => handleOpenMenu()}>
            <FiMenu size={23} className="cursor-pointer" />
            {OpenMenu ? <MobileMenu /> : ""}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
