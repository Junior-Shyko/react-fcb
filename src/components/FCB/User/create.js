import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
import BasicLayout from "../../../layouts/authentication/components/BasicLayout";
// import colors from "../../../assets/theme/base/colors";
// import MDTypography from "../../MDTypography";
import bgImage from "../../../assets/images/create.jpg";

function CreateUser() {
  return (
    <BasicLayout image={bgImage}>
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        <Button>Save</Button>
      </Box>
    </BasicLayout>
  );
}

export default CreateUser;
