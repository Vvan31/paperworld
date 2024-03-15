// import React, { useState } from 'react';
// import Paper from '@mui/material/Paper';
// import Grow from '@mui/material/Grow';
// import Typography from '@mui/material/Typography';
// import data from "../data.json";
import AnimatedBack from './animatedBack';

import './gradient.css';
import './schedule.css';
import CardFlip from './cardFlip';
// eslint-disable-next-line react/prop-types
const Schedule = ({language}) => {
//   const [checked, setChecked] = useState(false);
//   const { program } = data[language];

//   React.useEffect(() => {
//     setChecked(true);
//   }, []);

  return (
    <div className='schedule'>
        <div className='paperContainer'>
        <CardFlip language={language} dateNum={1} />
            {/* <div className='papers'>
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
                <Paper sx={{ m: 1 }} elevation={4}>
                    <div className='scheduleTitle'>
                    <Typography variant="h1" component="div">
                            31
                        </Typography>
                        <Typography variant="h3" component="div" className='month' sx={{ textTransform: 'capitalize' }}>
                            {program.date1}
                        </Typography>
                    </div>
                    <div className='scheduleContent'>
                        <Typography variant="h5" component="div" className="paperContent">
                        {program.technicalConferences}

                        </Typography>
                        <Typography variant="h6" component="div" className="paperContent">
                            8:30 - 12:30 hrs
                        </Typography>
                        <Typography variant="h5" component="div" className="paperContent">
                        {program.exposition}
                        </Typography>
                        <Typography variant="h6" component="div" className="paperContent">
                            11:00 - 19:00 hrs
                        </Typography>
                    </div>
                </Paper>
                </Grow>
            </div> */}
        <CardFlip language={language} dateNum={2} />

            {/* <div className='papers'>
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1500 } : {})}>
                    <Paper sx={{ m: 1 }} elevation={4}>
                        <div className='scheduleTitle'>
                            <Typography variant="h1" component="div">
                                1
                            </Typography>
                            <Typography variant="h3" component="div">
                            {program.date2}
                            </Typography>
                        </div>
                        <div className='scheduleContent'>
                        <Typography variant="h5" component="div" className="paperContent">
                        {program.technicalConferences}
                        </Typography>
                        <Typography variant="h6" component="div" className="paperContent">
                            8:30 - 12:30 hrs
                        </Typography>
                        <Typography variant="h5" component="div" className="paperContent">
                        {program.exposition}
                        </Typography>
                        <Typography variant="h6" component="div" className="paperContent">
                            11:00 - 19:00 hrs
                        </Typography>
                    </div>
                    </Paper>
                </Grow>
            </div> */}
            
        </div>
        <AnimatedBack />
    </div>
  );
};

export default Schedule;
