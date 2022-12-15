import React, { useEffect, useState } from "react";
import DeleteGroup from './modal/DeleteGroup';
import MDButton from "components/MDButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from "@mui/material/Grid";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
//data-grid
import { DataGrid, GridToolbarContainer} from '@mui/x-data-grid';

const CustomToolbar = (props) => {
  let redirect = "/details-groups/"+props.id;
  let groud_id = props.id;
  return (
    <GridToolbarContainer>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Link to={redirect} relative="path">
            <MDButton
              variant="text"
              color="info"
              size="large"
              title="Mais detalhes do grupo"
            >
              <AddCircleIcon />
            </MDButton>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <DeleteGroup open={true} idGroup={groud_id}/>
        </Grid>
      </Grid>
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
      width: 120,
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