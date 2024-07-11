import React from 'react';
import { useEffect } from 'react';
import '../HRHome/HRHome.css';
import HRCards from './HRCards';
import Graph from './Graph';
import Calender from './Calender';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchEmployees } from '../../../Redux/Slices/ViewempSlice'

const HRHome = () => {
  const { emp }  = useSelector(state => state.authState);
console.log(emp)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);


  return (
    <div className='HRHome-first'>
      <div className='HRHome-blog-cards'>
        <h1>
          Welcome <span className="emp-name">{emp.name}..!</span>
        </h1>
      </div>
      <HRCards />
      <div className='HRHome-graph-calender'>
        <Graph />
        <Calender />
      </div>
    </div>
  );
}

export default HRHome;
