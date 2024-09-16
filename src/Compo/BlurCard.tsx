import BlurFade from "../@/components/magicui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return {
    url: `https://picsum.photos/seed/${i + 1}/${width}/${height}`,
    text: `Text for image ${i + 1}`, // Unique text for each image
  };
});

export function BlurFadeDemo() {
  return (
    <div className="columns-2 gap-4 sm:columns-3 p-4">
      
      {images.map(({ url, text }, idx) => (
        
        <div className="relative group" key={url}>
          <BlurFade delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 w-full h-auto rounded-lg object-cover transition-opacity duration-300 ease-in-out opacity-80 group-hover:opacity-100"
              src={url}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
          <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg text-white text-lg font-semibold">
            <span>{text}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
