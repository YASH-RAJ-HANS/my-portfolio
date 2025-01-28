import React, { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Timer interval is based on 500ms completion time, updating the progress every 5ms
    const totalTime = 5000; // 500ms
    const stepTime = 50; // 5ms per step
    const stepValue = (100 * stepTime) / totalTime; // Each step will increase the progress value

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + stepValue;
      });
    }, stepTime);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
   
      <div className="relative w-[6px] h-[92vh] bg-gray-200 rounded overflow-hidden">
        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 w-full bg-purple-700 transition-all duration-[5000] ease-linear"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    
  );
};

export default Loader;
