import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function AlertDialog(props) {

  const [open, setOpen] = React.useState(props.open);
  console.log({open})
  const handleClickOpen = () => {
    setOpen(props.open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <MDTypography
            color="success"
            fontWeight="medium"
            align="center"
          >
            Cadastro realizado com sucesso
          </MDTypography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <MDTypography
            color="inherit"
            align="center"
            variant="subtitle2"
          >
            Você realizou o seu cadastro de membro na
            Igreja Família Campo de Boaz.
            <img 
              src="https://www.svgrepo.com/show/48177/check-mark.svg" 
              width='96' 
            />
          </MDTypography>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          <MDTypography
            color="inherit"
            align="center"
            variant="subtitle2"
          >
            Seja bem vindo e faça uma das escolhas abaixo.
          </MDTypography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <MDButton 
                onClick={handleClose}
                variant="gradient"
                color="success"
              >
                Fazer outro cadastro
              </MDButton>
            </Grid>
            <Grid item xs={6} md={6} 
              sx={{display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={handleClose} autoFocus>
                Página inicial
              </Button>
            </Grid>
          </Grid>
          
          
        </DialogActions>
      </Dialog>
    </div>
  );
}