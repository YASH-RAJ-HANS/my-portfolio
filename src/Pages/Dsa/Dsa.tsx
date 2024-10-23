import React from 'react'
import LinePlot from '../../Compo/DsaCompo/DsaChart'
import TreeChart from '../../Compo/DsaCompo/DsaChart'

import RatingGraph from '../../Compo/DsaCompo/DsaGraph.js'
import GitHubProfile from '../../Compo/DsaCompo/GitHubProfile'

const Dsa = () => {
  return (
    <div className=''>
      <TreeChart/>
      {/* yash1234yrh */}
      <RatingGraph/>
      <GitHubProfile username={"YASH-RAJ-HANS"}/>
    </div>

  )
}

export default Dsa