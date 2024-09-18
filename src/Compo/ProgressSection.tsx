
import { MagicCard } from "../@/components/magicui/magic-card";
import NumberTicker from "../@/components/magicui/number-ticker";
const ProgressSection = () => {
  return (
    <div
      className={
        "flex justify-around py-40 w-10/12 min-h-[600px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row bg-zinc-950 md:shadow-xl"
      }
    >
        
      <MagicCard
        className="cursor-pointer bg-green-300 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-3/12"
        gradientColor={"green"}
      >
        <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={10} />
        </p>
        <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
          title
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
