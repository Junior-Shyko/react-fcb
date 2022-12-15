import React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDButton from "components/MDButton";
//ICONS
import DeleteIcon from '@mui/icons-material/Delete';

function SimpleDialog(props) {

  const [open, setOpen] = useState();
  const [nameUser, setNameUser] = useState(props.name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUserGroup = () => {
    console.log({props})
  }
  return (
    <div>
      <MDButton
        variant="text"
        color="error"
        size="large"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Excluir"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja realmente excluir <strong>{nameUser}</strong> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton
            variant="text"
            color="error"
            onClick={deleteUserGroup}>Sim</MDButton>
          <Button onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SimpleDialog;