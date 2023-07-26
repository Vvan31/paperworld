import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import data from "../data.json";

import RegisterService from '../services/register';
// Success modal imports 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function AddressForm({ language }) {
    const { register } = data[language]; 
    // Success modal
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const handleSubmit = async (event) => {
        /* console.log('submit'); */
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user = {
            data:{
                slug: `visitor${Math.floor(Math.random() * (179900 - 6 + 1)) + 6}`,
                name: formData.get('firstName'),
                lastname: formData.get('lastName'),
                company: formData.get('company'),
                position: formData.get('position'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                country: formData.get('country'),
                state: formData.get('state'),
                city: formData.get('city'),
                postalcode: formData.get('postalCode'),
                address: formData.get('address')
            }
        };
        try {
         /*    console.log(user); // The user data sent to the server */
            const response = await RegisterService.registerUser(user);
            console.log(response.data); // Server response data
            handleClickOpen();
            /* console.log(user); // The user data sent to the server */
        } catch (error) {
            console.error('Error occurred during registration:', error.response);
        }
    };
    
    const registerVisitor = (user) => {
        let promise = RegisterService.registerUser(user);
        promise
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        };

  return (
    <React.Fragment>
         <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {register.success}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {register.successDialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {register.close}
          </Button>
        </DialogActions>
      </Dialog>
        <div className='registerForm'>
        <Typography variant="h10" gutterBottom>
            {register.required}
        </Typography>
        <Typography variant="h10" gutterBottom className='title'>
            {register.personal}
        </Typography>
        
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label={register.name}
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label={register.lastName}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="company"
                        name="company"
                        label={register.company}
                        fullWidth
                        autoComplete="organization"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="position"
                        name="position"
                        label={register.position}
                        fullWidth
                        autoComplete="organization-title"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        type="email"
                        label={register.email}
                        fullWidth
                        autoComplete="email"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="phone"
                    name="phone"
                    label={register.phone}
                    fullWidth
                    autoComplete="tel"
                    variant="standard"
                />
                </Grid>
            </Grid>
            <Typography variant="h4" gutterBottom className='title'>
            {register.addressInfo}
            </Typography>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label={register.country}
                fullWidth
                autoComplete="country"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="state"
                name="state"
                label={register.state}
                fullWidth
                autoComplete="region"
                variant="standard"
            />
            </Grid><Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label={register.city}
                fullWidth
                autoComplete="address-level2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="postalCode"
                name="postalCode"
                label={register.zip}
                fullWidth
                autoComplete="postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="address"
                name="address"
                label={register.address}
                fullWidth
                autoComplete="address-line1"
                variant="standard"
            />
            </Grid>
        
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="primary" name="privacy" value="yes" />}
                label={register.privacy}
                required
            />
            </Grid>
            <Button type='submit' variant="contained" color="primary" href="#contained-buttons" className='btn'>
                <input type="submit" value={register.register}></input>
            </Button>
        </Grid>
        </form>
        </div>
    </React.Fragment>
  );
}
