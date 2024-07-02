'use client';
import scheduleExESP from "../../public/assets/scheduleEx.jpeg";
import scheduleExENG from "../../public/assets/schedule.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import "../../styles/scheduleExhibitor.css";
import data from "../data.json";
import { useLanguage } from '../../contexts/languageContext';
import Image from "next/image";
import Head from "next/head";

const ScheduleExhibitor = () => {
    const { language } = useLanguage();
    const { scheduleExhibition } = data[language];
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = language === "esp" ? scheduleExESP : scheduleExENG;
        link.download = language === "esp" ? 'programaAPW.jpeg' : 'scheduleAPW.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Head>
                <title>{language === "esp" ? "Programa de Exposición - APW" : "Exhibition Schedule - APW"}</title>
                <meta name="description" content={language === "esp" ? "Descarga el programa de exposición de APW." : "Download the APW exhibition schedule."} />
                <meta name="keywords" content={language === "esp" ? "APW, programa de exposición, descargar" : "APW, exhibition schedule, download"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="imageSchedule">
                <Image className="imageScheduleComponent" src={language === "esp" ? scheduleExESP : scheduleExENG} alt="Schedule" />
                <button onClick={handleDownload}>
                    <DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle' }} /> 
                    {scheduleExhibition.download}
                </button>
            </div>
        </>
    );
};

export default ScheduleExhibitor;
