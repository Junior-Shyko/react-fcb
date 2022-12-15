import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
//data-grid
import { DataGrid, GridToolbarContainer, GridRenderEditCellParams} from '@mui/x-data-grid';

const CustomToolbar = (props) => {
  console.log({props})
  // const handleGoToPage1 = () => console.log({props});
  let redirect = "/details-groups/"+props.id;
  return (
    <GridToolbarContainer>
      <Link to={redirect} relative="path">
        <Button><AddCircleIcon /> </Button>
      </Link>
    </GridToolbarContainer>
  );
};


var columns = [
  {
      field: 'name',
      headerName: 'Nome do Grupo',
      editable: false,
      minWidth: 250 
  },
  {
      field: 'created_at',
      headerName: 'Criado',
      editable: false,
      minWidth: 150
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
  <div style={{ height: 300, width: '100%' }}>
    <DataGrid
      rows={props.tables}
      columns={columns}
      pageSize={5}
      rowHeight={38}
    />
  </div>
)

}

export default DataTable;