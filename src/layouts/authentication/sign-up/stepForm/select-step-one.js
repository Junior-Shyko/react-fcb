import React, { useState, useEffect, useRef  } from "react"
import InputMask from "react-input-mask"
import { IMaskInput } from 'react-imask'
import { useSnackbar } from "notistack"
import { api } from "./../../../../services/Api"
import BirthDate from "./../../../general/BirthDate"
// Material Dashboard 2 React components
import FormControl from '@mui/material/FormControl'
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress'
import AccountCircle from '@mui/icons-material/AccountCircle'
import CalendarMonthIcon from '@mui/icons-material/DateRange';
// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDButton from "components/MDButton"

function SelectStepOne(props) {
 
  //PARA O USO DO SELECT
  const [nameUser, setNameUser] = useState('')
  const [nameGroup, setNameGroup] = useState(props.group)
  const [stepOne, setStepOne] = useState(false);
  const [idGroup, setIdGroup] = useState('')
  const [idUser, setIdUser] = useState('')
  const [showName, setShowName] = useState(false)
  const [birthDay, setBirthDay] = useState('')
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()
  const ref = useRef(null);
  const inputRef = useRef(null);

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
    setIdGroup(event.target.value)

    if (event.target.value > 0) {
      setShowName(true)
    }
    if (event.target.value == 0) {
      setShowName(false)
    }
  };

  const onChangeDate = (event) => {
    setBirthDay(event.target.value)
  }

  const salvarDados = () => {
    //habilitando o load
    setLoading(true)
    if (idGroup == "" || nameUser == "" || birthDay == "") {
      enqueueSnackbar('Ops!!! Todos os campos são obrigatórios.', {
        autoHideDuration: 3500,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
      setTimeout(() => {
        setLoading(false)
      }, 200);
    }

    var dataPost = {
      group_id: idGroup,
      name: nameUser,
      birthDate: birthDay
    };

    api.post('create-user', dataPost)
    .then((res) => {
      console.log({ res })
      props.stepOne(false,'Mais uma etapa!')
      setIdUser(res.data.id)
      props.idUser(res.data.id)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
      
    })
    .catch((err) => {
      enqueueSnackbar('Ops!!! Verifique se os valores estão corretos.', {
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
    <MDBox px={3} >
      {props.stepOne && (
        <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
          <InputLabel sx={{ p: 1 }}>Selecione um grupo</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={idGroup}
            onChange={handleChange}
            label="Selecione um grupo"
            fullWidth
            name="group_id"
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
      )}
      {showName ? (
        <MDBox pt={4} pb={3} px={3}>
          <MDBox sx={{ textAlign: "center", mb: 2 }}>
            <MDTypography mb={2}
              variant="subtitle1"
            >Agora, digite o seu nome completo e sua data de nascimento
            </MDTypography>
            
          </MDBox>
          <MDBox mb={2}>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
           <InputLabel htmlFor="standard-adornment-amount">Nome Completo</InputLabel>
            <Input
              label="Nome Completo"
              fullWidth
              onChange={(e) => setNameUser(e.target.value)}
              value={nameUser}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
             </FormControl>
            {/* <InputMask
              mask="99/99/9999"
              onChange={onChangeDate}
              disabled={false}
              maskChar=" "
            >
              {() =>
                <TextField
                  ref="brithDate"
                  name="brithDate"
                  type="text"
                  label="Nascido em"
                  fullWidth
                  sx={{
                    mt: 1
                  }}

                />}
            </InputMask> */}
            
          </MDBox>
          <MDBox>
              {/* <InputLabel size="small">Telefone</InputLabel>
              <Input
                type="text"
                label="Nascido em"
                variant="outlined"
                value={birthDay} 
                onBlur={onChangeDate}
                name="brithDate"
                fullWidth
                inputComponent={BirthDate}
                className="MuiInputBase-formControl"
              /> */}

          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
           <InputLabel>Data de nascimento</InputLabel>
            <Input
              type="text"
              label="Nascido em"
              variant="outlined"
              value={birthDay} 
              onBlur={onChangeDate}
              name="brithDate"
              fullWidth
              inputComponent={BirthDate}
              className="MuiInputBase-formControl"
              startAdornment={
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              }
            />
             </FormControl>
            </MDBox>
          <MDBox px={3} mb={2}>
            <MDButton
              variant="gradient"
              color="info"
              fullWidth
              onClick={salvarDados}
            >
              Próximo passo
            </MDButton>
            {loading && (
             <MDBox sx={{ display: 'flex', justifyContent: "center"}}>
              <CircularProgress color="secondary"/>
             </MDBox>
            )}
          </MDBox>
          
        </MDBox>
      ) : null}
    </MDBox>
  )
}

export default SelectStepOne;