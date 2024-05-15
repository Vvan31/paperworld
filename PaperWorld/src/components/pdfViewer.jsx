import "./pdfViewer.css";

// eslint-disable-next-line react/prop-types
const PDFViewer = ({ pdfUrl }) => {
    return (
        <embed
        src={pdfUrl}
        type="application/pdf"
        frameBorder="0"
        height="100%"
        className="pdfViewer"
        width="100%"
    ></embed>
    );
};

export default PDFViewer;
