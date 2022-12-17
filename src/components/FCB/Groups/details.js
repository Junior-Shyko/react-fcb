import React, { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { Link } from "react-router-dom";
import { api } from '../../../services/Api';
import SelectMember from "./selectMember";
import DataTableUser from "./dataUser";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import TextField from '@mui/material/TextField';
import MDInput from "components/MDInput";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
// Material Dashboard 2 React components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "components/MDButton";


import { useParams } from "react-router-dom";

const CustomToolbar = () => {
  // const handleGoToPage1 = () => console.log({props});
  let redirect = "/details-groups/";
  return (
      <Link to={redirect} relative="path">
        <MDButton><AddCircleIcon /> </MDButton>
      </Link>
  );
};

export default function Details(){
  let { id } = useParams();
  
  const [nameGroup, setNameGroup] = useState();

  const [routeBack, setRouteBack] = useState('groups');
  const { enqueueSnackbar } = useSnackbar()
  const [rowsMember, setRowsMember] = useState();

  const onChangeNameGroup = (event) => {
    setNameGroup(event)
  }

  const getNameGroup = () => {
    console.log({routeBack})
    api.get("group/" + id)
      .then((res) => {
        // console.log({ res })
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

  const getMembersGroups = () => {
    // console.log({props})
    api.get('user-group')
    .then((res) => {
      // console.log('getMembersGroups ', res.data)
      setRowsMember(res.data)
    })
    .catch((err) => {
      console.log({ err })
    })
  }
  // console.log({rowsMember})
  useEffect(() => {
    getMembersGroups()
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Grid item xs={12} md={12} lg={12}>
          <MDButton
            size="medium"
            variant="text"
            color="dark"
            href="/groups"
          >
            <KeyboardReturnIcon /> Voltar
          </MDButton>
        </Grid>
        <Grid container spacing={3}>
          
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <MDTypography variant="inherit" fontWeight="medium" color="text">
                  Nome do grupo
                </MDTypography>
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <MDInput
                    type="text"
                    label="Nome"
                    fullWidth
                    value={nameGroup}
                    InputLabelProps={{ shrink: true }}
                    // defaultValue={nameGroup}
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
                  <SelectMember type="Lider" idGroup={id} />
                </MDBox>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    Nome do líder em treinamento do grupo
                  </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center" sx={{
                  minHeight: '40px'
                }}
                >
                  <SelectMember type="lider em treinamento" idGroup={id}/>
                </MDBox>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
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
                <MDBox display="flex" alignItems="center" lineHeight={0}>
                  <DataTableUser upList={rowsMember} idGroup={id}/>
                </MDBox>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>

  )
}
