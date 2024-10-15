import React from 'react'
import LinePlot from '../Compo/DsaChart'
import TreeChart from '../Compo/DsaChart'

import RatingGraph from '../Compo/DsaGraph.js'
import GitHubProfile from '../Compo/GitHubProfile'

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