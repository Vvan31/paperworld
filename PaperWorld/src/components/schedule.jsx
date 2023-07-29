import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

import './schedule.css';
const Schedule = () => {
  const [checked, setChecked] = useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className='schedule'>
        <div className='paperContainer'>
            <div className='paper'>
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
                <Paper sx={{ m: 1 }} elevation={4}>
                    <div className='scheduleTitle'>
                    <Typography variant="h1" component="div">
                            14
                        </Typography>
                        <Typography variant="h3" component="div" className='month' sx={{ textTransform: 'capitalize' }}>
                            NOV
                        </Typography>
                    </div>
                    <div className='content'>
                        <Typography variant="h4" component="div" className="paper-content">
                            Technical conferences
                        </Typography>
                        <Typography variant="h6" component="div" className="paper-content">
                            8:30 - 12:30 hrs
                        </Typography>
                        <Typography variant="h4" component="div" className="paper-content">
                            Exposition
                        </Typography>
                        <Typography variant="h6" component="div" className="paper-content">
                            11:00 - 19:00 hrs
                        </Typography>
                    </div>
                </Paper>
                </Grow>
            </div>
            <div className='paper'>
                <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1500 } : {})}>
                    <Paper sx={{ m: 1 }} elevation={4}>
                        <div className='scheduleTitle'>
                            <Typography variant="h1" component="div">
                                15
                            </Typography>
                            <Typography variant="h3" component="div">
                                NOV
                            </Typography>
                        </div>
                        <div className='content'>
                        <Typography variant="h4" component="div" className="paper-content">
                            Technical conferences
                        </Typography>
                        <Typography variant="h6" component="div" className="paper-content">
                            8:30 - 12:30 hrs
                        </Typography>
                        <Typography variant="h4" component="div" className="paper-content">
                            Exposition
                        </Typography>
                        <Typography variant="h6" component="div" className="paper-content">
                            11:00 - 19:00 hrs
                        </Typography>
                    </div>
                    </Paper>
                </Grow>
            </div>
        </div>
     
    </div>
  );
};

export default Schedule;
