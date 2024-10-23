import { MagicCard } from "../../@/components/magicui/magic-card";
import NumberTicker from "../../@/components/magicui/number-ticker";

const ProgressSection = () => {
  const cardData = [
    {
      value: 20,
      title: "Projects Done 🚀",
      subtitle: "Freelance | Personal",
      gradientColor: "from-green-800 to-green-950",
      tickerValue: 20,
      emoji: "🚀",
      borderColor: "border-green-500/20",
      color:"green"
    },
    {
      value: 3,
      title: "Internships 💼",
      subtitle: "1 Offline | 2 Remote",
      gradientColor: "from-purple-900 to-purple-950",
      tickerValue: 3,
      emoji: "💼",
      borderColor: "border-purple-500/20",
      color:"purple"
    },
    {
      value: 8,
      title: "Hackathons 🏆",
      subtitle: "3 Won 🥇 | 5 Finalist 🏅",
      gradientColor: "from-gray-700 to-gray-900",
      tickerValue: 8,
      emoji: "🏆",
      borderColor: "border-gray-500/20",
      color:"black"
    },
    {
      value: 5,
      title: "Certifications 📜",
      subtitle: "Google | AWS | Coursera",
      gradientColor: "from-blue-800 to-blue-900",
      tickerValue: 5,
      emoji: "📜",
      borderColor: "border-blue-500/20",
      color:"blue"
    },
    
  ];

  return (
    <div className="flex justify-around py-40 w-10/12 min-h-[600px]  flex-col gap-8 lg:h-[300px] lg:flex-row bg-zinc-950 md:shadow-xl relative">
      {cardData.map((card, index) => (
        <MagicCard
          key={index}
          className={`relative cursor-pointer bg-transparent backdrop-blur-2xl border-4 bg-gradient-to-br ${card.gradientColor} flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-3/12 border ${card.borderColor} rounded-lg glass-card transition-all duration-300 hover:scale-110 rounded-[20px]`}
          gradientColor={card.color}
        >
          <p className="whitespace-pre-wrap text-6xl font-bold tracking-tight text-white">
            <NumberTicker className="text-white" value={card.tickerValue} />+
          </p>
          <p className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-gray-200 flex items-center">
            {card.title} {card.emoji}
          </p>
          <hr className="border-t-2 border-gray-400 w-8/12 mt-3 mb-2" />
          <p className="text-xl text-gray-300 mt-4">{card.subtitle}</p>
        </MagicCard>
      ))}
    </div>
  );
};

export default ProgressSection;
