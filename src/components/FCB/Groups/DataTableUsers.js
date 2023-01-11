import React from "react";

import ModalDeleteUserGroup from './modal/ModalDeleteUserGroup';
import MDBadge from "components/MDBadge";

//data-grid
import { DataGrid, GridToolbarContainer, GridRenderEditCellParams} from '@mui/x-data-grid';

const StatusVinculo = (props) => {
  
  return (
    <MDBadge 
      badgeContent={props.row.nameLink} color="success"
      variant="gradient" size="sm"
    />
  )
};

const RemoveMember = (props) => {
  return (
    <GridToolbarContainer>      
      <ModalDeleteUserGroup
        open={true}
        id={props.id}
        name={props.row.nameUser}
      />
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