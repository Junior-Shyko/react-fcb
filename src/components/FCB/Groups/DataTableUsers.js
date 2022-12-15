import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SimpleDialog from './SimpleDialog';


// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
//data-grid
import { DataGrid, GridToolbarContainer, GridRenderEditCellParams} from '@mui/x-data-grid';

const StatusVinculo = () => {
  
  // return (
  //   <MDBadge badgeContent={rows.vinculo} 
  //       color="success" variant="gradient" size="sm" />
  // )
};

const RemoveMember = (props) => {
  console.log({props})
  return (
    <GridToolbarContainer>      
      <SimpleDialog open={true} id={props.id} name={props.row.nameUser}/>
    </GridToolbarContainer>
  );
};


var columns = [
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
    field: 'datails',
    headerName: 'Detalhes',
    description: 'Click para saber mais informações desse grupo',
    sortable: false,
    width: 100,
    renderCell: RemoveMember,
  },
];

const DataTable = (props) => {

return (
  <div style={{ height: 400, width: '100%' }}>
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