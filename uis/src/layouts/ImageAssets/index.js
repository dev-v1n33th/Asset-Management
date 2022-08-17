import React from 'react'
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

//custom imports
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ImageAssets from './ImageAssets';
import Card from "@mui/material/Card";

function ImageAssetsScreen() {
  return (
    <div> <DashboardLayout>
    <DashboardNavbar />
    <br />
    <Card >
    <MDBox borderRadius="lg" coloredShadow="info" py={0.01}>
      {/* <MDBox> */}
        {/* <Grid container spacing={0.5}> */}
        <ImageAssets />
        {/* </Grid> */}
      {/* </MDBox> */}
    </MDBox>
    </Card>
    <Footer />
  </DashboardLayout></div>
  )
}

export default ImageAssetsScreen