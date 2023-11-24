import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import data from "../data.json";
import MapApp from './mapapp';
import './exhibitor.css'
import RegisterService from '../services/register';
import AlertDialog from './privacyNotice';
import InfoTable from './infoTable'

// Success modal imports 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';

export default function ExhibitorForm({ language }) {
const { exhibitor } = data[language];
const [selection, setSelection] = React.useState(null);
// Success modal
const [open, setOpen] = React.useState(false);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
 //Modal 
 const [openModal, setOpenModal] = React.useState(false);

 const handlePrivacyNoticeClickOpen = () => {
     setOpenModal(true);
   };
 
   const handlePrivacyNoticeClose = () => {
     setOpenModal(false);
   };
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };


const handleSelection = (spot) => {
setSelection(spot);
};

const handleSubmit = async (event) => {
    event.preventDefault();
   /*  console.log('submit'); */
    const formData = new FormData(event.currentTarget);
    const user = {
        data: {
        slug: `exhibitor${Math.floor(Math.random() * (179900 - 6 + 1)) + 6}`,
        name: formData.get('firstName'),
        lastname: formData.get('lastName'),
        company: formData.get('companyNameExhibitor'),
        rfc: formData.get('rfc'),
        country: formData.get('country'),
        state: formData.get('state'),
        city: formData.get('city'),
        postalcode: formData.get('zip'),
        colony: formData.get('colonia'),
        streetName: formData.get('address'),
        streetNumber: formData.get('numberExt'),
        aptNumber: formData.get('numberInt'),
        email: formData.get('email'),
        countryExhibitor: formData.get('countryExhibitor'),
        stateExhibitor: formData.get('stateExhibitor'),
        cityExhibitor: formData.get('cityExhibitor'),
        postalcodeExhibitor: formData.get('zipExhibitor'),
        colonyExhibitor: formData.get('coloniaExhibitor'),
        streetNameExhibitor: formData.get('addressExhibitor'),
        streetNumberExhibitor: formData.get('numberExtExhibitor'),
        aptNumberExhibitor: formData.get('numberIntExhibitor'),
        web: formData.get('web'),
        phone: formData.get('phone'),
        spot: selection
        },
    };
    try {
      /*   console.log(user); 
        console.log('data:' + user); */

        const response = await RegisterService.registerExhibitor(user);
        handleClickOpen();
        console.log(response.data);
    } catch (error) {
        console.error('Error occurred during registration:', error.response);
    }
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
          {exhibitor.success}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {exhibitor.successDialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {exhibitor.close}
          </Button>
        </DialogActions>
      </Dialog>
        <form onSubmit={handleSubmit}>
            <div className='exhibitorForm'>
            <Typography variant="h10" gutterBottom>
                    {exhibitor.subtitle}
                </Typography>
                <Typography variant="h10" gutterBottom>
                    {exhibitor.required}
                </Typography>
                <Typography variant="h4" gutterBottom className='title'>
                    {exhibitor.billinginformation}
                </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField  id="organization" name="organization" label={exhibitor.companyName} fullWidth
                                autoComplete="organization" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField  id="rfc" name="rfc" label={exhibitor.rfc} fullWidth autoComplete="off"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField  id="country" name="country" label={exhibitor.country} fullWidth
                                autoComplete="country" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label={exhibitor.state} fullWidth autoComplete="region"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField  id="city" name="city" label={exhibitor.city} fullWidth
                                autoComplete="address-level2" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="zip" name="zip" label={exhibitor.zip} fullWidth autoComplete="postal-code"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="colonia" name="colonia" label={exhibitor.colonia} fullWidth autoComplete="off"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="address" name="address" label={exhibitor.address} fullWidth
                                autoComplete="address-line1" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="numberExt" name="numberExt" label={exhibitor.numberExt} fullWidth autoComplete="off"
                                variant="standard" type="number"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="numberInt" name="numberInt" label={exhibitor.numberInt} fullWidth autoComplete="off"
                                variant="standard" type="number"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="email" name="email" label={exhibitor.email} fullWidth autoComplete="email"
                                variant="standard" type="email"/>
                        </Grid>
                    </Grid>

                    {/* Data for the exhibitors directory */}
                    <Typography variant="h4" gutterBottom className='title'>
                        {exhibitor.directorio}
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="companyNameExhibitor" name="companyNameExhibitor"
                                label={exhibitor.companyNameExhibitor} fullWidth autoComplete="organization"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField required id="countryExhibitor" name="countryExhibitor" label={exhibitor.countryExhibitor}
                                fullWidth autoComplete="country" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField required id="stateExhibitor" name="stateExhibitor" label={exhibitor.stateExhibitor}
                                fullWidth autoComplete="region" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField  id="cityExhibitor" name="cityExhibitor" label={exhibitor.cityExhibitor}
                                fullWidth autoComplete="address-level2" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField  id="zipExhibitor" name="zipExhibitor" label={exhibitor.zipExhibitor} fullWidth
                                autoComplete="postal-code" variant="standard" />
                        </Grid>
                        <Grid item   xs={12} sm={3}>
                            <TextField id="coloniaExhibitor" name="coloniaExhibitor" label={exhibitor.coloniaExhibitor}
                                fullWidth autoComplete="off" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField id="addressExhibitor" name="addressExhibitor" label={exhibitor.addressExhibitor}
                                fullWidth autoComplete="address-line1" variant="standard" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField id="numberExtExhibitor" name="numberExtExhibitor" label={exhibitor.numberExtExhibitor}
                                fullWidth autoComplete="off" variant="standard" type="number" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField id="web" name="web" label={exhibitor.web} fullWidth autoComplete="url"
                                variant="standard" />
                        </Grid>
                        <Grid item  xs={12} sm={3}>
                            <TextField id="phone" name="phone" label={exhibitor.phone} fullWidth autoComplete="tel"
                                variant="standard" />
                        </Grid>
                    </Grid>

                    <Typography variant="h4" gutterBottom className='title'>
                        {exhibitor.paymentTerms}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='sub'>
                        {exhibitor.paymentInfo}
                    </Typography>
                  {/*   <div className='payment'>
                        <Typography variant="h10" gutterBottom>
                            {exhibitor.paymentSchedule.first}
                        </Typography>
                        <Typography variant="h10" gutterBottom>
                            {exhibitor.paymentSchedule.second}
                        </Typography>
                        <Typography variant="h10" gutterBottom>
                            {exhibitor.paymentSchedule.third}
                        </Typography>
                    </div> */}
                  {/*   <Typography variant="h10" gutterBottom className='sub'>
                        {exhibitor.paymentFailure}
                    </Typography> */}

                    {/* Place and package */}
                    <Typography variant="h4" gutterBottom className='title'>
                        {exhibitor.selectPackage}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='sub'>
                        {exhibitor.packageInfo}
                    </Typography>
                   {/*  <InfoTable language={language} /> */}
                   <Divider/>

                    <div className='stands'>
                        <div className='stand'>
                            <div className='standSquare white' />
                            <Typography variant="h10" gutterBottom className='standName'>
                                {exhibitor.whiteStand}
                            </Typography>
                            <Typography variant="h10" gutterBottom className='standPrice'>
                                {exhibitor.whiteStandSize}
                            </Typography>
                            <Typography variant="h10" gutterBottom className='standSize'>
                                {exhibitor.whiteStandTerms}
                            </Typography>
                        </div>
                        <Divider/>
                        <div className='stand'>
                            <div className='standSquare blue' />
                            <Typography variant="h10" gutterBottom className='standName'>
                                {exhibitor.blueStand}
                            </Typography>
                            <Typography variant="h10" gutterBottom className='standPrice'>
                                {exhibitor.blueStandSize}
                            </Typography>
                            <Typography variant="h10" gutterBottom className='standSize'>
                                {exhibitor.blueStandTerms}
                            </Typography>
                        </div>
                        <Divider/>

                    </div>

                    <Typography variant="h10" gutterBottom className='sub'>
                        {exhibitor.standInclusions}
                    </Typography>
            </div>
            <div className='map'>
            {/*     <div className='mapTitle'>
                    <Typography variant="h10" gutterBottom className='tag'>
                        {exhibitor.occupied}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='tag'>
                        {exhibitor.available}
                    </Typography>
                </div> */}
                <div className='mapContainer'>
                    <MapApp setSelection={handleSelection} />
                </div>
            </div>
            <div className='exhibitorForm'>
            <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox color="primary" name="privacy" value="yes" />}
                    label={
                        <a href="#" onClick={handlePrivacyNoticeClickOpen}>
                        {exhibitor.privacy}
                        </a>
                        }
                    required
                    />
                </Grid>
                <Button type='submit' variant="contained" color="primary" href="#contained-buttons" className='btn'>
                    <input type='submit'value={exhibitor.register} className='submit'></input>
                </Button>
            </div>
            <AlertDialog language={language} open={openModal} handleClose={handlePrivacyNoticeClose} />

        </form>
      
    </React.Fragment>

  );
}