import { discord, nwCar, nwPic, nwShop } from "../assets";

export const navbar = [
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Services",
    url: "/services",
  },
];

export const proyects = [
  {
    name: "nwPic",
    about:
      "A simple gallery, where you can see your favorite photos or memories.",
    img: nwPic,
    id: "1",
    link: "https://github.com/nwnung/nwPic",
  },
  {
    name: "nwCar",
    about:
      "A page that will make you see the cars of my dreams, in addition to my favorites and the ones I want at some point.",
    img: nwCar,
    id: "2",
    link: "https://github.com/nwnung/nwCar",
  },
  {
    name: "nwShop",
    about: "nw shop is a store with curious items for your set up.",
    img: nwShop,
    id: "3",
    link: "https://github.com/nwnung/nwShop",
  },
];

export const footer = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "https://discord.gg/tYc7Jaf2",
  },
];
