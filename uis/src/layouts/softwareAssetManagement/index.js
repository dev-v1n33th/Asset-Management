import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

//custom imports
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MtTable from "layouts/MTTable/mtTable";
// import InNotice from "./InNotice";
//import Actions from "./components/Actions";
//import TabPanel from "./components/Tab"


function SoftwareAssetManagementScreen() {
    const title="Software Assets";
    const coloumns=[
        {
            title: "LISCENSE",
            field: "assetName",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "PRODUCT KEY",
            field: "domain",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        
        {
            title: "EXPIRATION DATE ",
            field: "type",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "LISCENSED TO",
            field: "IpAddress",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "MANUFACTURER",
            field: "manufacture",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        // {
        //     title: "BUSSINESS SOFTWARE",
        //     field: "model",
        //     headerStyle: {
        //       backgroundColor: "#1E90FF",
        //       color: "white",
        //     },
        // },
        // {
        //     title: "SELLER SOFTWARE",
        //     field: "location",
        //     headerStyle: {
        //       backgroundColor: "#1E90FF",
        //       color: "white",
        //     },
        // },
    ]
    const rows=[
      {
        assetName:"PHOTOSHOP",
        domain:"b700073t536-83gbdy763-372237",
        type:"Monitor",
        IpAddress:"RUTHERFORD",
        manufacture:"VMWare",
        // model:"",
        // location:""

      },
      {
        assetName:"ACROBAT",
        domain:"b700073t536-83gbdy763-372237",
        type:"Monitor",
        IpAddress:"CLAIR",
        manufacture:"VMWare",
        // model:"",
        // location:""

      },
      {
        assetName:"IN-DESIGN",
        domain:"b700073t536-83gbdy763-372237",
        type:"Monitor",
        IpAddress:"ROBERT",
        manufacture:"VMWare",
        // model:"",
        // location:""

      },
      {
        assetName:"OFFICE",
        domain:"b700073t536-83gbdy763-372237",
        type:"Monitor",
        IpAddress:"JOHNNY",
        manufacture:"VMWare",
        // model:"",
        // location:""

      },
      
      
    ]
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <br />
      <MDBox borderRadius="lg" coloredShadow="info" py={0.01}>
        {/* <MDBox> */}
          <Grid container spacing={0.5}>
          <MtTable 
                   coloumns={coloumns}  
                   rows={rows}
                   title={title}
                   />
          </Grid>
        {/* </MDBox> */}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SoftwareAssetManagementScreen;
