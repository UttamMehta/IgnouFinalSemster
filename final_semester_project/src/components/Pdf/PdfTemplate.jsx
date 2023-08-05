
import React from 'react';
import { Page, Text, Document } from '@react-pdf/renderer';

const PdfTemplate = ({ user }) => {
  return (
    <Document>
      <Page>
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        {/* Add more user details as needed */}
      </Page>
    </Document>
  );
};

export default PdfTemplate;

