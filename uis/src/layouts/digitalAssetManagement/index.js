import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
// import Lin
import { Link } from 'react-router-dom';

//custom imports
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MtTable from "layouts/MTTable/mtTable";
// import InNotice from "./InNotice";
//import Actions from "./components/Actions";
//import TabPanel from "./components/Tab"


function DigitalAssetManagementScreen() {
 const title = "Digital Assets"
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
            title: "TYPE",
            field: "domain",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        
        {
            title: "OWNER",
            field: "type",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
          title: "LOCATION",
          field: "url",
          render: rowData => <Link to="/{rowData.url}">view</Link>,
          headerStyle: {
            backgroundColor: "#1E90FF",
            color: "white",
          },
      },
        {
            title: "UPDATED ON",
            field: "IpAddress",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
          title: "CREATED ON",
          field: "manufacture",
          headerStyle: {
            backgroundColor: "#1E90FF",
            color: "white",
          },
      },
        {
          title: "ASSIGNED TO",
          field: "model",
          headerStyle: {
            backgroundColor: "#1E90FF",
            color: "white",
          },
      },
        
        
        
    ]
    const rows=[
      {
        assetName:"IMAGE",
        domain:"JPG",
        type:"",
        url:"https://stackoverflow.com/questions/40016202/reactjs-link-tag-uncaught-referenceerror-link-is-not-defined",
        IpAddress:"07-07-2022",
        manufacture:"07-07-2022",
        model:"ROBERT",
        // location:""

      },
      {
        assetName:"IMAGE",
        domain:"JPG",
        type:"",
        url:"",
        IpAddress:"06-04-2022",
        manufacture:"06-04-2022",
        model:"JOHN",
        // location:""

      },
      {
        assetName:"DOCUMENT",
        domain:"PDF",
        type:"",
        url:"",
        IpAddress:"09-08-2022",
        manufacture:"09-08-2022",
        model:"ADOM",
        // location:""

      },
      {
        assetName:"DOCUMENT",
        domain:"WORD",
        type:"",
        url:"",
        IpAddress:"03-05-2022",
        manufacture:"03-05-2022",
        model:"WILL SMITH",
        // location:""

      },
      {
        assetName:"VIDEO",
        domain:"MP4",
        type:"",
        url:"",
        IpAddress:"05-07-2022",
        manufacture:"05-07-2022",
        model:"CHRISTENE",
        // location:""

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

export default DigitalAssetManagementScreen;
