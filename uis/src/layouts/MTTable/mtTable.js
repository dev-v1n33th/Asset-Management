import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

// import axios from "axios";
import axios from "../../Uri";
// import { height, width } from "@mui/system";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { string } from "prop-types";

function MtTable(props) {
  let userData = JSON.parse(sessionStorage.getItem("userdata"));
  let userId = userData.data.userId;
  console.log(userId);

  const [data, setData] = useState([]);

  const columnss = [
  


    {
      title: "NUMBER",
      field: "number",
      type: "text",

      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    
    },
    {
        title: "STATE",
        field: "state",
        type: "text",
  
        headerStyle: {
          backgroundColor: "#1E90FF",
          color: "white",
        },
       
      },
    {
      title: "INCIDENT ORIGIN",
      field: "incidentOrigin",
      type: "text",

      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    //   validate: (rowData) => {
    //     if (rowData.userName === undefined || rowData.userName === "") {
    //       return "Required";
    //     } else if (!rowData.userName.match(/[^0-9]/g)) {
    //       return " Enter Valid Name";
    //     }

    //     return true;
    //   },
    },
    
    
    // {
    //   title: "Role",
    //   field: "userType",
    //   lookup: { manager: "Manager" },
    //   headerStyle: {
    //     backgroundColor: "#1E90FF",
    //     color: "white",
    //   },
    //   validate: (rowData) => {
    //     if (rowData.userType === undefined || rowData.userType === "") {
    //       return "Required";
    //     } 
        
    //     // else if (!rowData.userType.match(/[^0-9]/g)) {
    //     //   return " Enter Valid Name";
    //     // }

    //     return true;
    //   },
      
   // },

    {
      title: "TITLE",
      field: "title",

      headerStyle: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
    //   validate: (rowData) => {
    //     if (
    //       rowData.userPhoneNumber === undefined ||
    //       rowData.userPhoneNumber === ""
    //     ) {
    //       return "Required";

    //       // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
    //       //   return" Please enter valid Phone number"
    //     } else if (
    //       rowData.userPhoneNumber.length < 10 ||
    //       rowData.userPhoneNumber.length > 10
    //     ) {
    //       return " Please enter valid mobile number";
    //     }
    //     return true;
    //   },
    },
    {
        title: "ASSIGNED-TO",
        field: "assignedTo",
  
        headerStyle: {
          backgroundColor: "#1E90FF",
          color: "white",
        },
      },
      {
        title: "CATEGORY",
        field: "category",
  
        headerStyle: {
          backgroundColor: "#1E90FF",
          color: "white",
        },
        // validate: (rowData) => {
        //   if (
        //     rowData.userPhoneNumber === undefined ||
        //     rowData.userPhoneNumber === ""
        //   ) {
        //     return "Required";
  
        //     // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
        //     //   return" Please enter valid Phone number"
        //   } else if (
        //     rowData.userPhoneNumber.length < 10 ||
        //     rowData.userPhoneNumber.length > 10
        //   ) {
        //     return " Please enter valid mobile number";
        //   }
        //   return true;
        // },
      },
    {
        title: "SUB CATEGORY",
        field: "subCategory",
  
        headerStyle: {
          backgroundColor: "#1E90FF",
          color: "white",
        },
        
        // validate: (rowData) => {
        //   if (
        //     rowData.userPhoneNumber === undefined ||
        //     rowData.userPhoneNumber === ""
        //   ) {
        //     return "Required";
  
        //     // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
        //     //   return" Please enter valid Phone number"
        //   } else if (
        //     rowData.userPhoneNumber.length < 10 ||
        //     rowData.userPhoneNumber.length > 10
        //   ) {
        //     return " Please enter valid mobile number";
        //   }
        //   return true;
        // },
      },
      {
        title: "SITE",
        field: "site",
  
        headerStyle: {
          backgroundColor: "#1E90FF",
          color: "white",
        },
      },
      // {
      //   title: "Due Amount",
      //   field: "dueAmount",
  
      //   headerStyle: {
      //     backgroundColor: "#1E90FF",
      //     color: "white",
      //   },
    //     validate: (rowData) => {
    //       if (
    //         rowData.userPhoneNumber === undefined ||
    //         rowData.userPhoneNumber === ""
    //       ) {
    //         return "Required";
  
    //         // } else if(rowData.userPhoneNumber.match(/[^0-9]/g)){
    //         //   return" Please enter valid Phone number"
    //       } else if (
    //         rowData.userPhoneNumber.length < 10 ||
    //         rowData.userPhoneNumber.length > 10
    //       ) {
    //         return " Please enter valid mobile number";
    //       }
    //       return true;
    //     },
    //  },
  ];
  const rows =[
    {
      number: 301,
      state: "NEW",
      incidentOrigin:"WEB",
      title:" I CANNOT ACCESS THE WIFI",
      assignedTo:"HUMAN RESOURCE",
      category:"",
      subCategory:"",
      site:"CARY",
    },
    {
      number: 211,
      state: "PENDING APPROVAL",
      incidentOrigin:"WEB",
      title:"NEW COMPUTER REQUEST",
      assignedTo:"APPLICATION SU.....",
      category:"HARDWARE",
      subCategory:"LAPTOP",
      site:"",
    },
    {
      number: 209,
      state: "NEW",
      incidentOrigin:"PORTAL",
      title:"LAPTOP ISSUES",
      assignedTo:"APPLICATION SU.....",
      category:"HARDWARE",
      subCategory:"LAPTOP",
      site:"CARY",
    },
    {
      number: 208,
      state: "ASSIGNED",
      incidentOrigin:"WEB",
      title:"KEYBOARD NOT CONNECTING TO LAPTOP",
      assignedTo:"APPLICATION SU.....",
      category:"HARDWARE",
      subCategory:"LAPTOP",
      site:"CARY",
    },
  ]

  useEffect(() => {
    axios

      .get("/guest/getGuestAboutToCheckOut/RegulatInNotice/Daily-Monthly-Active")

      .then((res) => {
        setData(res.data);

        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const obje = { createdBy: userId };

  return (
    
      <Grid container>
        {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
        <Grid xs={12}>
          <MaterialTable
            title={props.title}
            data={props.rows}
            sx={{ color: "white" }}
            columns={props.coloumns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  const updatedRows = [
                    ...data,
                    { id: Math.floor(Math.random() * 100), ...newRow },
                  ];
                //   setTimeout(() => {
                //     const newRow1 = Object.assign(newRow, obje);

                //     const res = axios
                    //   .post(
                    //     "/bed/addBuilding",

                    //     newRow1
                    //   )
                    //   .catch((err) => {
                    //     toast.error("Server error");
                    //   });
                    //console.log(newRow);

                //     toast.success("New Buiding added");
                //     setData(updatedRows);

                //     resolve();
                //   }, 2000);

                //   if(setData.data!==null){
                //     toast.success("New Buiding added")
                //   }

                //   if(setData.data==null){

                //     toast.error("Server is down")
                //   }
                })
                ,
                onRowDelete: (selectedRow) =>
                  new Promise((resolve, reject) => {
                    const index = selectedRow.buildingId;
                    const updatedRows = [...data];
                    updatedRows.splice(index, 1);
                    setTimeout(() => {
                      const res = axios.delete(`/bed/deleteBuilding/${index}`);
                      // console.log(res);
                      // console.log(updatedRows);
                      setData(updatedRows);
                      resolve();
                    }, 2000);
                  }),
                onRowUpdate: (updatedRow, oldRow) =>
                  new Promise((resolve, reject) => {
                    const index = oldRow.buildingId;
                    const updatedRows = [...data];
                    updatedRows[index] = updatedRow;
                    setTimeout(() => {
                      const res = axios.put(
                        `/bed/updateBuildingById/${index}`,
                        updatedRow
                      );

                      //console.log(updatedRows);
                      setData(updatedRows);
                      resolve();
                    }, 2000);
                  }),
            }}
            options={{
              exportButton: true,
              pageSize:20,
              actionsColumnIndex: -1,
              grouping: true,
              addRowPosition: "first",
              headerStyle: {
                backgroundColor: "#1E90FF",
                color: "white",
                fontSize: "15px",
                //height: "10px",
                //fontWeight: 'bold'
              },
              rowStyle: {
                fontSize: 16,
              },
            }}
          />
        </Grid>
      </Grid>
   
  );
}

export default MtTable;
