import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import AddLOP from '../AddLOP/AddLOP';
import { fetchLopData } from '../../../../../../Redux/Slices/lopSlice';
import './LOP.css';
 
function LOP() {
  const dispatch = useDispatch();
  const { lopData, status } = useSelector((state) => state.lop);
  console.log(lopData)
  const [showAddLOP, setShowAddLOP] = React.useState(false);
 
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLopData());
    }
  }, [status, dispatch]);
 
  const handleAddLOPClick = () => {
    setShowAddLOP(true);
  };
 
  const handleCloseAddLOP = () => {
    setShowAddLOP(false);
  };
 
  return (
    <div className="deductions-container">
      <div>
        <Button type="primary" onClick={handleAddLOPClick}>Add LOP Days</Button>
      </div>
      <div className="table-container2">
        <table className="tax-table2">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Join Date</th>
              <th>LOP</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(lopData) && lopData.length > 0 ? (
              lopData.map((item, index) => (
                item.data.map((dataItem, dataIndex) => (
                  <tr key={`${index}-${dataIndex}`}>
                    <td>{dataItem.emp_id}</td>
                    <td>{dataItem.firstName}</td>
                    <td>{dataItem.designation}</td>
                    <td>{dataItem.joiningDate}</td>
                    <td>{item.lop}</td>
                    <td>{dataItem.remarks}</td>
                  </tr>
                ))
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showAddLOP && <AddLOP onClose={handleCloseAddLOP} />}
    </div>
  );
}
 
export default LOP;