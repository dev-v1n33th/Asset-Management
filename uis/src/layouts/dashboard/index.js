import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import BedandBill from "layouts/dashboard/components/BedandBIll";
import Expenditures from "layouts/dashboard/components/expenditures";

//import PendingPayments from "layouts/dashboard/components/summaryTables/PendingPayments";
import AvailabeRooms from "layouts/dashboard/components/summaryTables/AvailableRooms";
//import UpcomingCheckouts from "layouts/dashboard/components/summaryTables/UpcomingCheckouts";
import RecentTransactions from "layouts/dashboard/components/summaryTables/Recenttransactions";
import ApChart from "./components/ApexChart/chart";
import { Navigate } from "react-router-dom";
import './index.css'

function Dashboard({ authorized }) {
  // if (!authorized) {
  //   return <Navigate to="/authentication/sign-in" />;
  // }
  const state = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['PNG', 'JPG', 'VIDEOS', 'ARTICALS', 'DOCUMENTS', 'PRESENTATIONS', 'PHOTOS',
          'SPREAD SHEETS', 'DESIGN FILES', 'GRAPHICS'
        ],
      }
    }
  }
  const state2 = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['  WINDOWS LISCENCE', 'LINUX', 'O365 OFFICE LISCENCE', 'ACROBAT READER', 'PHOTOSHOP', 'SAP GROUP SOFTWARE', 'BUSSINESS SOFTWARE',
          'SELLER SOFTWARE', 'DEVELOPED SOFTWARE', 'SUPPORTED SOFTWARE'
        ],
      }
    }
  }
  const state3 = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60]
    },
      // {
      //   name: 'Revenue',
      //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      // },
      //  {
      //   name: 'Free Cash Flow',
      //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      // }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['KEYBOARDS', 'MOUSE', 'LAPTOPS', 'MOBILES', 'ROUTERS', 'SWITCHES', 'VIRTUAL MACHINES', 'COMPUTERS'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  }

  const state4 = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61]
    },
      // {
      //   name: 'Revenue',
      //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      // },
      //  {
      //   name: 'Free Cash Flow',
      //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      // }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['SERVER UNIT', 'DATABASE UNIT', 'WIRELESS TAGS', 'GSM', 'GPS'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  }


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BedandBill total="7" info="" more="More Info" />
          </Grid>

        </Grid>

        {/* <h4 style={{ paddingTop: "10px" }}> Total Buildings Summary</h4> */}
        <MDBox mt={5}>
          <Grid container spacing={2} rowSpacing={10}>


            <Grid item xs={6}>
              <h6 style={{ paddingTop: "5px", textAlign: 'center', paddingRight: "100px" }}> Digital Assets</h6>
              <Card sx={{ maxWidth: 475, minHeight: 400 }}>
                <ApChart state={state} />
                {/* <h6 alighn='center'>Digital Assets</h6> */}
                {/* <MDTypography
                      fontWeight="bold"
                       textTransform="capitalize"
                      variant="h6"
                     sx={{align:'center'}}
                     noWrap >Digital Assets</MDTypography> */}
              </Card>

            </Grid>
            <Grid item xs={6}>
              <h6 style={{ paddingTop: "5px", textAlign: 'center', paddingRight: "100px" }}> Hardware Assets</h6>
              <Card sx={{ maxWidth: 475, minHeight: 400 }}>
                <ApChart state={state3} title={"HARDWARE ASSETS"} />
              </Card>

            </Grid>
            <Grid item xs={6}>
              <h6 style={{ paddingTop: "5px", textAlign: 'center', paddingRight: "100px" }}> Software Assets</h6>
              <Card sx={{ maxWidth: 475, minHeight: 400 }}>
                <ApChart state={state2} title={"SOFTWARE ASSETS"} />
              </Card>

            </Grid>
            <Grid item xs={6}>
              <h6 style={{ paddingTop: "5px", textAlign: 'center', paddingRight: "100px" }}> Mobile Assets</h6>
              <Card sx={{ maxWidth: 475, minHeight: 400 }}>
                <ApChart state={state4} title={"MOBILE ASSETS"} />
              </Card>

            </Grid>



          </Grid>
        </MDBox>
        <MDBox mt={5}>
          <Grid container spacing={2}>

            {/* <Grid item xs={6}>
              <Card>
                <MDBox
                  mx={3}
                  mt={-3}
                  py={1}
                  px={2}
                  variant="gradient"
                  sx={{ background: "#1E90FF" }}
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    UPCOMING CHECKOUTS
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <UpcomingCheckouts />
                </MDBox>
              </Card>
            </Grid> */}
            {/* <Grid item xs={6}>
              <Card>
                <MDBox
                  mx={3}
                  mt={-3}
                  py={1}
                  px={2}
                  variant="gradient"
                  sx={{ background: "#1E90FF" }}
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    RECENT TRANSACTIONS
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <RecentTransactions />
                </MDBox>
              </Card>
            </Grid> */}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
