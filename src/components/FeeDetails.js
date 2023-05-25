import React from 'react';
import './FeeDetails.css';

const FeeDetails = ({ feeDetails }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>UTR/Transaction No./DD No.</th>
          <th>Date of Transaction</th>
          <th>Amount</th>
          <th>Mode of Payment</th>
          <th>Fee Portal</th>
          <th>Proof of Payment</th>
        </tr>
      </thead>
      <tbody>
        {feeDetails.map((detail, index) => (
          <tr key={index}>
            <td>{detail.transactionNo}</td>
            <td>{detail.dateOfTransaction}</td>
            <td>{detail.amount}</td>
            <td>{detail.modeOfPayment}</td>
            <td>{detail.feePortal}</td>
            <td>
              <a href={detail.proofOfPayment} target="_blank" rel="noopener noreferrer">
                View Proof
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeeDetails;
