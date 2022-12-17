import React, { useState, useEffect } from "react"
// react-router-dom components
import { Link } from "react-router-dom"
import { api } from "./../../../services/Api"

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
import Input from "@mui/material/Input"
import Grid from "@mui/material/Grid"
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

//Mascara para inputs
import PhoneCuston from "../../general/PhoneCuston"
import CepCuston from "../../general/CepCuston"
// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDInput from "components/MDInput"
import MDButton from "components/MDButton"
import PageLayout from "../../../examples/LayoutContainers/PageLayout";

function Cover() {
  const [nameGroup, setNameGroup] = useState([])

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

  const [group, setGroup] = useState('')
  const [name, setName] = useState('')
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [phone, setPhone] = useState('')
  const [baptized, setBaptized] = useState('')
  const [situacion, setSituacion] = useState('')
  const [email, setEmail] = useState('')
  const [passwword, setPassword] = useState('')

  const handleInput = (e) => {
    console.log({ e })
    setPhone(e.target.value)
  }

  const completCep = (e) => {
    console.log({ e })
    setCep(e.target.value)
  }

  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }

  return (
    <PageLayout>
      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container spacing={2} >
          <Grid item md={12} xs={12} lg={12}>
            <Item>
              <Card fullWidth>
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
                    Registro de Membro
                  </MDTypography>
                  <MDTypography display="block" variant="button" color="white" my={1}>
                    Cadastro de membro da igreja Família Campo de Boaz, então se você
                    faz parte dessa família escolha um grupo e preencha os seus dados.
                  </MDTypography>
                </MDBox>
                <MDBox px={3}>
                  <MDBox component="form" role="form">
                    <Grid item xs={12} md={12} lg={12} mt={2}>
                      <InputLabel>Selecione um grupo</InputLabel>
                      <Select
                        value={group}
                        label="Selecione um grupo"
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          minHeight: '40px',
                          mt: 1
                        }}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
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
                      <FormHelperText>Grupo de convívio do membro.</FormHelperText>
                    </Grid>
                    <MDBox>
                      <MDInput
                        type="text"
                        size="small"
                        label="Nome Completo"
                        variant="standard"
                        fullWidth
                        value={name}
                        onChange={(e)=>inputChangeHandler(setName, e)}
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
                        sx={{mt: 2}}
                        inputComponent={CepCuston}
                      />
                    </MDBox>
                    <MDBox>
                      <TextField
                        label="Logradouro"
                        variant="standard"
                        fullWidth
                        size="small"
                        onChange={(e)=>inputChangeHandler(setAddress, e)}
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
                      <InputLabel id="demo-simple-select-label" size="small" style={{ marginBottom: 5 }}>Estado</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={uf}
                        label="Estado"
                        variant="standard"
                        onChange={handleChange}
                        fullWidth
                        sx={{ mt: 2 }}
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
                      <InputLabel size="small">
                        Telefone
                      </InputLabel>
                      <Input
                        type="text"
                        label="Telefone"
                        variant="standard"
                        value={phone}
                        onBlur={handleInput}
                        name="textmask"
                        fullWidth
                        sx={{ mt: 2 }}
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
            </Item>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
}

export default Cover;
