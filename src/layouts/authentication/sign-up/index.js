import React, { useState, useEffect } from "react"
import { api } from "./../../../services/Api"
// @mui material components
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from "@mui/material/Card"

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDButton from "components/MDButton"
import PageLayout from "../../../examples/LayoutContainers/PageLayout";
//STYLE
import '../../style/all.css'
import SelectStepOne from "./stepForm/select-step-one"
import StepUserTwo from "./stepForm/step-two"

function Cover() {

  const [showSelect , setShowSelect] =  useState(true);
  const [textStepFooter, setTextStepFooter] = useState('Passo 1 de 4');
  const [titleStep, setTitleStep] = useState('Diga-nos qual o grupo você está!');
  

  function stepOne(value, titleStep) {
    setShowSelect(value)
    setTitleStep(titleStep)
    setTextStepFooter('Passo 2 de 3')
  }

  return (
    <PageLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item md={12} xs={12} lg={12}>
            <Container maxWidth="sm">
              <MDBox sx={{ height: '100vh' }} >
                <MDBox sx={{ height: "30px" }} />
                <MDBox sx={{ textAlign: "center" }}>
                  <MDTypography
                    variant="h2"
                  >A Família Campo de Boaz
                  </MDTypography>
                </MDBox>
                <MDBox sx={{ textAlign: "center", mb: 5 }}>
                  <MDTypography
                    variant="subtitle1"
                  >quer conhecer um pouco mais sobre você e contamos com você preenchendo todas as informações corretas. Vamos lá!!!

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
                      {titleStep}
                    </MDTypography>
                  </MDBox>
                  {showSelect 
                    ? <SelectStepOne stepOne={stepOne}/>
                    : (
                      <StepUserTwo />
                    )
                  }

                  <Grid container spacing={2}>
                    <Grid item md={6} xs={6} lg={6}>
                      <MDButton
                        variant="text"
                        color="dark"
                        sx={{mb: 1}}
                        onClick={(e) => setShowSelect(false)}
                        >Voltar</MDButton>
                    </Grid>
                    <Grid item md={6} xs={6} lg={6}>
                    <MDBox sx={{ textAlign: "center", textAlign: 'right', mr: 1 }}>
                  <MDTypography
                    variant="overline"
                  >
                    {textStepFooter}
                  </MDTypography>
                </MDBox>
                    </Grid>
                  </Grid>
                  
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
