import React from "react";

const Name = () => {
  return (
    <div className="diff aspect-[16/9] h-[60vh]">
      <div className="diff-item-1">
        <div className="bg-gray-700 text-primary-content grid place-content-center text-9xl font-black text-yellow-100"
        //  style={{
        //     backgroundImage: `url('https://images.unsplash.com/photo-1725576415790-a5b4009a7952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')`,
        //     backgroundSize: 'cover', // Makes the background cover the entire div
        //     backgroundPosition: 'center', // Centers the background image
        //     height: '60vh', // Example to fill the height of the viewport
        //   }}
          >
          DEVELOPER
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 grid place-content-center text-9xl font-black"
       >
          YASH RAJ HANS
        </div>
      </div>
      <div className=" diff-resizer"></div>
    </div>
  );
};

export default Name;
