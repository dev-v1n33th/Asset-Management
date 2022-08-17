import React from 'react';
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

//custom imports
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function DepartmentsScreen() {
  return (
    <div>
        <DashboardLayout>
      <DashboardNavbar />
      <br />
      <MDBox borderRadius="lg" coloredShadow="info" py={0.01}>
        {/* <MDBox> */}
          <Grid container spacing={0.5}>
            Departments screen
          </Grid>
        {/* </MDBox> */}
      </MDBox>
      <Footer />
    </DashboardLayout>
    </div>
  )
}

export default DepartmentsScreen