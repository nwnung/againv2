import Card from "./Card";
import { proyects } from "../../constants";

const PostHero = () => {
  return (
    <div className="w-5/6 md:w-4/6 lg:w-3/5">
      <div className="grid mx-auto justify-center gap-6 lg:grid-cols-3 lg:gap-3 w-3/5 lg:w-5/6 xl:w-4/6">
        {proyects.map((el) => (
          <Card name={el.name} desc={el.about} img={el.img} key={el.name} />
        ))}
      </div>
    </div>
  );
};

export default PostHero;
