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
// import { Container } from './styles';

function ListUser() {
  const { columns, rows } = useState([]);

  const getAllUsers = () => {
    api.get('user/count')
    .then((res) => {
      console.log({res})
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
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </MDBox>
    </DashboardLayout>
  )
}

export default ListUser;