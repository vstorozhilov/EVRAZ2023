import React from 'react';
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
  Tooltip
} from 'devextreme-react/chart';
import TooltipTemplate from './TooltipTemplate.jsx';
import { zoomingData } from './data.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularIndeterminate() {
  return (
    <Box sx={{
      display: 'flex',
      position : 'absolute'
      }}>
      <CircularProgress />
    </Box>
  );
}

const visualRange = { startValue: 300, endValue: 500 };

export default function SimpleChart(props) {

    let keys = Object.entries(props.signals).filter(
      item=>props.selectedSignals[item[1]]
    ).map(item=>item[0]);


    let resData;
    if (Object.keys(props.historicalData).length !== 0) {
      resData = props.historicalData.moment.map((item, index)=>{
          // let res = {...keys, ...keys.map(item2=>props.historicalData[props.signals[item2]][index])}
          let res = keys.reduce((accumulator, value)=>{
            // console.log(value);
            return {...accumulator, [value]: props.historicalData[props.signals[value]][index]};
          }, {})
          res['arg'] = item;
          return res; 
      });
    }
    else {
      resData = [];
    }

    return (
      <>
      <Chart
        title={props.title}
        style={{
          backgroundColor : 'white',
          borderRadius : '5px'
        }}
        id="chart"
        palette="Harmony Light"
        dataSource={resData}>
        {keys.map(key=>{
          return <Series argumentField="arg" valueField={key} />
        })}
        {/* <Series argumentField="arg" valueField="y1" />
        <Series argumentField="arg" valueField="y2" /> */}
        <ArgumentAxis defaultVisualRange={visualRange} orientation='vertical' />
        <ScrollBar visible={true} />
        <ZoomAndPan argumentAxis="both" />
        <Legend visible={false} />
        <Tooltip
          enabled={true}
          contentRender={TooltipTemplate}/>
      </Chart>
      </>
    );
}
