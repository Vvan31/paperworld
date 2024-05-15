import scheduleExESP from "../assets/scheduleEx.jpeg";
import scheduleExENG from "../assets/schedule.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import "./scheduleExhibitor.css";
import data from "../data.json"

// eslint-disable-next-line react/prop-types
const ScheduleExhibitor = ({ language }) => {
    const { scheduleExhibition } = data[language]
     
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = language === "esp" ? scheduleExESP : scheduleExENG;
        link.download =  language === "esp" ? 'programaAPW.jpeg' : 'scheduleAPW.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="imageSchedule">
            <img className="imageScheduleComponent" src={language === "esp" ? scheduleExESP : scheduleExENG} alt="Schedule Example" />
            <button onClick={handleDownload}><DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle'}} /> {scheduleExhibition.download}</button>
        </div>
    );
};

export default ScheduleExhibitor;
