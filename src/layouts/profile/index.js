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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FormControl from '@mui/material/FormControl'
import { makeStyles } from '@mui/styles';
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { api } from "services/Api";

const useStyles = makeStyles({
  inputForm: {
    marginBottom: 8
  }
})

function Overview() {
  let { id } = useParams();
  const [userAuth, setUserAuth] = useState(JSON.parse(sessionStorage.getItem("user")))
  // console.log()
  const classes = useStyles();
  // console.log({userAuth})
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(userAuth[0])
const getShowUser = () => {
  api.get('user/show/' + id)
  .then((res) => {
    console.log({res})
    if(res.data) {
      setUserAuth(res.data)
    }
  })
  .catch((err) => {

  })
}

useEffect(() => {
  getShowUser()
}, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header user={userAuth}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={4} xl={4}>
            <ProfilesList title="Grupos" profiles={profilesListData} shadow={true} />
            </Grid>
            <Grid item xs={12} md={8} xl={8} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Detalhes"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  name: userAuth.name,
                  telefone: userAuth.phone,
                  email: userAuth.email,
                  cidade: userAuth.city,
                  id: userAuth.id,
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={true}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>

          </Grid>
        </MDBox>
        <MDBox px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Editar Dados
          </MDTypography>
          <MDBox>
            <MDTypography variant="button" color="text">
              Edite os dados pessoais, contato e endereço
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <MDTypography variant="button" color="text" fullWidth >
                  DADOS PESSOAIS
                </MDTypography>
                <MDBox m={1}>
                  <TextField value={ userAuth.name} InputLabelProps={{ shrink: true }} label="Nome completo" variant="outlined" fullWidth className={classes.inputForm}/>
                  <TextField label="Conhecido como? (Apelido)" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="Data de nascimento" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="Estado Civil" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="Batizado" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="Situação" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="Sexo" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="E-mail" variant="outlined" fullWidth  className={classes.inputForm}/>
                  <TextField label="Senha" variant="outlined" fullWidth  className={classes.inputForm}/>
                </MDBox>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <MDTypography variant="button" color="text" fullWidth>
                  DADOS PARA CONTATO
                </MDTypography>
                <MDBox m={1}>
                <TextField label="C.E.P" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Logradouro" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Número" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Complemento" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Bairro" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Cidade" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Estado" variant="outlined" fullWidth className={classes.inputForm}/>
                <TextField label="Telefone" variant="outlined" fullWidth className={classes.inputForm}/>
                </MDBox>
              </Grid>
              <Grid item xs={12}>
                  <MDTypography variant="button" color="info" fullWidth>
                    <InfoIcon fontSize="medium"  display="flex"/>
                    PARA EDITAR OS DADOS BASTA FAZER A ALTERAÇÃO NO CAMPO 
                  </MDTypography>
              </Grid>
            </Grid>
          </form>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
