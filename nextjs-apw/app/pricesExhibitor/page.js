// pages/pricesExhibitor.js
'use client';

import { useState } from 'react';
import "../../styles/scheduleExhibitor.css";
import { useLanguage } from '../../contexts/languageContext';
import Head from "next/head";

const PricesExhibitor = () => {
    const { language } = useLanguage();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <>
            <Head>
                <title>{language === "esp" ? "Precios de Exposición - APW" : "Exhibition Prices - APW"}</title>
                <meta name="description" content={language === "esp" ? "Precios de exposición de APW." : "APW exhibition prices."} />
                <meta name="keywords" content={language === "esp" ? "APW, precios de exposición, descargar" : "APW, exhibition prices, download"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="imageSchedule">
                <iframe
                    className="pdf"
                    src={language === "esp" ? "/assets/pdf/Ofertas_Expositores_Americas_Paper_World.pdf" : "/assets/pdf/Offers_Exhibitors_Americas_Paper_World.pdf"}
                />
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </>
    );
};

export default PricesExhibitor;
