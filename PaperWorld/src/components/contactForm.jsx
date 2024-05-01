import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
import data from "../data.json";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import RegisterService from '../services/register';

import AlertDialog from './privacyNotice';

export default function AddressForm({ language }) {
    const { contactUs } = data[language]; 
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [errorOpen, errorSetOpen] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const handleClose = () => {
        setOpen(false);
        window.location.reload();
      };

      const errorHandleClose = () => {
        errorSetOpen(false);
        window.location.reload();
      };
    
    const handleSubmit = async (event) => {
        console.log(contactUs)
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user = {
            data:{
                slug: `rq${Math.floor(Math.random() * (179900 - 6 + 1)) + 6}`,
                name: formData.get('firstName') + ' ' + formData.get('lastName'),
                company: formData.get('company'),
                exhibitorEmail: formData.get('email'),
                message: formData.get('message'),
                subject: "Informes para exponer en APW"
            }
        };
        try {
            const response = await RegisterService.sendEmailExhibitorContact(user);
            console.log(response.data);
            setOpen(true);
        } catch (error) {
            console.error('Error occurred while sending email:', error);
            errorSetOpen(true);
        }
    };
    
    return (
        <React.Fragment>
             <Dialog
        fullScreen={fullScreen}
        open={errorOpen}
        onClose={errorHandleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {contactUs.error.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {contactUs.error.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={errorHandleClose}>
          {contactUs.error.close}
          </Button>
        </DialogActions>
        </Dialog>

         <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {contactUs.success.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {contactUs.success.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {contactUs.success.close}
          </Button>
        </DialogActions>
        </Dialog>
            <div className='contactForm'>
                <Typography variant="h4" gutterBottom className='title'>
                    {contactUs.title}
                </Typography>
                
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label={contactUs.nameLabel}
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label={contactUs.LastNameLabel}
                                fullWidth
                                autoComplete="family-name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="company"
                                name="company"
                                label={contactUs.company}
                                fullWidth
                                autoComplete="organization"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                type="email"
                                label={contactUs.email}
                                fullWidth
                                autoComplete="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="message"
                                name="message"
                                label={contactUs.message}
                                fullWidth
                                autoComplete="off"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" color="primary" className='btn'>
                                {contactUs.submitButton}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <AlertDialog language={language} />
            </div>
        </React.Fragment>
    );
}
