import React from 'react';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function Pdf () {

    const styles = StyleSheet.create({
        page: { backgroundColor: 'tomato' },
        section: { color: 'white', textAlign: 'center', margin: 30 }
    });
  
    return (
        <div className="pdf">
            <header className="App-header">
                {/* <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="600" />
                </Document> */}
            </header>
        </div>
    )
}

export default Pdf;