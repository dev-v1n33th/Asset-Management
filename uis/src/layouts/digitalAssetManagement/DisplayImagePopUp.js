import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Button from "@mui/material/Button";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
// import { borderRadius } from "@mui/system";
// import { Link } from "react-router-dom";
// import RecentTransactions from "layouts/dashboard/components/summaryTables/Recenttransactions";
// import TransactionHistory from "./TransactionHistoryModule/TransactionHistory";
// import RecordpaymentsinPopUp from "./GuestPaymentModule/GuestpaymentsinPopUp";
// import Guestdetails from "./GuestDetails/DOMguestdetails/guestdetails";
// import GuestDetailsIndex from "./GuestDetails";
// import AppBar from "@mui/material/AppBar";
// import CheckOut from "./GuestCheckoutModule/CheckOut";
// import "./GuestPopUp.css";
import AppBar from '@mui/material/AppBar';
// import GuestPic from './GuestPicture/GuestPic';
import { useNavigate } from "react-router-dom";
// import EditGuestDetailsScreen from "../EditGuestDetails";
// import EditGuestPopUp from "./EditGuestPopUp";
// import AddImageForm from "./AddImageForm";



export default function DisplayImagePopUp({open,closeSingleImagePopUpHandler,singleImageObj}) {
//   const [showEditGuest , setShowEditGuest] = useState(false);
  // console.log('heeeeeeeeeeeeeee')
//   const navigate = useNavigate();

//   const editGuestHandler = () =>{
//     // navigate("/editGuest")
//     handleCloseGuestModalWindow();
//     setShowEditGuest(!showEditGuest);
//   }
  // console.log(props.TotalAmountByGuest)
//   console.log(props.GuestPic)
  return (
    <div>
      {/* <EditGuestPopUp guestdetails={props.GuestDetails} showEditGuest={showEditGuest} editGuestHandler={editGuestHandler} */}
                      {/* // handleCloseGuestModalWindow={handleCloseGuestModalWindow} */}
                      {/* /> */}
      <Dialog open={open} onClose={closeSingleImagePopUpHandler} maxWidth="lg">
          {/* <MDButton
            width="20%"
            variant="contained"
            color="info"
            size="large"
            justify="center"
            style={{ borderRadius: 0 }}
          >
            Add Image
          </MDButton> */}

          <DialogContent>
         
           
           {/* <AddImageForm setAllImages={props.setAllImages}/> */}
           <img
                        src={`data:image/jpeg;base64,${singleImageObj.data}`}
                            // src={item.data}
                            class="imagen"
                            alt="Medicina"
                            style={{ paddingTop: "10px", paddingLeft: "10px" ,maxHeight:200 , maxWidth:200}}
                        />
            
           
          </DialogContent>
          <DialogActions>
            <Grid container style={{ display: "flex" }}>
              <Grid item xs={6}>
                <MDButton
                  width="20%"
                  variant="contained"
                  color="info"
                  size="large"
                  justify="center"
                  style={{ borderRadius: 10 }}
                  onClick={closeSingleImagePopUpHandler}
                >
                  Close
                </MDButton>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      
        
      
    </div>
  );
}
