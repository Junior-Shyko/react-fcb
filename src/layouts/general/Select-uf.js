import React, { useState } from "react"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import InputAdornment from "@mui/material/InputAdornment"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Grid from "@mui/material/Grid"
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography"
import MDBox from "components/MDBox"

function SelectUf(props) {
  const [valueUf, setValueUf] = useState(props.default)
  console.log(props.default)
  const handleChangeUf = (e) => {
    console.log(e.target.value)
    props.uf(e.target.value)
    setValueUf(e.target.value)
  }

  return (
    <Grid item md={12} xs={12} lg={12}>
    <MDTypography id="simple-select-label"
    variant="caption">Estado</MDTypography>

    
    <MDBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Select
        labelId="simple-select-label"
        id="simple-select-label"
        value={valueUf}
        label="Estado"
        variant="outlined"
        onChange={handleChangeUf}
        fullWidth
        name="uf"
        defaultValue={valueUf}
       sx={{height:40}}
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
    </Grid>
  )
}

export default SelectUf;