import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import './contact.css'
import copy from "../assets/copy.svg"
const Contact = () => {

    const [checked, setChecked] = useState(false);
        React.useEffect(() => {
        setChecked(true);
    }, []);
   

    const [emailData] = useState([
        {
            description: 'Technical support',
            email: 'a.estrada@apw.enterprises'
        },
        {
            description: 'Customer support',
            email: 'info@apw.enterprises'
        },
        {
            description: 'Payment Support',
            email: 'alberto.escotera@apw.enterprises'
        }
    ]);

    const handleCopyClick = (email) => {
        navigator.clipboard.writeText(email);
        alert(`Copied the text: ${email}`);
    }

    return (
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
                                <img src={copy} alt="Copy text" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="map">
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
     
        )

    }

export default Contact;