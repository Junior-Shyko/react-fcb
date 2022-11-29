// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import Button from '@mui/material/Button';
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarContainer} from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
        <Button onClick={handleGoToPage1}><AddCircleIcon /></Button>
      </GridToolbarContainer>
    );
  };

  const columns = [
    {
      field: 'realization',
      headerName: 'Realizado',
      width: 120,
      editable: false,
    },
    {
      field: 'firstName',
      headerName: 'Membro',
      width: 150,
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
      width: 150,
      editable: false,
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

  const rows = [
    { id: 1, lastName: 'Líder', firstName: 'Jon', gc: 'Gios' , realization: '19/11/2022'},
    { id: 2, lastName: 'Pastor', firstName: 'Cersei', gc: 'Solao' , realization: '05/11/2022' },
    { id: 3, lastName: 'Presbítero', firstName: 'Jaime', gc: 'Keyce'  , realization: '05/11/2022'},
    { id: 4, lastName: 'Líder', firstName: 'Arya', gc: 'Mayhe'  , realization: '19/11/2022'},
    { id: 5, lastName: 'Presbítero', firstName: 'Daenerys', gc: 'Luoln'  , realization: '04/11/2022'},
    { id: 6, lastName: 'Líder', firstName: null, gc: 'Ispan' , realization: '05/11/2022' },
    { id: 7, lastName: 'Líder', firstName: 'Ferrara', gc: 'Bokdo' , realization: '19/11/2022'},
    { id: 8, lastName: 'Líder', firstName: 'Rossini', gc: 'Faometu' , realization: '19/11/2022' },
    { id: 9, lastName: 'Pastor', firstName: 'Harvey', gc: 'Yamkiog' , realization: '04/11/2022' },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
      <Grid item xs={12}>
      <Card>
      <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Lista de Grupo de Convívio
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
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
                </MDBox>
        </Card>
        </Grid>

        </Grid>
        </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
