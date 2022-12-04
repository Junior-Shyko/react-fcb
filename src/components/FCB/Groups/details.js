import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// Material Dashboard 2 React components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "components/MDButton";

import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const [ nameGroup, setNameGroup ] = useState(id);

  const onChangeNameGroup = (event) => {
    setNameGroup(event)
  }
  const alterNameGroup = (nameGroup) => {
    let dataUp = {name: nameGroup}
    api.put("group/"+id, dataUp)
    .then((res) => {
      console.log({res})
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
                    <FormControl fullWidth sx={{mt:1}}>
                      <InputLabel id="demo-simple-select-label">Selecione</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Selecione"
                        value="age"
                        defaultValue="Age"
                        sx={{ 
                          minHeight: '40px'
                          }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      </FormControl>
                    </MDBox>
                </CardContent>
                <CardActions  sx={{background: '#ebecedb5',borderTop: '1px solid #e1dede'}}>
                  <Button size="small">Confirmar</Button>
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
                    <FormControl fullWidth sx={{mt:1}}>
                      <InputLabel id="demo-simple-select-label2">Selecione</InputLabel>
                      <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select2"
                        label="Selecione"
                        value="age"
                        onChange={handleChange}
                        sx={{ 
                          minHeight: '40px'
                          }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      </FormControl>
                    </MDBox>
                </CardContent>
                <CardActions  sx={{background: '#ebecedb5',borderTop: '1px solid #e1dede'}}>
                  <MDButton
                    size="medium"
                    variant="contained"
                    color="success"
                  >Confirmar</MDButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
    </DashboardLayout>

  )
}

export default Details;