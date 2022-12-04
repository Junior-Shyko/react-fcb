import React, { useEffect, useState } from "react";
import { api } from '../../../services/Api';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const SelectMember = () => {

  const [leader, setLeader] = useState();

  const selectChange = (event) => {
    setLeader(event.target.value);
  }
  return (
    <FormControl fullWidth sx={{ mt: 1 }}>
      <InputLabel>Selecione</InputLabel>
      <Select
        label="Selecione um membro"
        value={leader}
        onChange={selectChange}
        sx={{
          minHeight: '40px'
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )

}

export default SelectMember;