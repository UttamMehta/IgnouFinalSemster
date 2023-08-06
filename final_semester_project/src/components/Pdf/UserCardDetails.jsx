import React, { useState } from 'react';
import { saveAs } from 'file-saver';
// import PdfTemplate from './PdfTemplate';
import jsPDF from "jspdf"

const UserCardDetails = () => {
  const [user,setUser]=useState({email:"Uttam@gmail.com",name:"Uttam"})
  // const handleDownloadPDF = () => {
  //   // Create a PDF blob from the PDF template component
  //   const pdfBlob = PdfTemplate().blob();

  //   // // Save the blob as a PDF file using file-saver
  //   // saveAs(pdfBlob, 'user_details.pdf');
  // };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const userDetails = {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      address: "123 Main St, City",
    };
    pdf.text(20, 20, "User Details Card");
    pdf.text(20, 30, `Name: ${userDetails.name}`);
    pdf.text(20, 40, `Email: ${userDetails.email}`);
    pdf.text(20, 50, `Age: ${userDetails.age}`);
    pdf.text(20, 60, `Address: ${userDetails.address}`);
    pdf.save("Id_card.pdf");
  };
  
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
      <button onClick={downloadPDF}>Download as PDF</button>
     
    </div>
  );
};

export default UserCardDetails;
