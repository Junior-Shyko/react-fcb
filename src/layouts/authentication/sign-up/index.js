import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
// react-router-dom components
import { Link } from "react-router-dom"
import { api } from "./../../../services/Api"

// @mui material components
import Card from "@mui/material/Card"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
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
import Alert from '@mui/material/Alert';

//Mascara para inputs
import PhoneCuston from "../../general/PhoneCuston"
import CepCuston from "../../general/CepCuston"
import BirthDate from "../../general/BirthDate"
// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDInput from "components/MDInput"
import MDButton from "components/MDButton"
import PageLayout from "../../../examples/LayoutContainers/PageLayout";
//STYLE
import '../../style/all.css'

function Cover() {
  const [nameGroup, setNameGroup] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, e) => {
    //Request dos campos
    console.log(data, e)
  };

  
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

  //PARA O USO DO SELECT
  const [group, setGroup] = useState('')
  const [uf, setUf] = useState([])
  const [phone, setPhone] = useState('')
  const [birthdate, setBirthDate] = useState('')
  const [cep, setCep] = useState('')

  const handleInputPhone = (e) => {
    console.log({ e })
    setPhone(e.target.value)
  }
  const handleInputBirth = (e) => {
    console.log({ e })
    setBirthDate(e.target.value)
  }

  const handleInputCep = (e) => {
    console.log({ e })
    setCep(e.target.value)
  }

  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  const handleChangeUf = (event: SelectChangeEvent) => {
    setUf(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  return (
    <PageLayout>
      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container spacing={2} >
          <Grid item md={12} xs={12} lg={12}>
            <form id="form-hook-form" onSubmit={handleSubmit(onSubmit)}>
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
                <Alert severity="info">
                  <FormHelperText sx={{fontWeight: 500}}>Os campos com * são obrigatórios.</FormHelperText>
                </Alert>
                </MDBox>
                <MDBox px={3}>
                  <MDBox component="form" role="form">
                    <Grid item xs={12} md={12} lg={12} mt={2}>
                      <InputLabel>Selecione um grupo *</InputLabel>
                      <Select
                        required
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
                        name="group"
                        {...register("group")}
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
                      <TextField 
                        required
                        type="text"
                        size="small"
                        label="Nome Completo"
                        variant="standard"
                        fullWidth
                        name="name"
                        {...register("name",  { required: 'Nome é obringatório' , minLength: 3})}
                      />
                      <FormHelperText className="Mui-error">{errors.name?.message}</FormHelperText>
                    </MDBox>
                    <MDBox>
                    <InputLabel size="small">Data de Nascimento *</InputLabel>
                      <Input 
                        required
                        type="text"
                        label="Data de Nascimento"
                        variant="standard"
                        value={birthdate}
                        name="birthDate"
                        fullWidth
                        sx={{mt: 2}}
                        inputComponent={BirthDate}
                        {...register("birthDate",  {  required: 'Data de Nascimento é obringatório' })}
                        onBlur={handleInputBirth}
                      />
                      <FormHelperText className="Mui-error">{errors.birthDate?.message}</FormHelperText>
                    </MDBox>
                    <MDBox>
                      <InputLabel size="small">CEP</InputLabel>
                      <Input
                        type="text"
                        label="CEP"
                        variant="standard"
                        fullWidth
                        name="cepmask"
                        sx={{mt: 1}}
                        value={cep}
                        inputComponent={CepCuston}
                        {...register("cepmask", { maxLength: 11 })}
                        onBlur={handleInputCep}
                      />
                    </MDBox>
                    <MDBox>
                      <MDInput
                        type="text"
                        label="Logradouro"
                        variant="standard"
                        fullWidth
                        size="small"
                        name="address"
                        {...register("address", { minLength: 3 })}
                      />
                    </MDBox>
                    <MDBox>
                      <MDInput
                        type="text"
                        label="Número e complemento"
                        variant="standard"
                        fullWidth
                        size="small"
                        name="number"
                        {...register("number")}
                      />
                    </MDBox>
                    <MDBox>
                      <MDInput
                        type="text"
                        label="Bairro"
                        variant="standard"
                        fullWidth
                        size="small"
                        name="district"
                        {...register("district")}
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
                        name="city"
                        {...register("city")}
                      />
                    </MDBox>
                    <MDBox>
                      <InputLabel id="demo-simple-select-label" size="small" style={{ marginBottom: 5 }}>Estado</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-label"
                        value={uf}
                        label="Estado"
                        variant="standard"
                        onChange={handleChangeUf}
                        fullWidth
                        name="uf"
                        {...register("uf")}
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
                        Telefone *
                      </InputLabel>
                      <Input
                        required
                        type="text"
                        label="Telefone"
                        variant="standard"
                        value={phone}
                        onBlur={handleInputPhone}
                        fullWidth
                        sx={{ mt: 2 }}
                        inputComponent={PhoneCuston}
                        name="phone"
                        {...register("phone", { required: 'Telefone é obringatório'})}
                      />
                      <FormHelperText className="Mui-error">{errors.phone?.message}</FormHelperText>
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
                          <FormControlLabel value="true" {...register("baptized")} control={<Radio />} label="Sim" />
                          <FormControlLabel value="false"  {...register("baptized")} control={<Radio />} label="Não" />
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
                          <FormControlLabel value="Membro"  {...register("situacion")} control={<Radio />} label="Membro" />
                          <FormControlLabel value="Congregado"  {...register("situacion")} control={<Radio />} label="Congregado" />
                        </RadioGroup>
                      </FormControl>
                    </MDBox>
                    <MDBox>
                      <MDInput
                        type="email"
                        label="E-mail"
                        variant="standard"
                        fullWidth
                        name="email"
                        {...register("email")}/>
                    </MDBox>
                    <MDBox>
                      <MDInput
                        type="password"
                        label="Senha"
                        variant="standard"
                        fullWidth 
                        name="password"
                        {...register("password")}
                      />
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Item>
            </form>
            <Card sx={{ marginTop: '8px'}}>
              <MDBox mb={1}>
                <MDButton
                  variant="contained"
                  color="dark"
                  fullWidth
                  type="submit"
                  form="form-hook-form"
                >
                  Cadastrar
                  <SaveIcon sx={{marginLeft: 1}} />
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
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
}

export default Cover;
