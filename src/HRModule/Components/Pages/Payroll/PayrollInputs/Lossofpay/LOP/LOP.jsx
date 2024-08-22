import React, { useState } from "react";
import './LOP.css';
import { MdDelete } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import AddLOP from "../AddLOP/AddLOP";

function LOP() {
  const [showAddLOP, setShowAddLOP] = useState(false);

  const handleAddLOPClick = () => {
    setShowAddLOP(true);
  };

  const handleCloseAddLOP = () => {
    setShowAddLOP(false);
  };

  return (
    <div className="deductions-container">
      <div className="dropdown-container">
        <select className="dropdown-option">
          <option value="employeeall">Employee: All</option>
          <option value="employeeone">Employee: One</option>
        </select>
      </div>
      <div>
        <Button type="primary" onClick={handleAddLOPClick}>Add LOP Days</Button>
      </div>
      <div className="table-container2">
        <table className="tax-table2">
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Name</th>
              <th>Join Date</th>
              <th>Work Days</th>
              <th>LOP</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
      {showAddLOP && <AddLOP onClose={handleCloseAddLOP} />}
    </div>
  );
}

export default LOP;
