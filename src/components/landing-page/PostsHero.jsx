import Card from "./Card";
import { proyects } from "../../constants";
import { ScrollParallax } from "react-just-parallax";

const PostHero = ({ handleopenPopUp }) => {
  return (
    <div className="w-5/6 md:w-4/6 lg:w-3/5 relative">
      <ScrollParallax>
        <div className="grid mx-auto justify-center gap-2 lg:grid-cols-3 lg:gap-3 w-3/5 lg:w-5/6 xl:w-4/6 mt-28 lg:mt-16 pb-16">
          {proyects.map((el) => (
            <Card
              name={el.name}
              desc={el.about}
              img={el.img}
              key={el.id}
              handleopenPopUp={handleopenPopUp}
            />
          ))}
        </div>
      </ScrollParallax>
    </div>
  );
};

export default PostHero;
