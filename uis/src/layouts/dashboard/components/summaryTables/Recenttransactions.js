import React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable from 'material-table';
import Grid from '@mui/material/Grid'



import axios from "../../../../Uri"








export default function AvailableRooms() {

const columns = [
{
title: "Asset Domain",
field: "assetDomain",
type: "text",
},

{
title: "Count",
field: "count",
type: "text",
},



];
const rows = [
    {
        assetDomain : "Contoso",
        count : 36
    },
    {
        assetDomain : "DMZ",
        count : 37
    },
    {
        assetDomain : "ENCOM",
        count : 9
    },
    {
        assetDomain : "FABRIKAM",
        count : 12
    },
    {
        assetDomain : "JP",
        count : 78
    },
    {
        assetDomain : "LABO3",
        count : 46
    },
    {
        assetDomain : "TEMP",
        count : 36
    },
    {
        assetDomain : "UMBRELLA",
        count : 15
    },
    {
        assetDomain : "US",
        count : 19
    },
    {
        assetDomain : "VDABGROUP",
        count : 67
    },
]
const [transaction,setTransaction]=React.useState([])



useEffect(() => {
axios
.get("/payment/getRecentPayments?field=date")
.then((res) => {
setTransaction(res.data);
//console.log(res.data);
})

.catch((err) => {
console.log(err);
});
}, []);
return (
<div style={{ height: 400, width: "100%" }}>
{/* <DataGrid rows={table} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} /> */}
<Grid>
<MaterialTable
title="WINDOWS ASSET DOMAIN OVERVIEW"
data={rows}
// sx={{ color: "white" }}
columns={columns}
options={{
// exportButton: true,
pageSize: 10,
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
<br></br>
<br></br>
</div>
);
}