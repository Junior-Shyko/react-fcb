import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';
import DataTableUser from 'components/FCB/Groups/dataUser';
import DataTableUsers from 'components/FCB/Groups/DataTableUsers';

import Box from '@mui/material/Box';
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
//ICONS
import DeleteIcon from '@mui/icons-material/Delete';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
//data-grid
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';

const StatusVinculo = () => {
  // console.log({props})
  // return (
  //   <MDBadge badgeContent={rows.vinculo} 
  //       color="success" variant="gradient" size="sm" />
  // )
};



function DataTableUse(props) {
  // console.log({props})
  const [tableData, setTableData] = useState([])
  
  const RemoveMember = () => {
  
    return (
      <GridToolbarContainer>
        <MDButton
          variant="text"
          color="error"
          size="large"
          onClick={() => {
              console.log('clicou')
          }}
        >
          <DeleteIcon />
        </MDButton>
      </GridToolbarContainer>
    );
  };
  
  const columns = [
    {
      field: 'nameUser',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'nameLink',
      headerName: 'Vínculo',
      width: 150,
      editable: true,
      renderCell: StatusVinculo,
    },
    {
      field: 'details',
      headerName: 'Ação',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: RemoveMember,
    },
  ];
  
  const getUsersGroups = async () => {
      api.get("user-group/"+props.idGroup)
      .then( (res) => {            
        setTableData(res.data)
      })
      .catch( (err) => {
        console.log({err})
      })
  }
  
  useEffect(() => {
    getUsersGroups();
  }, [])
  

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataTableUsers
        // listUp={props.situacionList}
        tables={tableData}/>
    </Box>
  );
}

export default DataTableUse;