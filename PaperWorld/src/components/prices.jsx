
import docESP from "/pdf/Ofertas_Expositores_Americas_Paper_World.pdf";
import docENG from "/pdf/Offers_Exhibitors_Americas_Paper_World.pdf";
import "./scheduleExhibitor.css";
import PDFViewer from "./pdfViewer.jsx";

// eslint-disable-next-line react/prop-types
const Prices = ({ language }) => {
     
    return (
        <div className="imageSchedule">
            <PDFViewer pdfUrl={language === "esp" ? docESP : docENG}/>
              {/* <button onClick={handleDownload}><DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle'}} /> {scheduleExhibition.download}</button> */}
        </div>
    );
};

export default Prices;
