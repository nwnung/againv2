import Hero from "./components/landing-page/Hero";
import PostHero from "./components/landing-page/PostsHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#2d3333fd] pt-[6.75rem] lg:pt-[7.25rem] overflow-hidden">
      {/* landing page */}
      <Navbar />
      <div className="flex flex-col gap-2 items-center">
        <Hero />
        <PostHero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
