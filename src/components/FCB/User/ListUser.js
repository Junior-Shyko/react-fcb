import React from 'react';
// Material Dashboard 2 React components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "components/MDButton";
// import { Container } from './styles';

function ListUser() {
  return (
    <DashboardLayout >
        <DashboardNavbar />
        <MDBox
        color="white"
        bgColor="info"
        variant="gradient"
        borderRadius="lg"
        shadow="lg"
        opacity={1}
        p={2}
        >
        Box
        </MDBox>
    </DashboardLayout>
  )
}

export default ListUser;