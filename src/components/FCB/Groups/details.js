import React, { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { api } from '../../../services/Api';
import SelectMember from "./selectMember"

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

// Material Dashboard 2 React components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "components/MDButton";

import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const [nameGroup, setNameGroup] = useState();
  const { enqueueSnackbar } = useSnackbar()
 
  const onChangeNameGroup = (event) => {
    setNameGroup(event)
  }

  const getNameGroup = () => {
    api.get("group/" + id)
      .then((res) => {
        console.log({ res })
        setNameGroup(res.data.name)
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  useEffect(() => {
    getNameGroup()
  }, [])

  const alterNameGroup = (nameGroup) => {
    let dataUp = { name: nameGroup }
    api.post("group/" + id, dataUp)
      .then((res) => {
        console.log({ res })
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

      })
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <MDTypography variant="inherit" fontWeight="medium" color="text">
                  Nome do grupo
                </MDTypography>
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <TextField
                    id="name-group"
                    label="Nome"
                    fullWidth
                    value={nameGroup}
                    onChange={(e) => onChangeNameGroup(e.target.value)}
                    onBlur={(e) => alterNameGroup(e.target.value)}
                  />
                </MDBox>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    Nome(s) da liderança do grupo
                  </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center" sx={{
                  minHeight: '40px'
                }}>
                  <SelectMember />
                </MDBox>
              </CardContent>
              <CardActions sx={{ background: '#ebecedb5', borderTop: '1px solid #e1dede' }}>
                <MDButton
                  size="medium"
                  variant="contained"
                  color="success"
                >Confirmar
                </MDButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    Nome(s) para lider em treinamento
                  </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center" sx={{
                  minHeight: '40px'
                }}
                >
                  <SelectMember />
                </MDBox>
              </CardContent>
              <CardActions sx={{ background: '#ebecedb5', borderTop: '1px solid #e1dede' }}>
                <MDButton
                  size="medium"
                  variant="contained"
                  color="success"
                >Confirmar
                </MDButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <MDTypography 
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    fullWidth
                    sx={{
                      borderBottom:'1px solid #e1dede',
                      p: 1,
                      // background: 'red',
                      width: '100%'
                    }}
                  >
                    Liders do grupo
                  </MDTypography>
                </MDBox>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>

  )
}

export default Details;