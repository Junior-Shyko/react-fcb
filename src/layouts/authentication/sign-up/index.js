import React, { useState, useEffect } from "react"
import { api } from "./../../../services/Api"
// @mui material components
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from "@mui/material/Card"
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from "@mui/material/MenuItem"
import FormControl from '@mui/material/FormControl';
// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDInput from "components/MDInput"
import MDButton from "components/MDButton"
import PageLayout from "../../../examples/LayoutContainers/PageLayout";
//STYLE
import '../../style/all.css'

function Cover() {
  //PARA O USO DO SELECT
  const [age, setAge] = useState('age');
  const [group, setGroup] = useState('')
  const [nameGroup, setNameGroup] = useState([])
  const [showName, setShowName] = useState(false)

  const getGroups = () => {
    api.get('group')
      .then((res) => {
        setNameGroup(res.data)
      })
      .catch((err) => {

      })
  }

  useEffect(() => {
    getGroups()
  }, [])

  const handleChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
    if (event.target.value > 0) {
      console.log('nome completo')
      setShowName(true)  
    }
    if (event.target.value == 0) {
      console.log('nome false')
      setShowName(false)  
    }
  };

  return (
    <PageLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item md={12} xs={12} lg={12}>
            <Container maxWidth="sm">
              <MDBox sx={{ height: '100vh' }} >
                <MDBox sx={{ height: "30px" }}>
                </MDBox>
                <MDBox sx={{ textAlign: "center" }}>
                  <MDTypography
                    variant="h2"
                  >Cadastro
                  </MDTypography>
                </MDBox>
                <MDBox sx={{ textAlign: "center" }}>
                  <MDTypography
                    variant="subtitle1"
                  >Queremos conhecer um pouco mais sobre você.
                  </MDTypography>
                </MDBox>
                <Card>
                  <MDBox
                    variant="gradient"
                    bgColor="dark"
                    borderRadius="lg"
                    coloredShadow="info"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                  >
                    <MDTypography variant="h5" fontWeight="medium" color="white" mt={1}>
                      Diga-nos qual o grupo você está!
                    </MDTypography>
                  </MDBox>
                  <MDBox px={3} >
                    <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel sx={{ p: 1 }}>Selecione um grupo</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Selecione um grupo"
                        fullWidth
                        sx={{
                          minHeight: '40px',
                          mt: 1
                        }}
                      >
                        <MenuItem value="0">
                          <em>--Selecione--</em>
                        </MenuItem>
                      {
                        nameGroup?.map(element => {
                          return (
                            <MenuItem key={element.id} value={element.id}>
                              {element.name}
                            </MenuItem>
                          )
                        })
                      }
                      </Select>
                    </FormControl>
                  </MDBox>
                  {showName ? (
                    <MDBox pt={4} pb={3} px={3}>
                    <MDBox sx={{ textAlign: "center", mb: 2 }}>
                      <MDTypography mb={2}
                        variant="subtitle1"
                      >Agora, digite o seu nome completo e sua data de nascimento
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="text" label="Nome Completo" fullWidth />
                      <MDInput type="text" label="Nome Completo" fullWidth />
                    </MDBox>
                    <MDBox px={3} mb={2}>
                      <MDButton variant="gradient" color="info" fullWidth>Próximo passo</MDButton>
                    </MDBox>
                    <MDBox sx={{ textAlign: "center", textAlign: 'right', mr: 1 }}>
                      <MDTypography
                        variant="overline"
                      >Passo 1 de 4
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                  ): null}
                </Card>

              </MDBox>

            </Container>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
}

export default Cover;
