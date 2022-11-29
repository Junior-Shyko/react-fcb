import React, { useState } from "react"
// react-router-dom components
import { Link } from "react-router-dom"

// @mui material components
import Card from "@mui/material/Card"
// import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import SaveIcon from "@mui/icons-material/Save"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import PropTypes from "prop-types"
import Input from "@mui/material/Input"
import { IMaskInput } from "react-imask"
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
  // const [cep, setCep] = useState()
  // const [logra, setLogra] = useState()
  // const [district, setDistrict] = useState()
  // const [city, setCity] = useState()
  // const [uf, setUf] = useState()
  // const checkCEP = (e) => {
  //   const cepInput = e.target.value.replace(/\D/g, " ")
  //   console.log(cepInput)
  //   fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     // register({ name: 'address', value: data.logradouro });
  //     setCep(data.cep)
  //     setLogra(data.logradouro)
  //     setDistrict(data.bairro)
  //     setCity(data.localidade)
  //     setUf(data.uf)
    
  //   })
  // }
  const PhoneCuston = React.forwardRef(function PhoneCuston(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  PhoneCuston.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const CepCuston = React.forwardRef(function CepCuston(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00.000-000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  CepCuston.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const [phone, setPhone] = useState('')
  const handleInput = (e) => {
    console.log({e})
    setPhone(e.target.value)
  }
  
  const [cep, setCep] = useState('')
  const completCep = (e) => {
    console.log({e})
    setCep(e.target.value)
  }

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
              <MDInput type="text" size="small"label="Nome Completo" variant="standard" fullWidth 
             />
            </MDBox>
            <MDBox>
              <InputLabel size="small">CEP</InputLabel>
              <Input 
                type="text"
                label="CEP"
                variant="standard"
                fullWidth
                value={cep} 
                onBlur={completCep}
                name="cepmask"
                inputComponent={CepCuston}
              />
            </MDBox>
            <MDBox>
              <TextField
                label="Logradouro"
                variant="standard"
                fullWidth
                size="small"
              />
            </MDBox>
            <MDBox>
              <MDInput
                type="text"
                label="Número e complemento"
                variant="standard"
                fullWidth
                size="small"
              />
            </MDBox>
            <MDBox>
              <MDInput 
                type="text" 
                label="Bairro" 
                variant="standard"
                fullWidth
                size="small"
              />
            </MDBox>
            <MDBox>
              <MDInput
                type="text"
                label="Cidade"
                defaultValue="Fortaleza"
                variant="standard"
                fullWidth
                size="small"
              />
            </MDBox>
            <MDBox>             
                <InputLabel id="demo-simple-select-label" size="small"  style={{marginBottom: 5}}>Estado</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Estado"
                  variant="standard"
                  onChange={handleChange}                  
                  fullWidth
                >
                  <MenuItem value="AC">Acre</MenuItem>
                  <MenuItem value="AL">Alagoas</MenuItem>
                  <MenuItem value="AP">Amapá</MenuItem>
                  <MenuItem value="AM">Amazonas</MenuItem>
                  <MenuItem value="BA">Bahia</MenuItem>
                  <MenuItem value="CE">Ceará</MenuItem>
                  <MenuItem value="DF">Distrito Federal</MenuItem>
                  <MenuItem value="ES">Espírito Santo</MenuItem>
                  <MenuItem value="GO">Goiás</MenuItem>
                  <MenuItem value="MA">Maranhão</MenuItem>
                  <MenuItem value="MT">Mato Grosso</MenuItem>
                  <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                  <MenuItem value="MG">Minas Gerais</MenuItem>
                  <MenuItem value="PA">Pará</MenuItem>
                  <MenuItem value="PB">Paraíba</MenuItem>
                  <MenuItem value="PR">Paraná</MenuItem>
                  <MenuItem value="PE">Pernambuco</MenuItem>
                  <MenuItem value="PI">Piauí</MenuItem>
                  <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                  <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                  <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                  <MenuItem value="RO">Rondônia</MenuItem>
                  <MenuItem value="RR">Roraima</MenuItem>
                  <MenuItem value="SC">Santa Catarina</MenuItem>
                  <MenuItem value="SP">São Paulo</MenuItem>
                  <MenuItem value="SE">Sergipe</MenuItem>
                  <MenuItem value="TO">Tocantins</MenuItem>
                  <MenuItem value="EX">Estrangeiro</MenuItem>                 
                </Select>
             
            </MDBox>
            <MDBox>
              <InputLabel size="small">Telefone</InputLabel>
              <Input
                type="text"
                label="Telefone"
                variant="standard"
                value={phone} 
                onBlur={handleInput}
                name="textmask"
                fullWidth
                inputComponent={PhoneCuston}
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
