import React, { useState } from "react"
// react-router-dom components
import { Link } from "react-router-dom"

// @mui material components
import Card from "@mui/material/Card"
// import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import InputAdornment from "@mui/material/InputAdornment"
import SaveIcon from "@mui/icons-material/Save"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import TextField from "@mui/material/TextField"
// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDInput from "components/MDInput"
import MDButton from "components/MDButton"

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout"

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg"
// import colors from "assets/theme/base/colors";

function Cover() {
  const [cep, setCep] = useState()
  const [logra, setLogra] = useState()
  const [district, setDistrict] = useState()
  const [city, setCity] = useState()
  const [uf, setUf] = useState()
  const checkCEP = (e) => {
    const cepInput = e.target.value.replace(/\D/g, " ")
    console.log(cepInput)
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // register({ name: 'address', value: data.logradouro });
      setCep(data.cep)
      setLogra(data.logradouro)
      setDistrict(data.bairro)
      setCity(data.localidade)
      setUf(data.uf)
    
    })
  }

  const alterInput = (e) =>{
    console.log({e})
  }

  return (
    <CoverLayout image={bgImage}>
      <Card sx={{ width: 300 }}>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Cadastro
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Cadastre o membro do seu grupo
          </MDTypography>
        </MDBox>
        <MDBox px={3}>
          <MDBox component="form" role="form">
            <MDBox>
              <MDInput type="text" label="Nome Completo" variant="standard" fullWidth InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}/>
            </MDBox>
            <MDBox>
              <MDInput type="text" label="CEP" value={cep} variant="standard" fullWidth onBlur={checkCEP} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}/>
            </MDBox>
            <MDBox>
              <TextField
                label="Logradouro"
                variant="standard"
                value={logra}
                fullWidth
                onChange={alterInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>

            <MDBox>
              <MDInput
                type="text"
                label="Número e complemento"
                variant="standard"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>
            <MDBox>
              <MDInput 
                type="text" 
                label="Bairro" 
                value={district}
                variant="standard"
                fullWidth 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}/>
            </MDBox>
            <MDBox>
              <MDInput
                type="text"
                label="Cidade"
                value={city}
                variant="standard"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>
            <MDBox>
              <MDInput
                type="text"
                label="Estado"
                value={uf}
                variant="standard"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>
            <MDBox>
              <MDInput
                type="text"
                label="Telefone"
                variant="standard"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>
            <MDBox>
              <FormControl>
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", mt: 2 }}
                >
                  Batizado
                </MDTypography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-batizado"
                  defaultValue="true"
                >
                  <FormControlLabel value="true" control={<Radio />} label="Sim" />
                  <FormControlLabel value="false" control={<Radio />} label="Não" />
                </RadioGroup>
              </FormControl>
            </MDBox>
            <MDBox>
              <FormControl>
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", mt: 2 }}
                >
                  Situação
                </MDTypography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-situacao"
                  defaultValue="Membro"
                >
                  <FormControlLabel value="Membro" control={<Radio />} label="Membro" />
                  <FormControlLabel value="Congregado" control={<Radio />} label="Congregado" />
                </RadioGroup>
              </FormControl>
            </MDBox>
            <MDBox>
              <MDInput type="email" label="E-mail" variant="standard" fullWidth />
            </MDBox>
            <MDBox>
              <MDInput type="password" label="Senha" variant="standard" fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="contained" color="dark" fullWidth>
                Cadastrar
                <SaveIcon />
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Já tem conta?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Acessar aqui
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
