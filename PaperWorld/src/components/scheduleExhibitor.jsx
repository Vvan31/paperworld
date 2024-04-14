import React from 'react';
import scheduleEx from "../assets/scheduleEx.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import "./scheduleExhibitor.css";
import data from "../data.json"

const ScheduleExhibitor = ({ language }) => {
    const { scheduleExhibition } = data[language]
     
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = scheduleEx;
        link.download = 'scheduleEx.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="imageSchedule">
            <img className="imageScheduleComponent" src={scheduleEx} alt="Schedule Example" />
            <button onClick={handleDownload}><DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle'}} /> {scheduleExhibition.download}</button>
        </div>
    );
};

export default ScheduleExhibitor;
