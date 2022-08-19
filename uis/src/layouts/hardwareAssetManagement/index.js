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


function HardwareAssetManagementScreen() {
    const title="Hardware Assets";
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
            title: "DOMAIN",
            field: "domain",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        
        {
            title: "TYPE",
            field: "type",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "IP ADDRESS",
            field: "IpAddress",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "MANUFACTURE",
            field: "manufacture",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "MODEL",
            field: "model",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "LOCATION",
            field: "location",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
    ]
    const rows=[
        {
          assetName:"Acer Monitor",
          domain:"Lansweeper",
          type:"Monitor",
          IpAddress:"192.168.1.104",
          manufacture:"VMWare",
          model:"",
          location:""
  
        },
        {
          assetName:"DELL",
          domain:"Lansweeper",
          type:"Monitor",
          IpAddress:"10.10.10.104",
          manufacture:"Cisco IOS",
          model:"",
          location:""
  
        },
        {
          assetName:"C2906X",
          domain:"LS",
          type:"Windows",
          IpAddress:"192.168.2.139",
          manufacture:"DELL Inc",
          model:"",
          location:""
  
        },
        {
          assetName:"Acer Monitor",
          domain:"Lansweeper",
          type:"Monitor",
          IpAddress:"192.168.1.104",
          manufacture:"VMWare",
          model:"",
          location:""
  
        },
        {
          assetName:"FUJITSU SIEMENS",
          domain:"Lansweeper",
          type:"Monitor",
          IpAddress:"192.168.1.106",
          manufacture:"FUJITSU",
          model:"",
          location:""
  
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

export default HardwareAssetManagementScreen;
