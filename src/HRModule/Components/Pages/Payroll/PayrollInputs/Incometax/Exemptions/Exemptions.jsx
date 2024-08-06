import React, { useState } from 'react';
import './Exemptions.css';
 
const Exemptions = () => {
  const [isOverrideHRA, setIsOverrideHRA] = useState(false);
  const [isLTAExempt, setIsLTAExempt] = useState(false);
  const [isProofSubmitted, setIsProofSubmitted] = useState(false);
 
  return (
    <div className="exemptions-container">
      <div className="left-section">
        <div className="exemptions">
          <h2>Exemptions</h2>
          <table className="exemptions-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EDUCATION EXEMPT</td>
                <td>Rs 0.00</td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div className="other-exemptions">
          <h3>Other Exemptions</h3>
          <div className="lta-exemption">
            <input
              type="checkbox"
              checked={isLTAExempt}
              onChange={() => setIsLTAExempt(!isLTAExempt)}
            />
            <label>LTA Exemption</label>
            <input type="number" defaultValue={0} />
          </div>
          <div className="total-exemptions">Total Exemptions : Rs 0.00</div>
        </div>
      </div>
      <div className="hra-exemption">
        <h2>HRA Exemption</h2>
        <div className="hra-buttons">
          <button>Monthly Rent</button>
          <button>Monthly Breakup</button>
        </div>
        <div className="hra-fields">
          <div className="field">
            <label>Total Rent Paid p.a</label>
            <input type="number" defaultValue={0} />
          </div>
          <div className="field">
            <label>Total Rent Paid (Prorated)</label>
            <input type="number" defaultValue={0} />
          </div>
          <div className="field override-hra">
            <input
              type="checkbox"
              checked={isOverrideHRA}
              onChange={() => setIsOverrideHRA(!isOverrideHRA)}
            />
            <label>Override HRA Exemption</label>
          </div>
          <div className="field">
            <label>Total HRA</label>
            <input type="number" defaultValue={156000} />
          </div>
          <div className="field">
            <label>40% of Basic</label>
            <input type="number" defaultValue={156000} />
          </div>
          <div className="field">
            <label>Excess Rent</label>
            <input type="number" defaultValue={-39000} />
          </div>
          <div className="field">
            <label>HRA Exemption</label>
            <input type="number" defaultValue={0} />
          </div>
        </div>
        <div className="rent-proof-info">
          <button>Rent Proof Info</button>
          <div className="proof-submitted">
            <input
              type="checkbox"
              checked={isProofSubmitted}
              onChange={() => setIsProofSubmitted(!isProofSubmitted)}
            />
            <label>Is Proof Submitted</label>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Exemptions;