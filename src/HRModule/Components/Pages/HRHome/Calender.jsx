import React, { useState } from 'react';
import { Calendar, Modal, theme } from 'antd';
import './Calender.css'


const holidays = {
  '2024-06-16': 'Eid al-Fitr',
  '2024-07-04': 'Independence Day',
  
};

const Calender = () => {
  const { token } = theme.useToken();
  const [holidayReason, setHolidayReason] = useState('');

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const dateCellRender = (value) => {
    const date = value.format('YYYY-MM-DD');
    if (holidays[date]) {
      return <div className="holiday-dot" title={holidays[date]}></div>;
    }
    return null;
  };

  const handleDateClick = (value) => {
    const date = value.format('YYYY-MM-DD');
    if (holidays[date]) {
      setHolidayReason(holidays[date]);
      Modal.info({
        title: 'Holiday Due ',
        content: (
          <div>
            <p>{holidays[date]}</p>
          </div>
        ),
      });
    }
  };

  const wrapperStyle = {
    width: 500,
    border: `1px solid black${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div classNane='main-calender'>
    <div className="Calender" style={wrapperStyle}>
      <Calendar
        className="calendar-c"
        fullscreen={false}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        onSelect={handleDateClick}
      />
    </div>
    </div>
  );
};

export default Calender;