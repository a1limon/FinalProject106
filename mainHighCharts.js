
// Global constants
const DEBUG = true;
const Knife_PRICE = 14.25;
const Fork_PRICE = 9.99;

// Some little helpers
const log = msg => (DEBUG ? console.log(msg) : '');
const select = id => document.getElementById(id);


// function plotColumnHC(sales) {

// 	let knife_vals = [], fork_vals = [];
// 	for (month in sales) {
// 		knife_vals.push(sales[month]['Knife']);
// 		fork_vals.push(sales[month]['Fork']);
// 	}

// 	Highcharts.chart('salesPerMonthChart', {
// 		chart: {
// 			type: 'column'
// 		},
// 		title: {
//       text: 'Monthly Sales',
//       style:{
//         fontSize: '22px',
//         fontWeight: 'bold'
//       }    
// 		},exporting: {
//       enabled: false
//       },
// 		xAxis: {
// 			categories: ['January', 'February', 'March'],
// 			title: {
//         text: 'Month',
//         style:{
//           fontWeight: 'bold',
//           color: 'black'
//         }
// 			}
// 		},
// 		yAxis: {
// 			min: 0,
// 			title: {
//         text: 'Number of units sold',
//         style:{
//           fontWeight: 'bold',
//           color: 'black'
//         }
// 			}
// 		},
// 		plotOptions: {
// 			series: {
// 				groupPadding: .1,
// 				pointPadding: .03
// 			}
//         },
// 		series: [{
// 			name: 'Knife',
// 			data: knife_vals,
// 			color: '#37B4E8'
// 		}, {
// 			name: 'Fork',
// 			data: fork_vals,
// 			color: 'red'
// 		}],
// 		tooltip: {
// 			headerFormat: null,
//         },
//         legend: {
// 			align: 'right',
// 			verticalAlign: 'top',
// 			layout: 'vertical',
//             borderWidth: 1,
//             symbolHeight: 8,
// 			symbolWidth: 8,
// 			symbolRadius: 0,
// 			floating: true,

// 		}
// 	})
// }


// async function loadJSON(path) {
// 	let response = await fetch(path);
// 	let dataset = await response.json(); // Now available in global scope
// 	return dataset;
// }




// function init() {
// 	var sales = loadJSON('./data/sales.json');
// 	var stocks = loadJSON('./data/stocks.json');

// 	sales.then(function (sales) {
// 		plotMapHC(sales);
// 	});

// 	stocks.then(function (stocks) {
// 		plotStocksHC(stocks);
// 	});
// }



Highcharts.chart('container', {
	chart: {
			type: 'column'
	},
	data: {
			// enablePolling: true,
			csvURL: window.location.origin + './data/2020payrolls.csv'
	},
	title: {
			text: 'Fruit Consumption'
	},
	yAxis: {
			title: {
					text: 'Units'
			}
	}
});
// document.addEventListener('DOMContentLoaded', init, false);