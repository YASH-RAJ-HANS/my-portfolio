import React from 'react'
import LinePlot from '../../Compo/DsaCompo/DsaChart'
import TreeChart from '../../Compo/DsaCompo/DsaChart'

import RatingGraph from '../../Compo/DsaCompo/DsaGraph.js'
import GitHubProfile from '../../Compo/DsaCompo/GitHubProfile'
import DsaContent from '../../Compo/DsaCompo/DsaContent'
import { Data_Dsa, Other_Data } from '../../Compo/DsaCompo/Data'

const Dsa = () => {
  return (
    <div className=' w-full max-md:w-full  mt-24'>
      <DsaContent DsaData={Data_Dsa}/>
      <DsaContent DsaData={Other_Data}/>
      <TreeChart/>
      {/* yash1234yrh */}
      {/* <RatingGraph/> */}
      {/* <GitHubProfile username={"YASH-RAJ-HANS"}/> */}
    </div>

  )
}

export default Dsa