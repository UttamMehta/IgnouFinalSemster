
import React from 'react';
import { Page, Text, Document ,PDFViewer} from '@react-pdf/renderer';

const PdfTemplate = (props) => {
    console.log(props);
  return (
    <PDFViewer>
    <Document>
      <Page>
        <Text>Name: abcd</Text>
        {/* <Text>Email: {user.email}</Text> */}
        {/* Add more user details as needed */}
      </Page>
    </Document>
    </PDFViewer>
  );
};

export default PdfTemplate;

