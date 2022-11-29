// Material Dashboard 2 React components
import React, { useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );


  return {
    columns: [
      { Header: "membro", accessor: "author", width: "45%", align: "left" },
      { Header: "Vínculo", accessor: "function", align: "left" },
      { Header: "Realizado em", accessor: "employed", align: "center" },
      { Header: "Detalhes", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Daniel Guwama" email="john@creative-tim.com" />,
        function: <Job title="Líder" description="GC: TheVersedKeen" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <IconButton aria-label="delete" onClick={handleOpen}>
              <AddCircleIcon />
            </IconButton>
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Líder" description="GC: Faometu" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <IconButton aria-label="delete">
              <AddCircleIcon />
            </IconButton>
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Pastor" description="GC: Pumil" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <IconButton aria-label="delete" >
              <AddCircleIcon />
            </IconButton>
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Presbítero" description="GC: Gios" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <IconButton aria-label="delete">
              <AddCircleIcon />
            </IconButton>
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Pastor" description="CG: Ispan" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <IconButton aria-label="delete">
              <AddCircleIcon />
            </IconButton>
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Líder" description="CG: Urrion" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <IconButton aria-label="delete">
              <AddCircleIcon />
            </IconButton>
          </MDTypography>
        ),
      },
    ],
  };
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
}
