import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
import PageLayout from "./../../../../examples/LayoutContainers/PageLayout";
// import colors from "../../../assets/theme/base/colors";
// import MDTypography from "../../MDTypography";

function StepUserTwo() {
  return (
    <PageLayout >
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        <Button>Save</Button>
      </Box>
    </PageLayout>
  );
}

export default StepUserTwo;