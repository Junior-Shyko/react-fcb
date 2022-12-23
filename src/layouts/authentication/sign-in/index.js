/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import PageLayout from "../../../examples/LayoutContainers/PageLayout";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <PageLayout>
      <MDBox  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        m: 1,        
      }}>
      <Grid container spacing={2}>
        <Grid
          item
          md={7}
          sx={{
            display: { xs: "none",  md: "block" }
          }}
        >
          <Paper >
            <img src="https://i.imgur.com/XyBYj1J.jpg" sx={{width: '100%'}}/>
          </Paper >
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Paper sx={{height: '100%'}} >
            <Container fixed>
            <MDBox pt={4} pb={3} px={3}>
                <MDBox display="flex" alignItems="center"  textAlign="center" mt={5}>
                  <Grid sx={12} md={12}>
                    <MDTypography
                      fontWeight="bold"
                      color="dark"
                      textGradient
                      variant="h2"
                    >Acessar</MDTypography>
                  </Grid>                                    
                </MDBox>
                <MDBox display="flex" alignItems="center"  textAlign="center" mt={5} mb={5}>
                  <Grid sx={12} md={12}>
                    <MDTypography
                      fontWeight="light"
                      color="text"
                      textGradient
                    >
                      Uma aplicação para a liderança da Igreja <span> <strong>Família Campo de Boaz</strong> </span>
                    </MDTypography>
                  </Grid>                                    
                </MDBox>
                <MDBox component="form" role="form" m={7}>
                  <MDBox mb={2}>
                    <MDInput type="email" label="Email" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="password" label="Password" fullWidth />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      Fazer login
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>

              <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Ainda não possue cadastro?{" "}
                <MDTypography
                 variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                 Fazer cadastro
                </MDTypography>
              </MDTypography>
            </MDBox>
            </Container>            
          </Paper >
        </Grid>
      </Grid>
      </MDBox>
    </PageLayout>
  );
}

export default Basic;
