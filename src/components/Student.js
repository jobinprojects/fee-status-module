import React, { useState } from 'react';
import './Student.css';

const Student = ({ student, index }) => {
  const [status, setStatus] = useState(student.feeStatus);
  const [reason, setReason] = useState('');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'Rejected' && reason === '') {
      alert('Please provide a reason for rejection.');
      return;
    }
    student.feeStatus = status;
    if (status === 'Rejected') {
      student.rejectionReason = reason;
    }
    alert('Fee status updated successfully.');
  };

  return (
    <div className="student">
      <h3 className="student-name">Student {index}</h3>
      <p className="student-fee-status">Fee Status: {status}</p>
      <FeeDetails feeDetails={student.feeDetails} />
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Status:
          <select className="form-select" value={status} onChange={handleStatusChange}>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>
        {status === 'Rejected' && (
          <label className="form-label">
            Reason:
            <input className="form-input" type="text" value={reason} onChange={handleReasonChange} required />
          </label>
        )}
        <button className="form-submit-button" type="submit">Update Fee Status</button>
      </form>
    </div>
  );
};

export default Student;
