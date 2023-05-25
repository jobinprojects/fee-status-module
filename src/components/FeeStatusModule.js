import React, { useState } from 'react';
import './FeeStatusModule.css';
import AccountingOfficer from './AccountingOfficer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const FeeStatusModule = ({ officer, students }) => {
  const [updatedStudents, setUpdatedStudents] = useState([...students]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleFeeStatusUpdate = (studentId, action, value) => {
    setUpdatedStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === studentId) {
          if (action === 'accept') {
            student.feeStatus = 'Paid';
            student.remarks = 'accept';
          } else if (action === 'reject') {
            student.feeStatus = 'Rejected';
            student.remarks = 'reject';
            student.reason = value || '';
          } else {
            // Custom action (e.g., update remarks)
            student.remarks = value || '';
          }
        }
        return student;
      })
    );
  };

  const handleKeyPress = (event, studentId) => {
    if (event.key === 'Enter') {
      const inputField = event.target;
      handleFeeStatusUpdate(studentId, 'remarks', inputField.value);
      inputField.blur(); // Remove focus from input field
    }
  };

  const getColumnValue = (student, column) => {
    switch (column) {
      case 'studentName':
        return student.name;
      case 'feeStatus':
        return student.feeStatus;
      case 'dateOfTransaction':
        return student.feeDetails[0]?.dateOfTransaction;
      case 'amount':
        return student.feeDetails[0]?.amount;
      case 'modeOfPayment':
        return student.feeDetails[0]?.modeOfPayment;
      case 'feePortal':
        return student.feeDetails[0]?.feePortal;
      default:
        return '';
    }
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      // Reverse the sort direction if the same column is clicked again
      setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    } else {
      // Set the new column and default sort direction to ascending
      setSortColumn(column);
      setSortDirection('asc');
    }
  };


  const downloadProofOfPayment = (proofOfPaymentUrl, filename) => {
    const link = document.createElement('a');
    link.href = proofOfPaymentUrl;
    link.download = filename;
    link.target = '_blank';
    link.click();
  };

  const sortedStudents = [...updatedStudents].sort((a, b) => {
    const valueA = getColumnValue(a, sortColumn);
    const valueB = getColumnValue(b, sortColumn);

    if (valueA < valueB) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
      <div className="fee-status-module">
      <div className="hero-image">
      <a href="#" title="Home">
  <img src="http://www.bvicam.in/sites/default/files/BVICAM%20red%20logo_2.png" alt="Home" style={{ width: '190px' }} />
</a>
<div>
  <img id="logo-image" src="https://bharatividyapeethfees.com/college/sitedata/images/pay_right.png" alt="Logo" style={{ width: '110px' }} />
</div>
    </div>
      <div id="site-name">
      <strong>
        <a>
      <div id="website_name">Bharati Vidyapeeth's Institute of <br></br>Computer Applications and Management (BVICAM)<br />MCA | BA(JMC)</div>
    </a>
  </strong>

</div>


      <AccountingOfficer officer={officer} />
      <marquee><h2>Fee Status</h2></marquee>
      <table className="student-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('studentName')}>
              Student Name {sortColumn === 'studentName' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('feeStatus')}>
              Fee Status {sortColumn === 'feeStatus' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('dateOfTransaction')}>
              Date of Transaction {sortColumn === 'dateOfTransaction' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('amount')}>
              Amount {sortColumn === 'amount' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('modeOfPayment')}>
              Mode of Payment {sortColumn === 'modeOfPayment' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('feePortal')}>
              Fee Portal {sortColumn === 'feePortal' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th>Proof of Payment</th>
            <th>Action</th>
            <th>Remarks</th>
            <th>Download Proof</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.feeStatus}</td>
              <td>{student.feeDetails[0]?.dateOfTransaction}</td>
              <td>{student.feeDetails[0]?.amount}</td>
              <td>{student.feeDetails[0]?.modeOfPayment}</td>
              <td>{student.feeDetails[0]?.feePortal}</td>
              <td>
                {student.feeDetails[0]?.proofOfPayment && (
                  <a href={student.feeDetails[0]?.proofOfPayment} target="_blank" rel="noopener noreferrer">
                    View Proof
                  </a>
                )}
              </td>
              <td className="select-action">
                <select
                  value={student.remarks || ''}
                  onChange={(e) => handleFeeStatusUpdate(student.id, e.target.value)}
                >
                  <option value="">Select Action</option>
                  <option value="accept">Accept</option>
                  <option value="reject">Reject</option>
                </select>
                {student.remarks === 'reject' && (
                  <input
                    type="text"
                    value={student.reason || ''}
                    onChange={(e) => handleFeeStatusUpdate(student.id, 'reject', e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, student.id)}
                    placeholder="Reason for rejection"
                  />
                )}
              </td>
              <td>{student.remarks}</td>
              <td>
              {/* Download button for proof of payment */}
              {student.feeDetails[0]?.proofOfPayment && (
              <button
              onClick={() => downloadProofOfPayment(student.feeDetails[0]?.proofOfPayment, `${student.name}_ProofOfPayment`)}
              className="download-button" // Add CSS class to the button
              >
              <FontAwesomeIcon icon={faDownload} /> {/* Font Awesome download icon */}
              </button>
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeStatusModule;

