'use client';

import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import '../../styles/schedule.css';
import data from "../data.json";
import { useLanguage } from '../../contexts/languageContext';
// eslint-disable-next-line react/prop-types
const CardFlip = ({ dateNum}) => {
const { language } = useLanguage();
const ref = useRef();
const { program } = data[language];

  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref}
      className="papers"
      style={{ width: "300px", height: "400px", margin: "15px", zIndex: "10", borderRadius: "10px" }}
    >
      <FrontSide style={{padding: "0px"}}>
        <Paper sx={{ m: 1 }} elevation={4}>
        </Paper> 
        <div className='scheduleTitle'>
            <Typography variant="h1" component="div">
                {(dateNum == 1) ? program.number1 : program.number2}
            </Typography>
            <Typography variant="h3" component="div" className='month' sx={{ textTransform: 'capitalize' }}>
            {(dateNum == 1) ? program.date1 : program.date2}

            </Typography>
        </div>
        
      </FrontSide>
      <BackSide style={{padding: "0px", backgroundColor: "#f2f2f2"}} >
        
        <div className='scheduleContent'>
        <Typography variant="h5" component="div" className="paperContent">
        {program.technicalConferences}

        </Typography>
        <Typography variant="h6" component="div" className="paperContent">
            8:30 - 18:30 hrs
        </Typography>
        <Typography variant="h5" component="div" className="paperContent">
        {program.exposition}
        </Typography>
        <Typography variant="h6" component="div" className="paperContent">
            11:00 - 19:00 hrs
        </Typography>
        {/* <a
        href={programa}
        download
        >
            Descarga programa
        </a> */}
        </div>
      </BackSide>
    </Flippy>
  );
};

export default CardFlip;
