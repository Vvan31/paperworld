
import docESP from "/pdf/Manual_del_expositor_APW_2024.pdf";
import docENG from "/pdf/Exhibitor_Manual_APW_2024.pdf";
import "./scheduleExhibitor.css";
import PDFViewer from "./pdfViewer.jsx";

// eslint-disable-next-line react/prop-types
const Manual = ({ language }) => {
     
    return (
        <div className="imageSchedule">
            <PDFViewer pdfUrl={language === "esp" ? docESP : docENG}/>
              {/* <button onClick={handleDownload}><DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle'}} /> {scheduleExhibition.download}</button> */}
        </div>
    );
};

export default Manual;
