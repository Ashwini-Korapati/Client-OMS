import React from 'react';
import '../EmpHome/EmpHome.css'

import { useSelector } from 'react-redux';

const HRHome = () => {
  const { emp }  = useSelector(state => state.authState);

  return (
    <div className='HRHome-first'>
      <div className='HRHome-blog-cards'>
        <h1>
          Welcome <span className="emp-name">{emp.name}..!</span>
        </h1>
      </div>

    </div>
  );
}

export default HRHome;
