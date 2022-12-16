import React, { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { api } from '../../../services/Api';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CardActions from '@mui/material/CardActions';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';

import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

const SelectMember = (props) => {

  const [leader, setLeader] = useState()
  const [nameVinc, setNameVinc] = useState()
  const { enqueueSnackbar } = useSnackbar()

  const selectChange = (event) => {
    setNameVinc(event.target.value);
  }

  const listMember = () => {
    api.get('list-member/' + props.type)
      .then((res) => {
        setLeader(res.data)
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  useEffect(() => {
    listMember()
  }, []);

  const saveMemberGroup = () => {

    let dataMember = {user_id: nameVinc, group_id: props.idGroup}
    if(nameVinc === undefined) {
      enqueueSnackbar('Selecione o nome do membro',{ 
        autoHideDuration: 2000,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
    }
    api.post('user-group', dataMember)
    .then((res) => {
      console.log({res})
      enqueueSnackbar(res.data.message,{ 
        autoHideDuration: 2000,
        variant: res.data.type,
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
    })
    .catch((err) => {
      console.log({err})
    })
  }

  return (
    <>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel>Selecione um membro</InputLabel>
        <MDBox
          component="form"
          elevation={3}
          sx={{
            // p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "flex-end"
          }}
        >
          <Grid item xs={8} md={8} lg={8}>
            <Select
              label="Selecione um membro"
              value={nameVinc}
              onChange={selectChange}
              fullWidth
              sx={{
                minHeight: '40px'
              }}
            >
              {
                leader?.map(element => {
                  return (
                    <MenuItem key={element.id} value={element.id}>
                      {element.name}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </Grid>
          <Grid item xs={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <MDButton
              size="medium"
              variant="contained"
              color="success"
              onClick={() => {
                saveMemberGroup()
              }}
              sx={{
                width: '100%',
                ml: 1,
              }}
            >Confirmar
            </MDButton>
          </Grid>
        </MDBox>
      </FormControl>
    </>
  )
}

export default SelectMember;