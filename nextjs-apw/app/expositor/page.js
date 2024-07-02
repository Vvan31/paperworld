'use client';
import IndustryAreas from '../components/industryAreas';
import ContactFrom from '../components/contactForm.js';
import "../../styles/expositor.css";
import data from "../data.json";
import { useLanguage } from '../../contexts/languageContext';
import Image from 'next/image';
import path from 'path';
import Head from "next/head";

const PorqueExponer = () => {
    const { language, handleLangsuageChange } = useLanguage();
    let { whyExhibitor } = data[language];

    const papelUrl = path.join("/assets/close-up-of-paper.jpg");

    return (
        <>
         <Head>
                <title>{language === "esp" ? "Exposición - APW" : "Exhibition - APW"}</title>
                <meta name="description" content={language === "esp" ? "Conoce a la exposición de APW." : "Know the APW exhibition."} />
                <meta name="keywords" content={language === "esp" ? "APW,exposición, ventajas" : "APW, exhibition, features"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <div className='mainExpositor'>
            <div className="parallax" style={{ backgroundImage: `url(${papelUrl})` }}>
                <div className="titulo-parallax">
                    <h1>{whyExhibitor.title}</h1>
                </div>
            </div>
            <div className="contentExpositor">
                <p className='fistText'>
                    {whyExhibitor.p1}
                </p>
                <Image className='image' src="/assets/group.jpg" alt="group of people" width={500} height={300} />

                <div className='contenidoExponer'>
                    <h3>{whyExhibitor.titleContacts}</h3>
                    <p>{whyExhibitor.contactsContent}</p>
                    <h3>{whyExhibitor.titleProducts}</h3>
                    <p>{whyExhibitor.productsContent}</p>
                    <h3>{whyExhibitor.titleTechnology}</h3>
                    <p>{whyExhibitor.technologyContent}</p>
                    <h3>{whyExhibitor.titleConferences}</h3>
                    <p>{whyExhibitor.conferencesContent}</p>
                    <h3>{whyExhibitor.titleVisibility}</h3>
                    <p>{whyExhibitor.visibilityContent}</p>
                </div>
                <p>{whyExhibitor.conclution}</p>
            </div>
            <div className='industry'>
                <IndustryAreas language={language} />
            </div>
            <ContactFrom language={language} />
        </div>
        </>
    );
}

export default PorqueExponer;
