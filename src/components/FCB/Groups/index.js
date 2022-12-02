import React, { useState } from "react";
import { useSnackbar } from 'notistack';

// @mui material components
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SaveIcon from '@mui/icons-material/Save';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';


// Material Dashboard 2 React components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "components/MDButton";
//API
import {api} from '../../../services/Api';
import List from 'components/FCB/Groups/list';


function Groups() {
  const [ nameGroup, setNameGroup] = useState("")
  const { enqueueSnackbar } = useSnackbar()
  const [ updateList, setUpdateList ] = useState(false)

  function upDataList(situacion) {
    setUpdateList(situacion);
  }

  const postData = () =>{
    if(nameGroup == '' || nameGroup.length < 3) {
      enqueueSnackbar('Dicas: Digite um nome com mais de 3 letras',{ 
        autoHideDuration: 3500,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
      return false;
    }
    let data = { name : nameGroup }
    api.post("group" , data)
    .then( (res) => {
      console.log({res})
      enqueueSnackbar('Grupo salvo com sucesso!',{ 
        autoHideDuration: 3000,
        variant: 'success',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
      upDataList(true)
      setNameGroup('');
      // setTimeout(() => {
      //   setUpdateList(false);
      // }, 1000);
    })
    .catch((err) => {
      enqueueSnackbar('Error: '.err.data , { 
        autoHideDuration: 3500,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
    })
  }  
  return (
    <DashboardLayout>
      <DashboardNavbar />      
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="secondary"
                  borderRadius="lg"
                  coloredShadow="dark"
                >
                  <MDTypography variant="h6" color="white">
                    Grupo de Convívio
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <Grid item xs={12}>
                    <MDTypography
                      variant="body2"
                      color="dark"
                      fontWeight="regular"
                      p={1}
                      ml={1}
                    >
                      Qual será o nome do Grupo de Convívio?
                    </MDTypography>
                    <Paper
                      component="form"
                      elevation={3}
                      sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between"
                      }}
                    >
                      <Grid item xs={10}>
                        <InputBase
                          sx={{
                            flex: 1,
                            border: '1px solid #c3c3c3',
                            p: '2px',
                            borderRadius: '8px',
                            ml: 1
                          }}
                          placeholder="Nome do grupo"
                          fullWidth
                          value={nameGroup}
                          onChange={(e) => setNameGroup(e.target.value)}
                        />
                      </Grid>
                      <Grid xs={5} md={2} sx={{
                        m: 1
                      }}>
                        <MDButton
                          variant="gradient"
                          color="info"
                          onClick={postData}
                          sx={{width: '90%', ml: 1}}
                        >
                          <SaveIcon />
                          Salvar
                        </MDButton>
                      </Grid>
                    </Paper>
                  </Grid>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
          <List upList={upDataList} situacionList={updateList} />
        </MDBox>
      </MDBox>      
    </DashboardLayout>
  );
}

export default Groups;