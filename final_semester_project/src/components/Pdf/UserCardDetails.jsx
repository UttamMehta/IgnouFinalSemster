import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import PdfTemplate from './PdfTemplate';

const UserCardDetails = () => {
  const [user,setUser]=useState({email:"Uttam@gmail.com",name:"Uttam"})
  const handleDownloadPDF = () => {
    // Create a PDF blob from the PDF template component
    const pdfBlob = PdfTemplate().toBlob();

    // // Save the blob as a PDF file using file-saver
    // saveAs(pdfBlob, 'user_details.pdf');
  };

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default UserCardDetails;
