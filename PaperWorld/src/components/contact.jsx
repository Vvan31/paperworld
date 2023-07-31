import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import './contact.css'
const Contact = () => {
    const [checked, setChecked] = useState(false);
    React.useEffect(() => {
      setChecked(true);
    }, []);
    return (
        <div className="contactContainer">
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
                    <Paper sx={{ m: 1, height: 700, width:700 }} className='paper' elevation={4}>
                        <div className='contactMain'>
                            <div className="map">
                                <Typography variant="h3" component="div" className="mapContentTitle">
                                Where is the event?
                                </Typography>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.7284177996194!2d-123.13345232398618!3d49.30048757139553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486718d7aca6ca7%3A0x5f251627980ee358!2sVancouver%20Aquarium!5e0!3m2!1sen!2sca!4v1690758297130!5m2!1sen!2sca"
                                    width="500" height="450" style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div className="information">
                                <h4 className="mapContentInformation">
                                    Contact us by Email
                                </h4>
                                <h4 className="paper-content">
                                    awp@gmail.com
                                </h4>
                                <h4 className="mapContentInformation">
                                    Phone call or whats app
                                </h4>
                                <h4 className="paper-content">
                                    52 55 23776652
                                </h4>
                            </div>
                        </div>
                    </Paper>
                </Grow>
        </div>
        )

}
export default Contact;