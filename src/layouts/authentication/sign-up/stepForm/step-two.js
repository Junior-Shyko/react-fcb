import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import { api } from "./../../../../services/Api"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import InputMask from "react-input-mask"
import TextField from "@mui/material/TextField"
import FormHelperText from '@mui/material/FormHelperText'
import MDTypography from "components/MDTypography"
import FormControl from "@mui/material/FormControl"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"
import CircularProgress from '@mui/material/CircularProgress'
// import Card from "@mui/material/Card";
import MDButton from "components/MDButton"
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
// Componente desenvolvido
import SelectUf from "./../../../general/Select-uf"
import StepSuccess from "./Step-success"

function StepUserTwo(props) {
  console.log({props})
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
 
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [showModal, setShowModal] = useState(0);
  const [loading, setLoading] = useState(false);

  const onPhoneChange = (e: any) => setPhone(e.target.value);

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
 
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('district', data.bairro);
      setValue('city', data.localidade);
      setCity(data.localidade)
      setUf(data.uf);
      // setValue('uf', data.uf);
      // setFocus('addressNumber');
    });
  }



  function alterUf(uf) {
    setValue('uf', uf)
  }

  const onSubmit = async(data) => {
    setLoading(true)
    data['id'] = props.idUser
    
    api.post('up-user/' + props.idUser, data)
    .then((res) =>  {
      console.log({res})
      setShowModal(1)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
    })
    .catch((err) => {
      console.log({err})
    })
  }

  return (
    <MDBox px={3}>
      <MDBox sx={{ textAlign: "center" }}>
        <MDTypography
          variant="subtitle2"
        >Agora informa mais algumas informações de você.
        </MDTypography>
      </MDBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <InputMask
            mask="(99) 99999-9999"
            onBlur={onPhoneChange}
            disabled={false}
            maskChar=" "
            {...register("phone", { required: 'Telefone é obringatório'})}
          >
            {() =>
              <TextField
                type="text"
                label="Celular ou Whatsapp"
                ref="phone"
                name="phone"
                variant="outlined"
                fullWidth
                sx={{
                  mt: 1
                }}
              />
            }
          </InputMask>
          <FormHelperText className="Mui-error">{errors.phone?.message}</FormHelperText>
        </Box>
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
          <InputMask
            mask="99.999-999"
            // onChange={onPhoneChange}
            disabled={false}
            maskChar=" "
            {...register("cep", { maxLength: 10})}
            onBlur={checkCEP}
          >
          {() =>
            <TextField
              type="text"
              label="CEP"
              ref="cep"
              name="cep"
              variant="outlined"              
              fullWidth
              sx={{
                mt: 1
              }}                
            />
          }
          </InputMask>
        </MDBox>
        <MDBox mt={2}>
          <TextField
            type="text"
            label="Logradouro"
            ref="address"
            name="address"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            size="small"
            {...register("address", { minLength: 3 })}
          />
        </MDBox>
        <MDBox mt={2}>
          <TextField
            type="text"
            label="Número e complemento"
            variant="outlined"
            fullWidth
            size="small"
            name="number"
            {...register("number")}
          />
        </MDBox>
        <MDBox  mt={2}>
          <TextField
            type="text"
            label="Bairro"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            size="small"
            name="district"
            {...register("district")}
          />
        </MDBox>
        <MDBox mt={2}>
          <TextField
            type="text"
            label="Cidade"
            defaultValue={city}
            variant="outlined"
            fullWidth
            size="small"
            name="city"
            InputLabelProps={{ shrink: true }}
            {...register("city")}
          />
        </MDBox>
        <MDBox>
          <SelectUf uf={alterUf} default={uf}/>
          <MDInput type="hidden" {...register("uf")}/>
        </MDBox>
        <MDBox>
          <TextField
            type="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            name="email"
            {...register("email")}/>
        </MDBox>
        <MDBox mt={2}>
          <TextField
            type="password"
            label="Senha"
            variant="outlined"
            fullWidth 
            name="password"
            {...register("password")}
          />
        </MDBox>

        <MDBox px={3} m={2}>
          <MDButton
            variant="gradient"
            color="info"
            fullWidth
            type="submit"
          >
            Finalizar registro
          </MDButton>
          {loading && (
            <MDBox sx={{ display: 'flex', justifyContent: "center"}}>
            <CircularProgress color="secondary"/>
            </MDBox>
          )}
        </MDBox>

      </form>
      
     {showModal > 0 && (
      <StepSuccess open={true}/>
      //  <Alert severity="success">This is a success alert — check it out!</Alert>
     )}
      
    </MDBox>
  );
}
//20221230012398 - Lorany
export default StepUserTwo;