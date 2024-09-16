import { BorderBeam } from "../@/components/magicui/border-beam";
import { MagicCard } from "../@/components/magicui/magic-card";
import NumberTicker from "../@/components/magicui/number-ticker";
import ShineBorder from "../@/components/magicui/shine-border";
const ProgressSection = () => {
  return (
    <div
      className={
        "flex justify-around w-10/12 h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
        
      <MagicCard
        className="cursor-pointer bg-green-300 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-3/12"
        gradientColor={"green"}
      >
        <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={10} />
        </p>
      </MagicCard>
      
      <MagicCard
        className="cursor-pointer flex-col bg-purple-300 items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-3/12"
        gradientColor={"purple"}
      >
        <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={21} />
        </p>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-3/12"
        gradientColor={"#262626"}
      >
        <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={750} />
        </p>
      </MagicCard>
    </div>
  );
};

export default ProgressSection;
