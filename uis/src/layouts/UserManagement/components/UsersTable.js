import React from 'react'
import MtTable from 'layouts/MTTable/mtTable'

function UsersTable() {
    const title="User Management";
    const coloumns=[
        {
            title: "NAME",
            field: "assetName",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "ROLE",
            field: "domain",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        
        {
            title: "PHONE NUMBER ",
            field: "type",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "CITY",
            field: "IpAddress",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "STATE",
            field: "manufacture",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "COUNTRY",
            field: "country",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        {
            title: "ADDRESS",
            field: "address",
            headerStyle: {
              backgroundColor: "#1E90FF",
              color: "white",
            },
        },
        // {
        //     title: "BUSSINESS SOFTWARE",
        //     field: "model",
        //     headerStyle: {
        //       backgroundColor: "#1E90FF",
        //       color: "white",
        //     },
        // },
        // {
        //     title: "SELLER SOFTWARE",
        //     field: "location",
        //     headerStyle: {
        //       backgroundColor: "#1E90FF",
        //       color: "white",
        //     },
        // },
    ]
    const rows=[
      {
        assetName:"JOHN",
        domain:"IT",
        type:"9934577199",
        IpAddress:"HYDERABAD",
        manufacture:"TELANGANA",
        country:"INDIA",
        address:""
        // model:"",
        // location:""

      },
      {
        assetName:"CARY",
        domain:"IT",
        type:"9937625372",
        IpAddress:"BANGLORE",
        manufacture:"KARNATAKA",
        country:"INDIA",
        address:""
        // model:"",
        // location:""

      },
      {
        assetName:"CHRISTENE",
        domain:"COMMUNICATIONS",
        type:"7898266354",
        IpAddress:"CHENNAI",
        manufacture:"TAMIL NADU",
        country:"INDIA",
        address:""
        // model:"",
        // location:""

      },
      {
        assetName:"ROBERT",
        domain:"COMMUNICATIONS",
        type:"9908217161",
        IpAddress:"DELHI",
        manufacture:"DELHI",
        country:"INDIA",
        address:""
        // model:"",
        // location:""

      },
      
      
    ]
  return (
    <div> <MtTable 
    coloumns={coloumns}  
    rows={rows}
    title={title}
    /></div>
  )
}

export default UsersTable