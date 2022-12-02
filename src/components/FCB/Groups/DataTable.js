import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
//data-grid
import { DataGrid, GridToolbarContainer} from '@mui/x-data-grid';


const CustomToolbar = () => {
  
  const handleGoToPage1 = () => console.log('clicou');

  return (
    <GridToolbarContainer>
      <Button onClick={handleGoToPage1}><AddCircleIcon /></Button>
    </GridToolbarContainer>
  );
};


var columns = [
  {
    field: 'name',
    headerName: 'Nome do Grupo',
    editable: false,
    width: 150 
  },
  {
      field: 'created_at',
      headerName: 'Criado',
      editable: false,
      width: 150 
  },
  {
      field: 'datails',
      headerName: 'Detalhes',
      description: 'Click para saber mais informações desse grupo',
      sortable: false,
      width: 100,
      renderCell: CustomToolbar,
    },
];

const DataTable = (props) => {

return (
  <div style={{ height: 700, width: '100%' }}>
    <DataGrid
      rows={props.tables}
      columns={columns}
      pageSize={12}
    />
  </div>
)

}

export default DataTable;