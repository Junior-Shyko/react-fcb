import React, { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import {api} from '../../../../services/Api';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDButton from "components/MDButton";
//ICONS
import DeleteIcon from '@mui/icons-material/Delete';

function ModalDeleteUserGroup(props) {

  const [open, setOpen] = useState()
  const [nameUser, setNameUser] = useState(props.name)
  const { enqueueSnackbar } = useSnackbar()

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const deleteUserGroup = () => {
    console.log({props})
    api.delete('user-group/'+props.id)
    .then((res) => {
      enqueueSnackbar(res.data.message,{ 
        autoHideDuration: 2000,
        variant: res.data.type,
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
      setOpen(false)
      window.location.reload(true);
    })
    .catch((err) => {
      console.log(err.response)
      enqueueSnackbar(err.response.data.message,{ 
        autoHideDuration: 2000,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
    });

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

export default ModalDeleteUserGroup;