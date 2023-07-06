import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import data from "../data.json";
export default function AddressForm({ language }) {
    const { register } = data[language]; 

  return (
    <React.Fragment>
        <div className='registerForm'>
        <Typography variant="h10" gutterBottom>
            {register.required}
        </Typography>
        <Typography variant="h4" gutterBottom className='title'>
            {register.personal}
        </Typography>
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
                    id="lastName"
                    name="lastName"
                    label={register.company}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="lastName"
                    name="lastName"
                    label={register.position}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label={register.email}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="phone"
                name="phone"
                label={register.phone}
                fullWidth
                autoComplete="00000000"
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
                id="address1"
                name="address1"
                label={register.country}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="address1"
                name="address1"
                label={register.state}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid><Grid item xs={12} sm={6}>
            <TextField
                required
                id="address1"
                name="address1"
                label={register.city}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label={register.zip}
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="address2"
                name="address2"
                label={register.address}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
            />
            </Grid>
        
 
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="primary" name="privacy" value="yes" />}
                label={register.privacy}
            />
            </Grid>
            <Button variant="contained"color="primary" href="#contained-buttons" className='btn'>
                {register.register}
            </Button>
        </Grid>
        </div>
    </React.Fragment>
  );
}