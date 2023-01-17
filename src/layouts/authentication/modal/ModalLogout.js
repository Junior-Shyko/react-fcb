import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDButton from "components/MDButton";
// import useAuth from "./../../../hooks/useAuth";

export default function ModalLogout(props) {
    console.log(props)
  const [open, setOpen] = React.useState();
  // const { signout } = useAuth();
  console.log({open})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.alterShowModal(false)
    props.show(false)
  };

  const logout = () => {
    // signout();
  }
  React.useEffect(() => {
    setOpen(props.show)
  })

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sair do sistema"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Deseja realmente sair do sistema?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={logout} variant="gradient" color="info" size="medium">Sim</MDButton>
          <MDButton onClick={handleClose} autoFocus variant="gradient" color="light" size="medium">
           Não
          </MDButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}