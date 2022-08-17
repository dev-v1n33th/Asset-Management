import React, { useEffect, useState } from "react";

import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";

// import axios from 'axios';

import axios from "../../../../Uri";

export default function AvailableRooms() {
  const columns = [
    {
      title: "ASSET TYPES",

      field: "assetTypes",
    },
    {
      title: "ASSETS",

      field: "assets",
    },
   
  ];
  const rows = [
    {
      assetTypes:"APPLE MAC",
      assets: 5
    }, {
      assetTypes:"AWS EC2 INSTANCE",
      assets: 22
    },
    {
      assetTypes:"AWS EC2 VPC",
      assets: 17
    },
    {
      assetTypes:"Apple Mac",
      assets: 8
    },
    {
      assetTypes:"CHROME CAST",
      assets: 36
    },
    {
      assetTypes:"CITRIX XEN SERVER",
      assets: 17
    },
    {
      assetTypes:"ESXI SERVER",
      assets: 32
    },
    {
      assetTypes:"FIREWALL",
      assets: 22
    },
    {
      assetTypes:"LINUX",
      assets: 35
    },
  ]

  const [table, setTable] = React.useState([]);

  useEffect(() => {
    axios

      .get("/bed/getAvailableBeds")

      .then((res) => {
        setTable(res.data);

       
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Grid>
        <MaterialTable
          title="ASSET TYPES"
          data={rows}
          columns={columns}
          options={{
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
    </div>
  );
}
