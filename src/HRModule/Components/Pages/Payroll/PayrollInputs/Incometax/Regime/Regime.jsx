import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Regime.css";
import { NavLink } from "react-router-dom";
import {  Button} from "antd";
 
 
 
function Regime() {
  return (
    <div className="regime-container">
      <h3>Regime</h3>
      <h6>Select an income tax regime to submit and declare IT</h6>
      <div className="dropdown-container1">
        <select className="dropdown-option1">
          <option value="Newtaxregime">New tax regime</option>
          <option value="oldtaxregime2">Old tax regime2</option>
        </select>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search tax regime..."
          list="tax-regimes"
        />
        <datalist id="tax-regimes">
          <option value="New tax regime" />
          <option value="Old tax regime" />
        </datalist>
      </div>
      <NavLink to="/hr-dashboard" >
              <Button type="primary">Back</Button>
            </NavLink>    </div>
  );
}
 
export default Regime;