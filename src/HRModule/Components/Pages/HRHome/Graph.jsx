import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../HRHome/HRHome.css'; // Assuming HRHome.css contains the styles for Graph-calender and graph
import Calender from '../HRHome/Calender';

const Graph = () => {
  return (
    <div className='Graph-calender'>
      <div className='graph'>
        <PieChart 
          className='pie-chart'
          series={[
            {
              data: [
                { id: 0, value: 90, label: 'Employees' },
                { id: 1, value: 15, label: 'Manager' },
                { id: 2, value: 50, label: 'TeamLead' },
              ],
            },
          ]}
          width={900}
          height={300}
        />
      </div>
      <div>
        {/* <Calender/> */}
      </div>
    </div>
  );
};

export default Graph;