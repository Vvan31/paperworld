import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import data from "../data.json";

export default function AlertDialog({ language, open, handleClose } ) {
  const { privacy } = data[language]; 

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {privacy.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {privacy.p1}
            <ul>
              <li>{privacy.l11}</li>
              <li>{privacy.l12}</li>
              <li>{privacy.l13}</li>
              <li>{privacy.l14}</li>
              <li>{privacy.l15}</li>
            </ul>
            {privacy.p2}
            <br />
            {privacy.p3}
            <ul>
              <li>{privacy.l21}</li>
              <li>{privacy.l22}</li>
              <li>{privacy.l23}</li>
              <li>{privacy.l24}</li>
              <li>{privacy.l25}</li>
              <li>{privacy.l26}</li>
            </ul>
            {privacy.p4}
            <br />
            {privacy.p5}
            <ul>
              <li>{privacy.l31}</li>
              <li>{privacy.l32}</li>
              <li>{privacy.l33}</li>
            </ul>
            {privacy.p6}
            <br />
            {privacy.p7}
            <br />
            {privacy.p8}
            <br />
            {privacy.p9}
            <br />
            {privacy.p10}
          </DialogContentText>
        </DialogContent>
     {/*    <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
AlertDialog.propTypes = {
  language: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
