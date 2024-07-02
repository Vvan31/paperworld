'use client';

import React, { useEffect, useState } from 'react';

import '../../styles/contact.css'
import copy from "../../public/assets/copy.svg"
import data from '../data.json';
import { useLanguage } from '../../contexts/languageContext';
import Head from "next/head";
import Image from 'next/image';
const Contact = () => {
    const { language } = useLanguage();
    const { contact } = data[language]; // Access the corresponding language data
    
    const [checked, setChecked] = useState(false);
        React.useEffect(() => {
        setChecked(true);setEmailData
    }, []);
   
    useEffect(() => {
        setEmailData([
            {
                description:contact.technicalSupport,
                email: 'j.urtuzuastegui@apw.enterprises'
            },
            {
                description:contact.customerSupport,
                email: 'info@apw.enterprises'
            },
            {
                description:contact.paymentSupport,
                email: 'a.estrada@apw.enterprises'
            }
        ]);
      }, [language]);
    const [emailData,setEmailData] = useState([
        {
            description:contact.technicalSupport,
            email: 'j.urtuzuastegui@apw.enterprises'
        },
        {
            description:contact.customerSupport,
            email: 'info@apw.enterprises'
        },
        {
            description:contact.paymentSupport,
            email: 'a.estrada@apw.enterprises'
        }
    ]);


    const handleCopyClick = (email) => {
        navigator.clipboard.writeText(email);
        alert(`Copied the text: ${email}`);
    }

    return (
        <>
         <Head>
                <title>{language === "esp" ? "Contacta a la Exposición - APW" : "Exhibition contact - APW"}</title>
                <meta name="description" content={language === "esp" ? "Contacta a la exposición de APW." : "Contact the APW exhibition."} />
                <meta name="keywords" content={language === "esp" ? "APW, contacto a la exposición, contacto" : "APW, exhibition contact, contact"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <div className="contactContent">
            <div className="contactInfo">
                {emailData.map((data, index) => (
                    <div key={index} className="emails">
                        <h4 className="mapContentParagraph">
                            {data.description}
                        </h4>
                        <div className="emailContainer">
                            <h4 className="mapContentInformation">
                                {data.email}
                            </h4>
                            <button
                            title="Copy"
                            className="copybutton"
                             onClick={() => handleCopyClick(data.email)}>
                                <Image src={copy} alt="Copy text" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="googlemap">
                <h4 className="mapContentTitle">
                    Expo Santa Fe
                </h4>
                <iframe className='frame'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15056.571842263153!2d-99.27200525382263!3d19.36296157084534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201b3c3c033ab%3A0xf834c62bb460dd49!2sExpo%20Santa%20Fe%20Mexico!5e0!3m2!1sen!2sca!4v1691780211086!5m2!1sen!2sca"
                    width="500" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        </>
        )

    }

export default Contact;
