import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Steps, Button, Form } from 'antd';
import Employeesettlement from './Employeesettlement/Employeesettlement';
import Resignation from './Resignation/Resignation';
import Noticepay from './Noticepay/Noticepay';
import Workdays from './Workdays/Workdays';
import Leaveencashment from './Leaveencashment/Leaveencashment';
import Remarks from './Remarks/Remarks';
import { nextStep, previousStep } from '../../../../../Redux/Slices/SettlementSlice';
import './Settlementtabs.css';

const { Step } = Steps;

const Settlementtabs = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.settlement.currentStep);

  const steps = [
    { title: 'Employee', content: <Employeesettlement /> },
    { title: 'Resignation Details', content: <Resignation /> },
    { title: 'Notice Pay', content: <Noticepay /> },
    { title: 'Work Days', content: <Workdays /> },
    { title: 'Leave Encashment', content: <Leaveencashment /> },
    { title: 'Remarks', content: <Remarks /> },
  ];

  const onFinish = () => {
    if (currentStep < steps.length - 1) {
      dispatch(nextStep());
    } else {
      console.log('All steps completed');
    }
  };

  return (
    <div className="settlement-tabs-container">
      <div>
        <h3>Final Settlement</h3>
      </div>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <Form onFinish={onFinish}>
          {steps[currentStep].content}
          <div className="steps-action">
            {currentStep > 0 && (
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => dispatch(previousStep())}
              >
                Previous
              </Button>
            )}
            <Button type="primary" htmlType="submit" className="next-submit-button">
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Settlementtabs;
