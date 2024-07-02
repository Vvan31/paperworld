'use client';
import map from "../../public/assets/map.png";
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
        link.href =  map;
        link.download = language === "esp" ? 'mapaAPW.jpeg' : 'mapAPW.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Head>
                <title>{language === "esp" ? "Mapa de la Exposición - APW" : "Exhibition Map - APW"}</title>
                <meta name="description" content={language === "esp" ? "Descarga el mapa de la exposición de APW." : "Download the APW exhibition map."} />
                <meta name="keywords" content={language === "esp" ? "APW, mapa de la exposición, descargar" : "APW, exhibition map, download"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="imageSchedule">
                <Image className="imageScheduleComponent" src={ map } alt="Map" />
                <button onClick={handleDownload}>
                    <DownloadIcon fontSize="medium" style={{ verticalAlign: 'middle' }} /> 
                    {scheduleExhibition.download}
                </button>
            </div>
        </>
    );
};

export default ScheduleExhibitor;
