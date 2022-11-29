// @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import Button from '@mui/material/Button';
import Card from "@mui/material/Card"
// import MDTypography from "components/MDTypography";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarContainer} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const CustomToolbar = () => {
  
    const handleGoToPage1 = () => console.log('clicou');
  
    return (
      <GridToolbarContainer>
        <Button onClick={handleGoToPage1}>Go to page 1</Button>
      </GridToolbarContainer>
    );
  };

  const columns = [
    {
      field: 'firstName',
      headerName: 'Membro',
      width: 350,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'Vínculo',
      width: 150,
      editable: false,
    },
    {
      field: 'gc',
      headerName: 'Nome Grupo',
      width: 200,
      editable: false,
    },
    {
      field: 'datails',
      headerName: 'Detalhes',
      description: 'Click para saber mais informações desse grupo',
      sortable: false,
      width: 160,
      renderCell: CustomToolbar,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Líder', firstName: 'Jon', gc: 'Gios' },
    { id: 2, lastName: 'Pastor', firstName: 'Cersei', gc: 'Solao' },
    { id: 3, lastName: 'Presbítero', firstName: 'Jaime', gc: 'Keyce' },
    { id: 4, lastName: 'Líder', firstName: 'Arya', gc: 'Mayhe' },
    { id: 5, lastName: 'Presbítero', firstName: 'Daenerys', gc: 'Luoln' },
    { id: 6, lastName: 'Líder', firstName: null, gc: 'Ispan' },
    { id: 7, lastName: 'Líder', firstName: 'Ferrara', gc: 'Bokdo' },
    { id: 8, lastName: 'Líder', firstName: 'Rossini', gc: 'Faometu' },
    { id: 9, lastName: 'Pastor', firstName: 'Harvey', gc: 'Yamkiog' },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
        <Card>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            // disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            
          />
        </Box>
        </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
