"use client";

import Head from "next/head";
import "../../styles/mexico.css";
import mexicoPhoto from "../../public/assets/mexico/palacio-min.jpg";
import mujer from "../../public/assets/mexico/woman-min.jpg";
import altar from "../../public/assets/mexico/altar-min.jpg";
import data from "../data.json";
import Attractions from "../components/attractions.js";
import { useLanguage } from '../../contexts/languageContext';

const Mexico = () => {
    const { language } = useLanguage();
    const { mexico } = data[language];

    return (
        <>
            <Head>
                <title>{mexico.title} - Explore Mexico</title>
                <meta name="description" content={mexico.subtitle} />
                <meta name="keywords" content="Mexico, Travel, Attractions, Tourism, Culture" />
                <meta property="og:title" content={mexico.title} />
                <meta property="og:description" content={mexico.subtitle} />
                <meta property="og:image" content="/assets/mexico/palacio-min.jpg" />
                <meta property="og:url" content="https://expo.apw.enterprises/mexico" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "TravelDestination",
                        name: mexico.title,
                        description: mexico.subtitle,
                        image: "/assets/mexico/palacio-min.jpg",
                        url: "https://expo.apw.enterprises.com/mexico"
                    })}
                </script>
            </Head>
            <div className="mexicoMain">
                <div 
                    className="parallax" 
                    style={{ backgroundImage: `url('/assets/mexico/palacio-min.jpg')` }}
                >
                    <div className="titulo-parallax">
                        <h1>{mexico.title}</h1>
                    </div>
                </div>
                <div className="content">
                    <h3 className="title-content">{mexico.subtitle}</h3>
                    <p>{mexico.p1}</p>
                    <div 
                        id="miniParallax" 
                        className="mini-parallax" 
                        style={{ backgroundImage: `url('/assets/mexico/woman-min.jpg')` }}
                    ></div>
                    <p>{mexico.p2}</p>
                    <p>{mexico.p3}</p>
                    <div 
                        id="miniParallax" 
                        className="mini-parallax" 
                        style={{ backgroundImage: `url('/assets/mexico/altar-min.jpg')` }}
                    ></div>
                    <p>{mexico.p4}</p>
                    <p>{mexico.p5}</p>
                </div>
                <Attractions language={language} />
            </div>
        </>
    );
};

export default Mexico;
