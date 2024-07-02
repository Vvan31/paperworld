
"use client";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const PDFViewer = ({ pdfUrl }) => {
    const [fileUrl, setFileUrl] = useState('');

    useEffect(() => {
        import(pdfUrl).then((module) => {
            setFileUrl(module.default);
        });
    }, [pdfUrl]);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '750px' }}>
            {fileUrl && (
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            )}
        </div>
    );
};

export default PDFViewer;
