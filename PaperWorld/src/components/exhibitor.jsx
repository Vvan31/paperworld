import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import data from "../data.json";
import MapApp from './mapapp';
import "./exhibitor.css";

import RegisterService from '../services/register';

export default function ExhibitorForm({ language }) {
const { exhibitor } = data[language];
const [selection, setSelection] = React.useState(null);

const handleSelection = (spot) => {
setSelection(spot);
};

const handleSubmit = async (event) => {
console.log('submit');
event.preventDefault();
const formData = new FormData(event.currentTarget);
const user = {
data: {
slug: `exhibitor${Math.floor(Math.random() * (179900 - 6 + 1)) + 6}`,
name: formData.get('firstName'),
lastname: formData.get('lastName'),
company: formData.get('companyName'),
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
},
};

try {
console.log(user); // The user data sent to the server
const response = await RegisterService.registerExhibitor(user);
console.log(response.data); // Server response data
} catch (error) {
console.error('Error occurred during registration:', error.response);
}
};


return (
<form onSubmit={handleSubmit}>

<React.Fragment>
    <div className='registerForm'>
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
                <Grid item xs={12} sm={3}>
                    <TextField required id="companyName" name="companyName" label={exhibitor.companyName} fullWidth
                        autoComplete="organization" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField required id="rfc" name="rfc" label={exhibitor.rfc} fullWidth autoComplete="off"
                        variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField required id="country" name="country" label={exhibitor.country} fullWidth
                        autoComplete="country" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="state" name="state" label={exhibitor.state} fullWidth autoComplete="region"
                        variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField required id="city" name="city" label={exhibitor.city} fullWidth
                        autoComplete="address-level2" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="zip" name="zip" label={exhibitor.zip} fullWidth autoComplete="postal-code"
                        variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="colonia" name="colonia" label={exhibitor.colonia} fullWidth autoComplete="off"
                        variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="address" name="address" label={exhibitor.address} fullWidth
                        autoComplete="address-line1" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="numberExt" name="numberExt" label={exhibitor.numberExt} fullWidth autoComplete="off"
                        variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="numberInt" name="numberInt" label={exhibitor.numberInt} fullWidth autoComplete="off"
                        variant="standard" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="email" name="email" label={exhibitor.email} fullWidth autoComplete="email"
                        variant="standard" />
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
                    <TextField required id="cityExhibitor" name="cityExhibitor" label={exhibitor.cityExhibitor}
                        fullWidth autoComplete="address-level2" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField required id="zipExhibitor" name="zipExhibitor" label={exhibitor.zipExhibitor} fullWidth
                        autoComplete="postal-code" variant="standard" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="coloniaExhibitor" name="coloniaExhibitor" label={exhibitor.coloniaExhibitor}
                        fullWidth autoComplete="off" variant="standard" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="addressExhibitor" name="addressExhibitor" label={exhibitor.addressExhibitor}
                        fullWidth autoComplete="address-line1" variant="standard" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="numberExtExhibitor" name="numberExtExhibitor" label={exhibitor.numberExtExhibitor}
                        fullWidth autoComplete="off" variant="standard" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="web" name="web" label={exhibitor.web} fullWidth autoComplete="url"
                        variant="standard" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="phone" name="phone" label={exhibitor.phone} fullWidth autoComplete="tel"
                        variant="standard" />
                </Grid>
            </Grid>

            {/* Required contacts */}
            {/* Add required contacts fields here */}


            <Typography variant="h4" gutterBottom className='title'>
                {exhibitor.paymentTerms}
            </Typography>
            <Typography variant="h10" gutterBottom className='sub'>
                {exhibitor.paymentInfo}
            </Typography>
            <div className='payment'>
                <Typography variant="h10" gutterBottom>
                    {exhibitor.paymentSchedule.second}
                </Typography>
                <Typography variant="h10" gutterBottom>
                    {exhibitor.paymentSchedule.second}
                </Typography>
                <Typography variant="h10" gutterBottom>
                    {exhibitor.paymentSchedule.third}
                </Typography>
            </div>
            <Typography variant="h10" gutterBottom className='sub'>
                {exhibitor.paymentFailure}
            </Typography>

            {/* Place and package */}
            <Typography variant="h4" gutterBottom className='title'>
                {exhibitor.selectPackage}
            </Typography>
            <Typography variant="h10" gutterBottom className='sub'>
                {exhibitor.packageInfo}
            </Typography>
            <div className='stands'>
                <div className='stand'>
                    <div className='standSquare white' />
                    <Typography variant="h10" gutterBottom className='standName'>
                        {exhibitor.whiteStand}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standPrice'>
                        {exhibitor.whiteStandPrice}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standSize'>
                        {exhibitor.whiteStandSize}
                    </Typography>
                </div>
                <div className='stand'>
                    <div className='standSquare blue' />
                    <Typography variant="h10" gutterBottom className='standName'>
                        {exhibitor.blueStand}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standPrice'>
                        {exhibitor.blueStandPrice}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standSize'>
                        {exhibitor.blueStandSize}
                    </Typography>
                </div>
                <div className='stand'>
                    <div className='standSquare pink' />
                    <Typography variant="h10" gutterBottom className='standName'>
                        {exhibitor.pinkStand}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standPrice'>
                        {exhibitor.pinkStandPrice}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standSize'>
                        {exhibitor.pinkStandSize}
                    </Typography>
                </div>
                <div className='stand'>
                    <div className='standSquare green' />
                    <Typography variant="h10" gutterBottom className='standName'>
                        {exhibitor.greenStand}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standPrice'>
                        {exhibitor.greenStandPrice}
                    </Typography>
                    <Typography variant="h10" gutterBottom className='standSize'>


                        {exhibitor.greenStandSize}
                    </Typography>
                </div>

            </div>

            <Typography variant="h10" gutterBottom className='sub'>
                {exhibitor.standInclusions}
            </Typography>
    </div>

    {/* Map */}
    <div className='map'>
        <div className='mapTitle'>
            <Typography variant="h10" gutterBottom className='tag'>
                {exhibitor.occupied}
            </Typography>
            <Typography variant="h10" gutterBottom className='tag'>
                {exhibitor.available}
            </Typography>
        </div>
        <div className='mapContainer'>
            <MapApp setSelection={handleSelection} />
        </div>
    </div>

    <Grid item xs={12} sm={6}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" name="privacy" value="yes" />}
              label={exhibitor.privacy}
            />
          </Grid>
          <Button type='submit' variant="contained" color="primary" href="#contained-buttons" className='btn'>
            <input type='submit'value={exhibitor.register}></input>
          </Button>
        </Grid>
    </React.Fragment>
    </form>

  );
}