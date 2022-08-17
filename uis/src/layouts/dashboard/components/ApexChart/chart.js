import React from 'react'
import ReactApexChart from 'react-apexcharts';
function ApChart(props) {

   


  return (
    <div>
        <ReactApexChart options={props.state.options} series={props.state.series} type="bar" height={350} />
</div>
    
    
  )
}

export default ApChart