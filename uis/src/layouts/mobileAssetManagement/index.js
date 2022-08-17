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


function MobileAssetManagementScreen() {
 const title = "Mobile Assets"
    const coloumns=[
        {
            title: "ASSET NAME",
            field: "assetName",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "MANUFACTURE",
            field: "domain",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        
        {
            title: "MODEL",
            field: "type",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "PROCESSOR",
            field: "IpAddress",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "ASSIGNED TO",
            field: "manufacture",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        }
        
    ]
    const rows=[
      {
        assetName:"MOBILES",
        domain:"SAMSUNG",
        type:"q31",
        IpAddress:"Qualcomm Snapdragon Processor",
        manufacture:"RISHI",
        
      },
      {
        assetName:"MOBILES",
        domain:"APPLE",
        type:"e21",
        IpAddress:"Apple processors ",
        manufacture:"SAMANTHA",
        
      },
      {
        assetName:"TABLETS",
        domain:"SAMSUNG",
        type:"u21",
        IpAddress:"Qualcomm Snapdragon Processor",
        manufacture:"JOHNNY",
        
      },
      
    ]
  return (
    <DashboardLayout>
      <DashboardNavbar />
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

export default MobileAssetManagementScreen;
