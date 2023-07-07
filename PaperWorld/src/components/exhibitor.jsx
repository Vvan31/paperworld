import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import data from "../data.json";

import "./exhibitor.css";

export default function ExhibitorForm({ language }) {
    const { exhibitor } = data[language]; 

  return (
    <React.Fragment>
        <div className='exhibitorForm'>
        <Typography variant="h10" gutterBottom>
            {exhibitor.subtitle}
        </Typography>
        <Typography variant="h10" gutterBottom >
            {exhibitor.required}
        </Typography>
        <Typography variant="h4" gutterBottom className='title'>
            {exhibitor.billinginformation}
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label={exhibitor.companyName}
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label={exhibitor.rfc}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label={exhibitor.country}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    id="lastName"
                    name="lastName"
                    label={exhibitor.state}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label={exhibitor.city}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                id="phone"
                name="phone"
                label={exhibitor.zip}
                fullWidth
                autoComplete="00000000"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                id="phone"
                name="phone"
                label={exhibitor.colonia}
                fullWidth
                autoComplete="00000000"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                id="phone"
                name="phone"
                label={exhibitor.address}
                fullWidth
                autoComplete="00000000"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                id="phone"
                name="phone"
                label={exhibitor.numberExt}
                fullWidth
                autoComplete="00000000"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                id="phone"
                name="phone"
                label={exhibitor.numberInt}
                fullWidth
                autoComplete="00000000"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="phone"
                name="phone"
                label={exhibitor.email}
                fullWidth
                autoComplete="00000000"
                variant="standard"
            />
            </Grid>
        </Grid>

        {/* Data for the exhibitors directory */}
        <Typography variant="h4" gutterBottom className='title'>
        {exhibitor.directorio}
        </Typography>

        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.companyNameExhibitor}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.countryExhibitor}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.stateExhibitor}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid><Grid item xs={12} sm={3}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.cityExhibitor}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="zip"
                name="zip"
                label={exhibitor.zipExhibitor}
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.coloniaExhibitor}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.addressExhibitor}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.numberExtExhibitor}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.web}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.phone}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
        </Grid>

        {/* Required contacts */}

        <Typography variant="h4" gutterBottom className='title'>
        {exhibitor.requiredContacts}
        </Typography>

        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.showContactPerson}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.jobTitle}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.phoneContact}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid><Grid item xs={12} sm={3}>
            <TextField
                required
                id="address1"
                name="address1"
                label={exhibitor.emailContact}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="zip"
                name="zip"
                label={exhibitor.paymentContact}
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.titlePayment}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.phonePayment}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.emailPayment}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.marketingContact}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.titleMarketing}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.phoneMarketing}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="address2"
                name="address2"
                label={exhibitor.emailMarketing}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom className='title'>
        {exhibitor.paymentTerms}
        </Typography>
        <Typography variant="h10" gutterBottom className='sub'>
        {exhibitor.paymentInfo}
        </Typography> 
        <div className='payment'>
            <Typography variant="h10" gutterBottom >
            {exhibitor.paymentSchedule.second}
            </Typography>
            <Typography variant="h10" gutterBottom >
            {exhibitor.paymentSchedule.second}
            </Typography>
            <Typography variant="h10" gutterBottom >
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
                <img src={""} alt='map' className='mapImg'/>
            </div>
        </div>
        <Grid item xs={12} sm={6}>
        <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="primary" name="privacy" value="yes" />}
                label={exhibitor.privacy}
            />
            </Grid>
            <Button variant="contained"color="primary" href="#contained-buttons" className='btn'>
                {exhibitor.register}
            </Button>
        
        </Grid>
    </React.Fragment>
  );
}