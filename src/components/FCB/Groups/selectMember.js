import React, { useEffect, useState } from "react";
import { api } from '../../../services/Api';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const SelectMember = (props) => {
  console.log({props})
  const [leader, setLeader] = useState();
  const [nameVinc, setNameVinc] = useState();

  const selectChange = (event) => {
    setNameVinc(event.target.value);
  }

  const listMember = () => {
    api.get('list-member/'+props.type)
    .then((res) => {
      console.log({res})
      setLeader(res.data)
    })
    .catch((err) => {
      console.log({err})
    })
  }

  useEffect(() => {
    listMember()
  }, []);

  return (
    <>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel>Selecione um membro</InputLabel>
        <Select
          label="Selecione um membro"
          value={nameVinc}
          onChange={selectChange}
          sx={{
            minHeight: '40px'
          }}
        >
        {
          leader.map(element => {
            return (
              <MenuItem key={element.id} value={element.id}>
                {element.name}
              </MenuItem>
            )
          })
        }
        </Select>
      </FormControl>
    </>
  )

}

export default SelectMember;