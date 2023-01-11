import React, { useEffect, useState } from "react";
import { api } from "./../../../services/Api"
// @mui material components
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
// Material Dashboard 2 React components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "components/MDButton";
// Material Dashboard 2 React examples
import DataTable from "./../../../examples/Tables/DataTable";
import columnsUsers from "./columnsUsers";
// import { Container } from './styles';

function ListUser() {
  const [ rows, setRows ] = useState([]);
  //Definição das colunas da tabela
  const { columns } = columnsUsers();

  const getAllUsers = () => {
    api.get('user/all')
    .then((res) => {
      console.log({res})
      setRows(res.data)
    })
    .catch((err) => {
      console.log({err})
    })
  }

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <DashboardLayout >
        <DashboardNavbar />
          <MDBox
            color="dark"
            bgColor="white"
            variant="gradient"
            borderRadius="lg"
            shadow="lg"
            coloredShadow="primary"
            opacity={1}
          >
            <Grid item xs={12} md={12} lg={12}>
              <MDBox>
                <DataTable
                  table={{ columns, rows }}
                  showTotalEntries={true}
                  isSorted={true}
                  noEndBorder
                  entriesPerPage={true}
                  canSearch={true}
                />
              </MDBox>
            </Grid>
          </MDBox>
    </DashboardLayout>
  )
}

export default ListUser;