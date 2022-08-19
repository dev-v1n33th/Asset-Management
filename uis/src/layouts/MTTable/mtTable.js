import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

// import axios from "axios";
import axios from "../../Uri";
// import { height, width } from "@mui/system";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { string } from "prop-types";
import './mtTable.css';
import AddImagePopUp from "layouts/ImageAssets/AddImagePopUp";
import DisplayImagePopUp from "layouts/digitalAssetManagement/DisplayImagePopUp"

function MtTable(props) {
  let userData = JSON.parse(sessionStorage.getItem("userdata"));
  let userId = userData.data.userId;
  console.log(userId);

  const [singleImageObj ,setSingleImageObj] =React.useState({})
  const [singleImage , setSingleImage] = React.useState(false);
  const showsingleimagePopUp = () =>{
    setSingleImage(true)
  };
  const closesingleImagePopUpHandler = () =>{
    setSingleImage(false);
  }
  const [data, setData] = useState([]);
  const [showAddImagePopUp, setShowAddImagePopUp] = React.useState(false)
  const showimagePopUp = () => {
    setShowAddImagePopUp(true)
  }
  const closeAddImagePopUpHandler = () => {
    setShowAddImagePopUp(false)
  }

 
  
  // useEffect(() => {
  //   axios

  //     .get("/guest/getGuestAboutToCheckOut/RegulatInNotice/Daily-Monthly-Active")

  //     .then((res) => {
  //       setData(res.data);

  //       console.log(res.data);
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //       // toast.error("Server Error")
  //     });
  // }, []);

  const obje = { createdBy: userId };

  return (<>
  {props.title == "Digital Assets" ? (<><Grid container>
    <DisplayImagePopUp 
    open={singleImage}
    closeSingleImagePopUpHandler={closesingleImagePopUpHandler}
    singleImageObj={singleImageObj}
    />
      <AddImagePopUp
        open={showAddImagePopUp}
        closeAddImagePopUpHandler={closeAddImagePopUpHandler}
      // setAllImages={setAllImages}
      />
      {/* <h1 align="center"></h1>
      <h4 align='center'></h4> */}
      <Grid xs={12}>
        <MaterialTable
          title={props.title}
          data={props.rows}
          sx={{ color: "white" }}
          columns={props.coloumns}
          onRowClick={async (event, rowData) => {
            console.log(rowData);
            setSingleImageObj(rowData)
            showsingleimagePopUp();
            

          }}
          actions={[
            {
              icon: 'edit',
              onClick: rowData => {
                // open dialog and fill your data to update
              }
            },
            {
              icon: 'add',
              isFreeAction: true,
              onClick: () => {
                // open dialog to save new one
                console.log("heyyyyyyy")
                showimagePopUp();



              }
            }
          ]}
          // editable={{
          // onRowAdd: (newRow) => console.log("im the best")
          // new Promise((resolve, reject) => {
          // const updatedRows = [
          //   ...data,
          //   { id: Math.floor(Math.random() * 100), ...newRow },
          // ];
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
          // })
          // ,
          // onRowDelete: (selectedRow) =>
          //   new Promise((resolve, reject) => {
          //     const index = selectedRow.buildingId;
          //     const updatedRows = [...data];
          //     updatedRows.splice(index, 1);
          //     setTimeout(() => {
          //       const res = axios.delete(`/bed/deleteBuilding/${index}`);
          //       // console.log(res);
          //       // console.log(updatedRows);
          //       setData(updatedRows);
          //       resolve();
          //     }, 2000);
          //   }),
          // onRowUpdate: (updatedRow, oldRow) =>
          //   new Promise((resolve, reject) => {
          //     const index = oldRow.buildingId;
          //     const updatedRows = [...data];
          //     updatedRows[index] = updatedRow;
          //     setTimeout(() => {
          //       const res = axios.put(
          //         `/bed/updateBuildingById/${index}`,
          //         updatedRow
          //       );

          //       //console.log(updatedRows);
          //       setData(updatedRows);
          //       resolve();
          //     }, 2000);
          //   }),
          // }}
          options={{
            exportButton: true,
            pageSize: 5,
            actionsColumnIndex: -1,
            grouping: true,
            addRowPosition: "first",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
              fontSize: "12px",
              //height: "10px",
              //fontWeight: 'bold'
            },
            rowStyle: {
              fontSize: 12,
            },
          }}
        />
      </Grid>
    </Grid>
</>) : (<> <Grid container>
      
     
      <Grid xs={12}>
        <MaterialTable
          title={props.title}
          data={props.rows}
          sx={{ color: "white" }}
          columns={props.coloumns}
         
          editable={{
          onRowAdd: (newRow) => console.log("im the best")
          // new Promise((resolve, reject) => {
          // const updatedRows = [
          //   ...data,
          //   { id: Math.floor(Math.random() * 100), ...newRow },
          // ];
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
          // })
          ,
          onRowDelete: (selectedRow) => console.log("deleting")
          //   new Promise((resolve, reject) => {
          //     const index = selectedRow.buildingId;
          //     const updatedRows = [...data];
          //     updatedRows.splice(index, 1);
          //     setTimeout(() => {
          //       const res = axios.delete(`/bed/deleteBuilding/${index}`);
          //       // console.log(res);
          //       // console.log(updatedRows);
          //       setData(updatedRows);
          //       resolve();
          //     }, 2000);
          //   })
          ,
          onRowUpdate: (updatedRow, oldRow) => console.log("updating")
          //   new Promise((resolve, reject) => {
          //     const index = oldRow.buildingId;
          //     const updatedRows = [...data];
          //     updatedRows[index] = updatedRow;
          //     setTimeout(() => {
          //       const res = axios.put(
          //         `/bed/updateBuildingById/${index}`,
          //         updatedRow
          //       );

          //       //console.log(updatedRows);
          //       setData(updatedRows);
          //       resolve();
          //     }, 2000);
          //   }),
          }}
          options={{
            exportButton: true,
            pageSize: 5,
            actionsColumnIndex: -1,
            grouping: true,
            addRowPosition: "first",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
              fontSize: "12px",
              //height: "10px",
              //fontWeight: 'bold'
            },
            rowStyle: {
              fontSize: 12,
            },
          }}
        />
      </Grid>
    </Grid> </>)}
  </>

    
  );
}

export default MtTable;
