import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Image } from "react-bootstrap";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import IconButton from "@mui/material/IconButton";
import { CardContent, Divider } from "@mui/material"; // import axios from 'axios';
import axios from "../../../../Uri";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
function BedandBill(props) {
  const [build, setBuild] = React.useState([]);
  useEffect(() => {
    axios
      .get("/bed/getAllBedsCount")
      .then((res) => {
        //console.log(res.data);
        setBuild(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //console.log(build.totalAvailbleBeds);
  const [payments, setPayments] = React.useState(0);
  let pendingPayments = [];
  let dueAmount = [];
  const [overDue, setOverDue] = React.useState([]);
  useEffect(() => {
    axios
      .get("/payment/getpendingPayment")
      .then((res) => {
        pendingPayments = res.data;
        setPayments(pendingPayments[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/guest/getDueAmountOnDashBoard")
      .then((res) => {
        dueAmount = res.data;
        setOverDue(dueAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* <Grid item xs={12} md={6} lg={3}>
        <h4>Overview</h4>
      </Grid> */}
      
      <Grid container spacing={3} >
      <Grid item xs>
          <MDBox mb={1.5}>
            <Card
              sx={{ minWidth: 100, minHeight: 25, background: "#800080" ,maxHeight:90}}
              style={{ backgroundColor: "#800080" }}
            >
              <CardContent sx={{ align: "center" }}>
                <Grid container>
                  <Grid item xs={6}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  
                  style={{ maxHeight:25 }}
                >
                  5
                </MDTypography>
                <MDTypography color="light" fontWeight="light"  style={{ maxHeight:25, fontSize:15 }}>
                 Total Assets
                </MDTypography>
                </Grid>
                <Grid item xs={6} align='right'style={{paddingTop: 2}}>
                  
                  {/* <Image  src="https://cdn-icons-png.flaticon.com/512/2503/2503625.png" height={50} width={50} align='right' /> */}
                </Grid>
                </Grid>
                {/* <Divider variant="insent" fullWidth /> */}
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs>
          <MDBox mb={1.5}>
            <Card
              sx={{ minWidth: 100, minHeight: 50, background: "#a52a2a" ,maxHeight:90 }}
              style={{ backgroundColor: "#a52a2a" }}
            >
              <CardContent sx={{ align: "center" }}>
                <Grid container>
                  <Grid item xs={10}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ maxHeight:25 }}
                >
                  1027
                </MDTypography>
                <MDTypography color="light" fontWeight="light"  style={{ maxHeight:25 , fontSize:15}}>
                  Digital Assets
                </MDTypography>
                </Grid>
                <Grid item xs={2} align='right'style={{paddingTop: 2}}>
                  
                  <Image  src="https://cdn-icons-png.flaticon.com/512/2503/2503625.png" height={50} width={50} align='right' />
                </Grid>
                </Grid>
                {/* <Divider variant="insent" fullWidth /> */}
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs>
          <MDBox mb={1.5}>
            <Card
              sx={{ minWidth: 100, minHeight: 50, background: "#2E8B57" ,maxHeight:90}}
              style={{ backgroundColor: "#2E8B57" }}
            >
              <CardContent sx={{ align: "center" }}>
                <Grid container>
                  <Grid item xs={10}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ maxHeight:25 }}
                >
                  8075
                </MDTypography>
                <MDTypography color="light" fontWeight="light"  style={{ maxHeight:25, fontSize:15 }}>
                  Hardware Assets
                </MDTypography>
                </Grid>
                <Grid item xs={2} align='right'style={{paddingTop: 2}}>
                  
                  <Image  src="https://www.advancedmobilegroup.com/hs-fs/hubfs/Images/hardware%20asset%20tracking.jpg?width=1106&height=756&name=hardware%20asset%20tracking.jpg" height={50} width={50} align='right' />
                </Grid>
                
                </Grid>
                {/* <Divider variant="insent" fullWidth /> */}
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs>
          <MDBox mb={1.5}>
            <Card
              sx={{ minWidth: 100, minHeight: 50, background: "#00008B" ,maxHeight:90}}
              style={{ backgroundColor: "#00008B" }}
            >
              <CardContent sx={{ align: "center" }}>
                <Grid container>
                  <Grid item xs={10}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ maxHeight:25 }}
                >
                  275
                </MDTypography>
                <MDTypography color="light" fontWeight="light"  style={{ maxHeight:25 , fontSize:15}}>
                  Software Assets
                </MDTypography>
                {/* <Divider variant="insent" fullWidth /> */}
                </Grid>
                <Grid item xs={2} align='right'style={{paddingTop: 2}}>
                  
                  <Image  src="https://pic.onlinewebfonts.com/svg/img_356190.png" height={50} width={50} align='right' />
                </Grid>

                </Grid>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs>
          <MDBox mb={1.5}>
            <Card
              sx={{ minWidth: 100, minHeight: 50, background: "#800080" ,maxHeight:90}}
              style={{ backgroundColor: "#800080" }}
            >
              <CardContent sx={{ align: "center" }}>
                <Grid container >
                  <Grid item xs={10}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ maxHeight:25 }}
                >
                  5
                </MDTypography>
                <MDTypography color="light" fontWeight="light"  style={{ maxHeight:25 , fontSize:15}}>
                 Mobile Assets
                </MDTypography>
                </Grid>
                {/* <Divider variant="insent" fullWidth /> */}
                <Grid item xs={2} align='right'style={{paddingTop: 2}}>
                  
                  <Image  src="https://uploads-ssl.webflow.com/60edc0a8835d5b4caf11f01c/61ceed1a7ab4eaf7c832c45b_Tracking-App-p-500.png" height={50} width={50} align='right' />
                </Grid>
                </Grid>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        
      </Grid>
    </div>
  );
}
export default BedandBill;
