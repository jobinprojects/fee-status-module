import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FeeStatusModule from './components/FeeStatusModule';

function App() {
  const officer = {
    name: 'Jobin Jolly',
    email: 'jobinjolly@gmail.com',
  };

  const students = [
    {
      id: 1,
      name: 'Preeti Rai',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR12345',
          dateOfTransaction: '2023-05-01',
          amount: 1000,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 1',
          proofOfPayment: 'http://www.bvicam.in/printpdf/178',
        },
      ],
    },
    {
      id: 2,
      name: 'Deepak Kumar Singh',
      feeStatus: 'Unpaid',
      feeDetails: [],
    },
    {
      id: 3,
      name: 'Aanchal Koundal',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR67890',
          dateOfTransaction: '2023-05-02',
          amount: 1000,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 2',
          proofOfPayment: 'https://example.com/proof/Aanchal.pdf',
        },
      ],
    },
    {
      id: 4,
      name: 'Ashish Kumar Mallick',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR24680',
          dateOfTransaction: '2023-05-03',
          amount: 1500,
          modeOfPayment: 'Cash',
          feePortal: 'Fee Portal 3',
          proofOfPayment: 'https://example.com/proof/john.pdf',
        },
      ],
    },
    // Add more students here...
    {
      id: 5,
      name: 'Bibhu',
      feeStatus: 'Unpaid',
      feeDetails: [],
    },
    {
      id: 6,
      name: 'Amandeep Singh',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR13579',
          dateOfTransaction: '2023-05-04',
          amount: 1200,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 4',
          proofOfPayment: 'https://example.com/proof/david.pdf',
        },
      ],
    },
    {
      id: 7,
      name: 'Sourav Rathore',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR97531',
          dateOfTransaction: '2023-05-05',
          amount: 900,
          modeOfPayment: 'Card',
          feePortal: 'Fee Portal 5',
          proofOfPayment: 'https://example.com/proof/emily.pdf',
        },
      ],
    },
    {
      id: 8,
      name: 'Srishti Jain',
      feeStatus: 'Unpaid',
      feeDetails: [],
    },
    {
      id: 9,
      name: 'Kirti Sharma',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR75391',
          dateOfTransaction: '2023-05-06',
          amount: 1100,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 6',
          proofOfPayment: 'https://example.com/proof/olivia.pdf',
        },
      ],
    },
    {
      id: 10,
      name: 'Naman Bhandari',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR31459',
          dateOfTransaction: '2023-05-07',
          amount: 130,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 6',
          proofOfPayment: 'https://example.com/proof/olivia.pdf',
        },
      ],
    },
    {
      id: 11,
      name: 'Sankalp',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR24680',
          dateOfTransaction: '2023-05-08',
          amount: 1600,
          modeOfPayment: 'Cash',
          feePortal: 'Fee Portal 7',
          proofOfPayment: 'https://example.com/proof/sophia.pdf',
        },
      ],
    },
    {
      id: 12,
      name: 'Shivashish Kumar',
      feeStatus: 'Unpaid',
      feeDetails: [],
    },
    {
      id: 13,
      name: 'Mohit Aneja',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR13579',
          dateOfTransaction: '2023-05-09',
          amount: 1200,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 8',
          proofOfPayment: 'https://example.com/proof/isabella.pdf',
        },
      ],
    },
    {
      id: 14,
      name: 'Manika',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR97531',
          dateOfTransaction: '2023-05-10',
          amount: 900,
          modeOfPayment: 'Card',
          feePortal: 'Fee Portal 9',
          proofOfPayment: 'https://example.com/proof/matthew.pdf',
        },
      ],
    },
    {
      id: 15,
      name: 'Aarya Khurana',
      feeStatus: 'Unpaid',
      feeDetails: [],
    },
    {
      id: 16,
      name: 'M. Abhinav Raj',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR75391',
          dateOfTransaction: '2023-05-11',
          amount: 1100,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 10',
          proofOfPayment: 'https://example.com/proof/james.pdf',
        },
      ],
    },
    {
      id: 17,
      name: 'Satyam Rai',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR31459',
          dateOfTransaction: '2023-05-12',
          amount: 1300,
          modeOfPayment: 'Cash',
          feePortal: 'Fee Portal 11',
          proofOfPayment: 'https://example.com/proof/benjamin.pdf',
        },
      ],
    },
    {
      id: 18,
      name: 'Mansi Aggarwal',
      feeStatus: 'Paid',
      feeDetails: [
        {
          transactionNo: 'UTR78965',
          dateOfTransaction: '2023-05-13',
          amount: 1000,
          modeOfPayment: 'Online',
          feePortal: 'Fee Portal 12',
          proofOfPayment: 'https://example.com/proof/ava.pdf',
        },
      ],
    },
    {
      id: 19,
      name: 'Deepak',
      feeStatus: 'Unpaid',
      feeDetails: [],
    },
  


  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredStudents = students.filter((student) => {
    const { name, feeStatus, feeDetails } = student;
  
    if (feeDetails && feeDetails.length > 0) {
      const {
        transactionNo,
        dateOfTransaction,
        amount,
        modeOfPayment,
      } = feeDetails[0];
  
      return (
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feeStatus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transactionNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dateOfTransaction.toLowerCase().includes(searchQuery.toLowerCase()) ||
        amount.toString().includes(searchQuery.toLowerCase()) ||
        modeOfPayment.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feeStatus.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  

  const handleSignOut = () => {
    console.log('Signing out...');
  };

  return (
    <div className="App">
      <Navbar title="BVICAM" onSignOut={handleSignOut} onSearch={handleSearch} />
      <FeeStatusModule officer={officer} students={filteredStudents} />
    </div>
  );
}

export default App;