import { BsDiscord } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";

export const navbar = [
  {
    "label": "Home",
    "url": "/"
  },
  {
    "label": "About",
    "url": "/about"
  },
  {
    "label": "Services",
    "url": "/services"
  }
]

export const proyects = [
  {
    "name": "nwPic",
    "about": "A simple gallery, where you can see your favorite photos or memories.",
    "img": "/vercel.png",
    "id": "1"
  },
  {
    "name": "nwCar",
    "about": "A page that will make you see the cars of my dreams, in addition to my favorites and the ones I want at some point.",
    "img": "/vercel.png",
    "id": "2"
  },
  {
    "name": "nwShop",
    "about": "nw shop is a store with curious items for your set up.",
    "img": "/vercel.png",
    "id": "3"
  }
]

export const footer = [
  {
    "id": "0",
    "title": "Discord",
    iconUrl: BsDiscord,
    "url": "#",
  },
  {
    "id": "1",
    "title": "Github",
    iconUrl: VscGithubAlt,
    "url": "#",
  }
]