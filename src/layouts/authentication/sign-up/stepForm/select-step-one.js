import React, { useState, useEffect } from "react"
import InputMask from "react-input-mask"
import { useSnackbar } from "notistack"
import { api } from "./../../../../services/Api"
// Material Dashboard 2 React components
import FormControl from '@mui/material/FormControl'
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import TextField from '@mui/material/TextField';

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDButton from "components/MDButton"

function SelectStepOne(props) {
 
  //PARA O USO DO SELECT
  const [nameUser, setNameUser] = useState('')
  const [nameGroup, setNameGroup] = useState(props.group)
  const [stepOne, setStepOne] = useState(true);
  const [idGroup, setIdGroup] = useState('')
  const [idUser, setIdUser] = useState('')
  const [showName, setShowName] = useState(false)
  const [birthDay, setBirthDay] = useState('')
  const { enqueueSnackbar } = useSnackbar()

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
    if (idGroup == "" || nameUser == "" || birthDay == "") {
      enqueueSnackbar('Ops!!! Todos os campos são obrigatórios.', {
        autoHideDuration: 3500,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
    }

    var dataPost = {
      group_id: idGroup,
      name: nameUser,
      birthDate: birthDay
    };
    console.log({ dataPost })
    api.post('create-user', dataPost)
      .then((res) => {
        console.log({ res })
        props.stepOne(false,'Mais uma etapa!')
        setIdUser(res.data.id)
        props.idUser(res.data.id)
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

  const showSel = () => {
    props.stepOne(false)
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
           
            <TextField
              label="Nome Completo"
              fullWidth
              onChange={(e) => setNameUser(e.target.value)}
              value={nameUser}
            />
            <InputMask
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
            </InputMask>
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

          </MDBox>
          
        </MDBox>
      ) : null}
    </MDBox>
  )
}

export default SelectStepOne;