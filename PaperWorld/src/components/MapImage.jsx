import Map from "../assets/map.png";
import DownloadIcon from '@mui/icons-material/Download';
import "./scheduleExhibitor.css";
import data from "../data.json"

// eslint-disable-next-line react/prop-types
const MapImage = ({ language }) => {
    const { scheduleExhibition } = data[language]
     
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = Map;
        link.download = 'mapAPW.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="imageSchedule">
            <img className="imageScheduleComponent" src={Map} alt="Map" />
            <button onClick={handleDownload}><DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle'}} /> 
                {scheduleExhibition.download}
            </button>
        </div>
    );
};

export default MapImage;
