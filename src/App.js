import React from 'react';
import logo from './qualifica.png';
import { Button } from '@material-ui/core';

import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';
import data from './funnel-data.json';

const tooltipRender = (({ point = {} }) => (point.category));
function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h2 >
          Chart Sample
        </h2>
       
      </header>
      <div>
      <Chart style={{ margin: '0 auto', width: 360 }} >
    <ChartTitle text="Sales funnel" />
    <ChartSeries>
      <ChartSeriesItem type="funnel" data={data} categoryField="stat" field="count" colorField="color"
       dynamicSlope='dynamicSlope' dynamicHeight='dynamicHeight'>
        <ChartSeriesLabels color="white" background="none" format="N0" />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartTooltip render={tooltipRender} />
    <ChartLegend visible={true} />
  </Chart>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
      

    </div>
  );
}

export default App;