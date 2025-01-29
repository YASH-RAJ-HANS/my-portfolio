import React, { useEffect, useState } from 'react';
import LinePlot from '../../Compo/DsaCompo/DsaChart';
import TreeChart from '../../Compo/DsaCompo/DsaChart';
import RatingGraph from '../../Compo/DsaCompo/DsaGraph.js';
import GitHubProfile from '../../Compo/DsaCompo/GitHubProfile';
import DsaContent from '../../Compo/DsaCompo/DsaContent';
import { Data_Dsa, Other_Data } from '../../Compo/DsaCompo/Data';

const Dsa = () => {
  const [activeData, setActiveData] = useState(Data_Dsa); // State to manage active dataset
  const [isQuestionsActive, setIsQuestionsActive] = useState(true); // State to track button toggle

  // Function to toggle between datasets
  const toggleData = () => {
    setIsQuestionsActive(!isQuestionsActive); // Toggle the button state
  };
  useEffect(()=>{
    if (activeData==Data_Dsa) {
      setActiveData(Other_Data);
    } else {
      setActiveData(Data_Dsa);
    }
    console.log(activeData)
  },[isQuestionsActive])

  return (
    <div className="w-full max-md:w-full mt-24 flex flex-col justify-center items-center">
      <TreeChart />
      
      {/* Switch Button */}
      {/* <div className="flex space-x-4 mb-6">
        <button
          onClick={toggleData}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isQuestionsActive
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Questions
        </button>
        <button
          onClick={toggleData}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            !isQuestionsActive
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          DSA Topics
        </button>
      </div> */}

      {/* Render DsaContent with the active dataset */}
      { activeData && <DsaContent DsaData={activeData} />}
      <DsaContent DsaData={Data_Dsa}/>

      {/* Other Components */}
      {/* <RatingGraph /> */}
      {/* <GitHubProfile username={"YASH-RAJ-HANS"} /> */}
    </div>
  );
};

export default Dsa;