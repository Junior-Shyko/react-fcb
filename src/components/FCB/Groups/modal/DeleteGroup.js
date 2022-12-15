import React, { useEffect, useState } from "react";
import {api} from '../../../../services/Api';
import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import MDButton from "components/MDButton";


export default function DeleteGroup(props) {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteGroup = () => {
    delGroupRequest(props.idGroup)
  };

  const delGroupRequest = async (id) => {
    api.delete("group/"+id)
    .then( (res) => {            
        console.log(res.data)
        enqueueSnackbar(res.data.message,{ 
          autoHideDuration: 2000,
          variant: res.data.type,
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom'
          }
        });
        setTimeout(() => {
          // reloadPage();
          var location = window.location.href;
          window.location.href = location;          
        }, 2000);
    })
    .catch( (err) => {
        console.log({err})
    })

}

  return (
    <div>
      <MDButton
          variant="text"
          color="error"
          size="large"
          title="Exluir o grupo"
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
          Excluir Grupo de Convívio
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja realmente excluir esse grupo?
          </DialogContentText>
          <DialogContentText id="alert-dialog-description2"
            sx={{color: "#e53935"}}
          >
            Importante lembrar que ao excluir o grupo, todos
            os lideres e lideres em treinamentos serão 
            desvinculados do grupo.
          </DialogContentText>          
        </DialogContent>
        <DialogActions>
          <MDButton
            variant="text"
            color="error"
            onClick={deleteGroup}
          >
            Sim
          </MDButton>
          <Button onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}