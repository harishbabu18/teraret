import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
'Inquiry',
'Lead',
'Offering/quotes',
'Deals',
'Invoice',
'Projects',
'Completed Projects'
	],
	datasets: [{
		data: [300, 50, 100,300, 50, 100,120],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#36A2EB'
		],
		hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#36A2EB'
		]
	}]
};

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h2 >
          Organisational Dashboard
        </h2>
      </header>
      <div>
      <Pie data={data} />
			</div>
    </div>
  );
}

export default App;