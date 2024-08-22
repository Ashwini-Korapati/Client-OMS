import React, { useState } from 'react';
import '../PerfarmanceMatrics/PerfarmanceMatrics.css'
import TextArea from 'antd/es/input/TextArea';

const PerformanceScorecard = () => {
  const [form, setForm] = useState({
    empId: '',
    empName: '', 
    month: '', 
    score: '',
    goals: [
      {
        slNo: 1,
        goal: 'Quality',
        workCategory: 'All typ of works',
        overallWeightage: '',
        employeeScore: '',
        supervisorScore: '',
        definition: '',
        managerReview: ''
      }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleGoalChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGoals = form.goals.map((goal, i) => 
      i === index ? { ...goal, [name]: value } : goal
    );
    setForm({ ...form, goals: updatedGoals });
  };

  const addGoalRow = () => {
    setForm({
      ...form,
      goals: [
        ...form.goals,
        {
          slNo: form.goals.length + 1,
          goal: '',
          workCategory: '',
          overallWeightage: '',
          employeeScore: '',
          supervisorScore: '',
          definition: '',
          managerReview: ''
        }
      ]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add form submission logic here
  };

  return (
    <div className="scorecard-container">
      <h2>NMIT Performance Scorecard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Emp ID:</label>
            <input
              type="text"
              name="empId"
              value={form.empId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Emp Name:</label>
            <input
              type="text"
              name="empName"
              value={form.empName}
              onChange={handleInputChange}
              required
              
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Month:</label>
            <input
              type="text"
              name="month"
              value={form.month}
              onChange={handleInputChange}
              required
              
            />
          </div>
          <div className="form-group">
            <label>Score:</label>
            <input
              type="text"
              name="score"
              value={form.score}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <h3>Goals</h3>
        <table className="goals-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Goals</th>
              <th>Work Category</th>
              <th>Overall Weightage</th>
              <th>Employee Score</th>
              <th>Supervisor Score</th>
              <th>Definition</th>
              <th>Manager Review</th>
            </tr>
          </thead>
          <tbody>
            {form.goals.map((goal, index) => (
              <tr key={index}>
                <td>{goal.slNo}</td>
                <td>
                  <TextArea
                    type="text"
                    name="goal"
                    value={goal.goal}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="workCategory"
                    value={goal.workCategory}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="overallWeightage"
                    value={goal.overallWeightage}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="employeeScore"
                    value={goal.employeeScore}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="supervisorScore"
                    value={goal.supervisorScore}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="definition"
                    value={goal.definition}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="managerReview"
                    value={goal.managerReview}
                    onChange={(e) => handleGoalChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className='perfomance-btn' type="button" onClick={addGoalRow}>
          Add Goal
        </button>
        <button className='perfomance-btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PerformanceScorecard;
