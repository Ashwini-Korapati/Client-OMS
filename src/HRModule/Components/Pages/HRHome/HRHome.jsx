import React from 'react'
import '../HRHome/HRHome.css'
import HRCards from './HRCards'
import Graph from './Graph'
import Calender from './Calender'

const HRHome = () => {
  return (
    <div className='HRHome-first'>
    <div className='HRHome-blog-cards'>
      <h1>Welcome User.!</h1>
      <HRCards/>
    </div>
    <div className='HRHome-graph-calender'>
      <Graph className/>
      <Calender/>
    </div>
    </div>
  )
}

export default HRHome