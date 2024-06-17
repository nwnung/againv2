import Hero from "./components/landing-page/Hero";
import PostHero from "./components/landing-page/PostsHero";

function App() {
  return (
    <div className="bg-[#2d3333fd] min-h-[100vh]">
      {/* landing page */}
      <div className="pt-24 md:pt-32 xl:pt-38 flex flex-col gap-7 items-center">
        <Hero />

        <PostHero />
      </div>
    </div>
  );
}

export default App;
