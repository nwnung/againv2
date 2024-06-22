import Hero from "./components/landing-page/Hero";
import PostHero from "./components/landing-page/PostsHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import PopUp from "./components/landing-page/PopUp";

function App() {
  const [openPopUp, setOpenPopUp] = useState(null);

  const handleopenPopUp = () => {
    setOpenPopUp(true);
    console.log("se abrio el pop up");

    setTimeout(() => {
      setOpenPopUp(false);
      console.log("se cerro el pop up");
    }, 1200);
  };

  return (
    <div className="pt-[6.75rem] lg:pt-[7.25rem] overflow-hidden">
      {/* landing page */}
      <Navbar scrollY={scrollY} />
      <div className="flex flex-col gap-2 items-center">
        <Hero />
        <PostHero openPopUp={openPopUp} handleopenPopUp={handleopenPopUp} />
      </div>
      <Footer />
      {openPopUp && <PopUp />}
    </div>
  );
}

export default App;
