// Global constants
const DEBUG = true;
const Knife_PRICE = 14.25;
const Fork_PRICE = 9.99;

// Some little helpers
const log = msg => (DEBUG ? console.log(msg) : '');
const select = id => document.getElementById(id);
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/regression/2.0.1/regression.js" integrity="sha512-PHHRPMxJK1xGYLQPv9FoDbCF2X23Ao1lMAD52oLY9TBW033s4zwIXl5JQBGlfI2iOx3W1qP3LAS/MMv5Ttj0aQ==" crossorigin="anonymous"></script> */

// import regression from "regression";
// import {regression} from 'regression';


var data = {
    2019: [
    ["Boston Red Sox", 229196106],
    ["New York Yankees", 223019037],
    ["Chicago Cubs", 221590085],
    ["Los Angeles Dodgers", 207000814],
    ["San Francisco Giants", 178582126],
    ["St. Louis Cardinals", 174317164],
    ["Washington Nationals", 172307808],
    ["Houston Astros", 168804925],
    ["Los Angeles Angels", 161270385],
    ["Philadelphia Phillies", 159637244],
    ["Colorado Rockies", 157162629],
    ["Texas Rangers", 148538766],
    ["New York Mets", 146835812],
    ["Seattle Mariners", 144391293],
    ["Atlanta Braves", 143947963],
    ["Milwaukee Brewers",135889019],
    ["Cincinnati Reds",128391569],
    ["Minnesota Twins", 125256003],
    ["Arizona Diamondbacks",118927905],
    ["Detroit Tigers",114631137],
    ["Toronto Blue Jays",111371067],
    ["Cleveland Indians",107693747],
    ["Kansas City Royals",104773003],
    ["San Diego Padres",104254790],
    ["Oakland Athletics",93394531],
    ["Chicago White Sox",91371201],
    ["Miami Marlins",75596271],
    ["Baltimore Orioles",73316689],
    ["Pittsburgh Pirates",72731474],
    ["Tampa Bay Rays",64178722]
    ],
    2020: [
    ["New York Yankees",111939081],
    ["Los Angeles Dodgers",108417397],
    ["Chicago Cubs",86596171],
    ["Boston Red Sox",84210390],
    ["Houston Astros",82536161],
    ["New York Mets",81603005],
    ["Philadelphia Phillies",80893547],
    ["Washington Nationals",75067703],
    ["San Francisco Giants",73408817],
    ["St. Louis Cardinals",73246343],
    ["San Diego Padres",73097954],
    ["Colorado Rockies",67808533],
    ["Los Angeles Angels",66040893],
    ["Arizona Diamondbacks",65598752],
    ["Texas Rangers",64214137],
    ["Atlanta Braves",63561931],
    ["Minnesota Twins",55679689],
    ["Cincinnati Reds",55638685],
    ["Toronto Blue Jays",54997060],
    ["Chicago White Sox",53665251],
    ["Seattle Mariners",50433829],
    ["Detroit Tigers",43164880],
    ["Milwaukee Brewers",41434086],
    ["Cleveland Indians",39299107],
    ["Oakland Athletics",36720178],
    ["Kansas City Royals",34812194],
    ["Miami Marlins",31555593],
    ["Tampa Bay Rays",28290689],
    ["Pittsburgh Pirates",25337837],
    ["Baltimore Orioles",23478635]
    ]
};

var teams = [
    {name:"New York Yankees",color:"#0C2340"},
    {name:"Los Angeles Dodgers",color:"#005A9C"},
    {name:"Chicago Cubs",color: "#0E3386"},
    {name:"Boston Red Sox",color:"#BD3039"},
    {name:"Houston Astros",color:"#EB6E1F"},
    {name:"New York Mets",color:"#002D72"},
    {name:"Philadelphia Phillies",color:"#E81828"},
    {name:"Washington Nationals",color:"#AB0003"},
    {name:"San Francisco Giants",color:"#FD5A1E"},
    {name:"St. Louis Cardinals",color:"#C41E3A"},
    {name:"San Diego Padres",color:"#2F241D"}, 
    {name:"Colorado Rockies",color:"#33006F"},
    {name:"Los Angeles Angels",color:"#862633"},
    {name:"Arizona Diamondbacks",color:"#A71930"},
    {name:"Texas Rangers",color:"#003278"},
    {name:"Atlanta Braves",color:"#13274F"},
    {name:"Minnesota Twins",color:"#002B5C"},
    {name:"Cincinnati Reds",color:"#C6011F"},
    {name:"Toronto Blue Jays",color:"#134A8E"},
    {name:"Chicago White Sox",color:"#27251F"},
    {name:"Seattle Mariners",color:"#005C5C"},
    {name:"Detroit Tigers",color:"#0C2340"},
    {name:"Milwaukee Brewers",color:"#FFC52F"},
    {name:"Cleveland Indians",color:"#0C2340"},
    {name:"Oakland Athletics",color:"#003831"},
    {name:"Kansas City Royals",color:"#004687"},
    {name:"Miami Marlins",color:"#00A3E0"},
    {name:"Tampa Bay Rays",color:"#8FBCE6"},
    {name:"Pittsburgh Pirates",color:"#FDB827"},
    {name:"Baltimore Orioles",color:"#DF4601"}  
];

var colorCode =
            {//yankees
            "New York Yankees":"#0C2340",
            //dodgers
            "Los Angeles Dodgers":"#005A9C",
            //cubs
            "Chicago Cubs": "#0E3386",
            //redsox
            "Boston Red Sox":"#BD3039",
            //astros
            "Houston Astros":"#EB6E1F",
            //mets
            "New York Mets":"#002D72",
            //phillies
            "Philadelphia Phillies":"#E81828",
            //nats
            "Washington Nationals":"#AB0003",
            //giants
            "San Francisco Giants":"#FD5A1E",
            //cardinals
            "St. Louis Cardinals":"#C41E3A",
            //padres
            "San Diego Padres":"#2F241D",
            //rockies
            "Colorado Rockies":"#33006F",
            //angels
            "Los Angeles Angels":"#862633",
            //dbacks
            "Arizona Diamondbacks":"#A71930",
            //rangers
            "Texas Rangers":"#003278",
            //braves
            "Atlanta Braves":"#13274F",
            //twins
            "Minnesota Twins":"#002B5C",
            //reds
            "Cincinnati Reds":"#C6011F",
            //bluejays
            "Toronro Blue Jays":"#134A8E",
            //whitesox
            "Chicago White Sox":"#27251F",
            //mariners
            "Seattle Mariners":"#005C5C",
            //tigers
            "Detroit Tigers":"#0C2340",
            //brewers
            "Milwaukee Brewers":"#FFC52F",
            //indians
            "Cleveland Indians":"#0C2340",
            //A's
            "Oakland Athletics":"#003831",
            //royals
            "Kansas City Royals":"#004687",
            //marlins
            "Miami Marlins":"#00A3E0",
            //rays
            "Tampa Bay Rays":"#8FBCE6",
            //pirates
            "Pittsburgh Pirates":"#FDB827",
            //orioles
            "Baltimore Orioles":"#DF4601"};

// console.log(colorCode["Tampa Bay Rays"]);



function getData(data) {
    return data.map(function (team, i) {
        return {
            name: team[0],
            y: team[1],
            color: colorCode[team[0]]
            
        };
    });
}
/**
 * 2019 & 2020 payrolls,all teams
 */
Highcharts.setOptions({
    lang: {
        decimalPoint: '.',
        thousandsSep: ','
    }
});

var chart = Highcharts.chart('barChart', {
    chart: {
        type: 'bar',
        height: 670,
        backgroundColor: '#343435'

    },
    caption: {
        text: "<b>*These figures derive from a player's payroll salary, which includes the combination of a base salary, incentives, & any signing bonus proration.</b>\
        <br>A normal season consists of 162 games, however, in a year unlike any other, 2020 saw a baseball season unlike any other.\
		Due to COVID, the <br>2020 season was shortened to only 60 games. The button above the chart title allows for comparison of payrolls between the most recent <br> normal season (2019) and the 2020 season."

    },
    title: {
        text: 'MLB Total Payroll by Team 2020'
    },
    subtitle: {
      text: "Source: <a href='https://www.spotrac.com/mlb/payroll/2020/'>spotrac.com</a>\u00A0\u00A0\u00A0\u00A0 MLB Team Color Codes: <a href='https://teamcolorcodes.com/mlb-color-codes/'>teamcolorcodes.com</a>",
},
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        },
        series: {
            grouping: false,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        valuePrefix: "$",
    },
    xAxis: {
        labels: {
                  overflow: 'justify'
              },
                  categories: ["New York Yankees",
                  "Los Angeles Dodgers",
                  "Chicago Cubs",
                  "Boston Red Sox",
                  "Houston Astros",
                  "New York Mets",
                  "Philadelphia Phillies",
                  "Washington Nationals",
                  "San Francisco Giants",
                  "St. Louis Cardinals",
                  "San Diego Padres", 
                  "Colorado Rockies",
                  "Los Angeles Angels",
                  "Arizona Diamondbacks",
                  "Texas Rangers",
                  "Atlanta Braves",
                  "Minnesota Twins",
                  "Cincinnati Reds",
                  "Toronto Blue Jays",
                  "Chicago White Sox",
                  "Seattle Mariners",
                  "Detroit Tigers",
                  "Milwaukee Brewers",
                  "Cleveland Indians",
                  "Oakland Athletics",
                  "Kansas City Royals",
                  "Miami Marlins",
                  "Tampa Bay Rays",
                  "Pittsburgh Pirates",
                  "Baltimore Orioles"
                ],
                  title: {
                      text: undefined
                  },
              
        // labels: {
        //     useHTML: true,
        //     animate: true,
        //     formatter: function () {
        //         var value = this.value,
        //             output;

        //         teams.forEach(function (team) {
        //             if (team.name === value) {
        //                 output = team.name;
        //             }
        //         });

        //         return output;
        //     }
        // }
    },
    yAxis: [{
        title: {
            text: 'Payroll ($ millions)',
            align: 'middle'
        }
    }],
    series: [{
        name: '2020',
        id: 'main',
        dataSorting: {
            enabled: true,
            matchByName: true
        },
        data: getData(data[2020]).slice()
    }],
    exporting: {
        allowHTML: true
    }
});

function getCat(data) {
    let cat =[]
    for(var i= 0; i<data.length; i++){
        cat.push(data[i][0])
    }
    return cat
}

/**
 * Sets up buttons to toggle between seasons, and updates charts
 */
var years = [2019,2020];

years.forEach(function (year) {
    var btn = document.getElementById(year);
    btn.addEventListener('click', function () {

        document.querySelectorAll('.buttons button.active').forEach(function (active) {
            active.className = '';
        });
        btn.className= 'active';

        chart.update({
            title: {
                text: 'MLB Total Payroll by Team ' + year
            },
            caption: {
                text: "<b>*These figures derive from a player's payroll salary, which includes the combination of a base salary, incentives, & any signing bonus proration.</b>\
                <br>A normal season consists of 162 games, however, in a year unlike any other, 2020 saw a baseball season unlike any other.\
                Due to COVID, the 2020 season was shortened to only 60 games. The button above the chart title allows for comparison of payrolls between the most recent normal season (2019) and the 2020 season."
        
            },
            subtitle: {
                text: "Source: <a href='https://www.spotrac.com/mlb/payroll/2020/'>spotrac.com</a>\u00A0\u00A0\u00A0\u00A0 MLB Team Color Codes: <a href='https://teamcolorcodes.com/mlb-color-codes/'>teamcolorcodes.com</a>"
            },
            labels: {
                overflow: 'justify'
            },
            plotOptions: {


                bar: {
                    dataLabels: {
                        enabled: true,
                        valuePrefix: "$",
                    }
                   
                },
                lang: {
                    thousandSep: ','
                },
                series: {
                    grouping: false,
                    borderWidth: 0
                }
            },
            xAxis: {
                labels: {
                          overflow: 'justify'
                      },
                          categories: getCat(data[year]).slice(),
                          title: {
                              text: undefined
                          }
            },
            yAxis: [{
                title: {
                    text: 'Payroll ($ millions)',
                    align: 'middle'
                }
            }],
            tooltip: {
                valuePrefix: "$",
            },
            series: [{
                name: year,
                data: getData(data[year]).slice(),            
            }]
        }, true, false, {
            duration: 800
        });
        Highcharts.setOptions({
            lang: {
                decimalPoint: '.',
                thousandsSep: ','
            }
        });

    });

});


/**
 * Playoff team payrolls
 */


var playoffData = {
    2019: [
   
    ["New York Yankees", 223019037],
    ["Los Angeles Dodgers", 207000814],
    ["St. Louis Cardinals", 174317164],
    ["Washington Nationals", 172307808],
    ["Houston Astros", 168804925],
    ["Atlanta Braves", 143947963],
    ["Milwaukee Brewers",135889019],
    ["Minnesota Twins", 125256003],
    ["Oakland Athletics",93394531],
    ["Tampa Bay Rays",64178722]
    ],
    2020: [
    ["New York Yankees",111939081],
    ["Los Angeles Dodgers",108417397],
    ["Chicago Cubs",86596171],
    ["Houston Astros",82536161],
    ["St. Louis Cardinals",73246343],
    ["San Diego Padres",73097954],
    ["Atlanta Braves",63561931],
    ["Minnesota Twins",55679689],
    ["Cincinnati Reds",55638685],
    ["Toronto Blue Jays",54997060],
    ["Chicago White Sox",53665251],
    ["Milwaukee Brewers",41434086],
    ["Cleveland Indians",39299107],
    ["Oakland Athletics",36720178],
    ["Miami Marlins",31555593],
    ["Tampa Bay Rays",28290689],
    ]
};

var playoffTeams = [
    {name:"New York Yankees",color:"#0C2340"},
    {name:"Los Angeles Dodgers",color:"#005A9C"},
    {name:"Chicago Cubs",color: "#0E3386"},
    {name:"Houston Astros",color:"#EB6E1F"},
    {name:"St. Louis Cardinals",color:"#C41E3A"},
    {name:"San Diego Padres",color:"#2F241D"}, 
    {name:"Atlanta Braves",color:"#13274F"},
    {name:"Minnesota Twins",color:"#002B5C"},
    {name:"Cincinnati Reds",color:"#C6011F"},
    {name:"Toronto Blue Jays",color:"#134A8E"},
    {name:"Chicago White Sox",color:"#27251F"},
    {name:"Milwaukee Brewers",color:"#FFC52F"},
    {name:"Cleveland Indians",color:"#0C2340"},
    {name:"Oakland Athletics",color:"#003831"},
    {name:"Miami Marlins",color:"#00A3E0"},
    {name:"Tampa Bay Rays",color:"#8FBCE6"},
];


Highcharts.setOptions({
    lang: {
        decimalPoint: '.',
        thousandsSep: ','
    }
});

var chart2 = Highcharts.chart('barChart2020', {
    chart: {
        type: 'bar',
        height: 420,
        width: 500,
        backgroundColor:'#343435'

    },
    // caption: {
    //     text: "This chart filters out teams who made the 2020 playoffs vs those who didn't."

    // },
    title: {
        text: 'Total payroll by playoff teams 2020'
    },
    subtitle: {
        text: "Source: <a href='https://www.spotrac.com/mlb/payroll/2020/'>spotrac.com</a>\u00A0\u00A0\u00A0\u00A0 MLB Team Color Codes: <a href='https://teamcolorcodes.com/mlb-color-codes/'>teamcolorcodes.com</a>",
},
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        },
        series: {
            grouping: false,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        valuePrefix: "$",
    },
    xAxis: {
        labels: {
                    overflow: 'justify'
                },
                    categories: [["New York Yankees"],
                    ["Los Angeles Dodgers"],
                    ["Chicago Cubs"],
                    ["Houston Astros"],
                    ["St. Louis Cardinals"],
                    ["San Diego Padres"],
                    ["Atlanta Braves"],
                    ["Minnesota Twins"],
                    ["Cincinnati Reds"],
                    ["Toronto Blue Jays"],
                    ["Chicago White Sox"],
                    ["Milwaukee Brewers"],
                    ["Cleveland Indians"],
                    ["Oakland Athletics"],
                    ["Miami Marlins"],
                    ["Tampa Bay Rays"]],
                    title: {
                        text: undefined
                    },
    },
    yAxis: [{
        title: {
            text: 'Payroll ($ millions)',
            align: 'middle'
        },
        max: 130000000
    }],
    series: [{
        name: '2020',
        id: 'main',
        dataSorting: {
            enabled: true,
            matchByName: true
        },
        data: getData(playoffData[2020]).slice()
    }],
    exporting: {
        allowHTML: true
    }
});

var chart3 = Highcharts.chart('barChart2019', {
    chart: {
        type: 'bar',
        height: 420,
        width: 500,
        backgroundColor:'#343435'

    },
    title: {
        text: 'Total payroll by playoff teams 2019'
    },
    subtitle: {
        text: "Source: <a href='https://www.spotrac.com/mlb/payroll/2020/'>spotrac.com</a>\u00A0\u00A0\u00A0\u00A0 MLB Team Color Codes: <a href='https://teamcolorcodes.com/mlb-color-codes/'>teamcolorcodes.com</a>",
},
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        },
        series: {
            grouping: false,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        valuePrefix: "$",
    },
    xAxis: {
        labels: {
                    overflow: 'justify'
                },
                    categories: 
                    [["New York Yankees"],
                    ["Los Angeles Dodgers"],
                    ["St. Louis Cardinals"],
                    ["Washington Nationals"],
                    ["Houston Astros"],
                    ["Atlanta Braves"],
                    ["Milwaukee Brewers"],
                    ["Minnesota Twins"],
                    ["Oakland Athletics"],
                    ["Tampa Bay Rays"]],

                    title: {
                        text: undefined
                    },
    },
    yAxis: [{
        title: {
            text: 'Payroll ($ millions)',
            align: 'middle'
        },
        max: 305000000
    }],
    series: [{
        name: '2019',
        id: 'main',
        dataSorting: {
            enabled: true,
            matchByName: true
        },
        data: getData(playoffData[2019]).slice()
    }],
    exporting: {
        allowHTML: true
    }
});


/**
 * Scatterplot wins vs payroll 2019
 */
let scatterData19 = [
    {data:[[223019037,.636]],name:"New York Yankees",color:"#0C2340"},
    {data:[[207000814,.654]],name:"Los Angeles Dodgers",color:"#005A9C"},
    {data:[[221590085,.519]],name:"Chicago Cubs",color: "#0E3386"},
    {data:[[229196106,.519]],name:"Boston Red Sox",color:"#BD3039"},
    {data:[[168804925,.660]],name:"Houston Astros",color:"#EB6E1F"},
    {data:[[146835812,.531]],name:"New York Mets",color:"#002D72"},
    {data:[[159637244,.500]],name:"Philadelphia Phillies",color:"#E81828"},
    {data:[[172307808,.574]],name:"Washington Nationals",color:"#AB0003", marker:{symbol: 'diamond'}},
    {data:[[178582126,.475]],name:"San Francisco Giants",color:"#FD5A1E"},
    {data:[[174317164,.562]],name:"St. Louis Cardinals",color:"#C41E3A"},
    {data:[[104254790,.432]],name:"San Diego Padres",color:"#2F241D"}, 
    {data:[[157162629,.438]],name:"Colorado Rockies",color:"#33006F"},
    {data:[[161270385,.444]],name:"Los Angeles Angels",color:"#862633"},
    {data:[[118927905,.525]],name:"Arizona Diamondbacks",color:"#A71930"},
    {data:[[148538766,.481]],name:"Texas Rangers",color:"#003278"},
    {data:[[143947963,.599]],name:"Atlanta Braves",color:"#13274F"},
    {data:[[125256003,.623]],name:"Minnesota Twins",color:"#002B5C"},
    {data:[[128391569,.463]],name:"Cincinnati Reds",color:"#C6011F"},
    {data:[[111371067,.414]],name:"Toronto Blue Jays",color:"#134A8E"},
    {data:[[91371201,.447]],name:"Chicago White Sox",color:"#27251F"},
    {data:[[144391293,.420]],name:"Seattle Mariners",color:"#005C5C"},
    {data:[[114631137,.292]],name:"Detroit Tigers",color:"#0C2340"},
    {data:[[135889019,.549]],name:"Milwaukee Brewers",color:"#FFC52F"},
    {data:[[107693747,.574]],name:"Cleveland Indians",color:"#0C2340"},
    {data:[[93394531,.599]],name:"Oakland Athletics",color:"#003831"},
    {data:[[104773003,.364]],name:"Kansas City Royals",color:"#004687"},
    {data:[[75596271,.352]],name:"Miami Marlins",color:"#00A3E0"},
    {data:[[64178722,.593]],name:"Tampa Bay Rays",color:"#8FBCE6"},
    {data:[[72731474,.426]],name:"Pittsburgh Pirates",color:"#FDB827"},
    {data:[[73316689,.333]],name:"Baltimore Orioles",color:"#DF4601"}
]

let dat19 = [];
for (let d = 0; d < scatterData19.length; d++){
    dat19.push(scatterData19[d].data[0]);
}
// console.log(dat19);
scatterData19.push(fitData(dat19));
// console.log(scatterData19);

// console.log(scatterData19.slice(0,30));

// console.log(scatterData19.slice(30,31));
// console.log(scatterData19.slice(0,30));

let scatter1  = Highcharts.chart('scatter1', {
    chart: {
        type: 'scatter',
        backgroundColor:'#343435'
        
    },
    title: {
        text: 'Win Percentage vs Payroll (2019)'
    },
    subtitle: {
        text: "Source: <a href='https://www.spotrac.com/mlb/payroll/2019/'>spotrac.com</a>"
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Payroll ($ millions)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Win %'
        },
        max: 0.8
    },
    legend: {
        enabled: false
    //     layout: 'vertical',
    //     align: 'left',
    //     verticalAlign: 'top',
    //     x: 100,
    //     y: 70,
    //     floating: true,
    //     backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
    //     borderWidth: 1
    },
    plotOptions: {
        scatter: {
            // dataLabels: {
            //     enabled: true,
            //     pointFormat: '{series.name}'
            // },
            lineWidth:5,
            marker: {
                symbol: 'circle',
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '${point.x:,.0f} , {point.y}%'
            }
        }
    },
    series: scatterData19
});

/**
 * Scatterplot wins vs payroll 2020
 */
let scatterData20 = [
    {data:[[111939081,.550]],name:"New York Yankees",color:"#0C2340"},
    {data:[[108417397,.717]],name:"Los Angeles Dodgers",color:"#005A9C", marker:{symbol: 'diamond'}},
    {data:[[86596171,.567]],name:"Chicago Cubs",color: "#0E3386"},
    {data:[[84210390,.400]],name:"Boston Red Sox",color:"#BD3039"},
    {data:[[82536161,.483]],name:"Houston Astros",color:"#EB6E1F"},
    {data:[[81945598,.433]],name:"New York Mets",color:"#002D72"},
    {data:[[80893547,.467]],name:"Philadelphia Phillies",color:"#E81828"},
    {data:[[75067703,.433]],name:"Washington Nationals",color:"#AB0003"},
    {data:[[73408817,.483]],name:"San Francisco Giants",color:"#FD5A1E"},
    {data:[[73246343,.517]],name:"St. Louis Cardinals",color:"#C41E3A"},
    {data:[[73097954,.617]],name:"San Diego Padres",color:"#2F241D"}, 
    {data:[[67808533,.433]],name:"Colorado Rockies",color:"#33006F"},
    {data:[[66040893,.433]],name:"Los Angeles Angels",color:"#862633"},
    {data:[[65598752,.417]],name:"Arizona Diamondbacks",color:"#A71930"},
    {data:[[64214137,.367]],name:"Texas Rangers",color:"#003278"},
    {data:[[63561931,.583]],name:"Atlanta Braves",color:"#13274F"},
    {data:[[55679689,.600]],name:"Minnesota Twins",color:"#002B5C"},
    {data:[[55638685,.517]],name:"Cincinnati Reds",color:"#C6011F"},
    {data:[[54997060,.533]],name:"Toronto Blue Jays",color:"#134A8E"},
    {data:[[53665251,.583]],name:"Chicago White Sox",color:"#27251F"},
    {data:[[50433829,.450]],name:"Seattle Mariners",color:"#005C5C"},
    {data:[[43164880,.397]],name:"Detroit Tigers",color:"#0C2340"},
    {data:[[41434086,.483]],name:"Milwaukee Brewers",color:"#FFC52F"},
    {data:[[39299107,.583]],name:"Cleveland Indians",color:"#0C2340"},
    {data:[[36720178,.600]],name:"Oakland Athletics",color:"#003831"},
    {data:[[34812194,.433]],name:"Kansas City Royals",color:"#004687"},
    {data:[[31555593,.517]],name:"Miami Marlins",color:"#00A3E0"},
    {data:[[28290689,.667]],name:"Tampa Bay Rays",color:"#8FBCE6"},
    {data:[[25337837,.317]],name:"Pittsburgh Pirates",color:"#FDB827"},
    {data:[[23478635,.417]],name:"Baltimore Orioles",color:"#DF4601"}
]

let dat20 = [];
for (let d = 0; d < scatterData20.length; d++){
    dat20.push(scatterData20[d].data[0]);
}
scatterData20.push(fitData(dat20));

let scatter2  = Highcharts.chart('scatter2', {
    chart: {
        type: 'scatter',
        backgroundColor:'#343435'
    },
    title: {
        text: 'Win Percentage vs Payroll (2020)'
    },
    subtitle: {
        text: "Source: <a href='https://www.spotrac.com/mlb/payroll/2020/'>spotrac.com</a>"
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Payroll ($ millions)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Win %'
        },
    },
    legend: {
        enabled: false
    //     layout: 'vertical',
    //     align: 'left',
    //     verticalAlign: 'top',
    //     x: 100,
    //     y: 70,
    //     floating: true,
    //     backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
    //     borderWidth: 1
    },
    plotOptions: {
        scatter: {
            lineWidth:5,
            marker: {
                symbol: 'circle',
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '${point.x:,.0f} , {point.y}%'
            }
        }
    },
    series: scatterData20
});

/**
 * Line chart reg season win % by season
 */
Highcharts.chart('line1', {
    chart: {
        height: 700,
        width: 700,
        backgroundColor:'#343435'
    },
    title: {
        text: 'Regular Season Win % by Season'
    },

    subtitle: {
        text: "Source: <a href='https://www.baseball-reference.com'>baseball-reference.com</a>"
    },

    yAxis: {
        min: 0.0,
        max: 0.8,
        title: {
            text: 'Win %'
        }
    },

    xAxis: {
        allowDecimals: false,
       title: {
           text: 'Year of Season'
       }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2016
        }
    },

    series: [{
        name: 'Dodgers',
        data: [.562, .642, .564, .654, .717],
        color: "#005A9C"
    }, {
        name: 'Rays',
        data: [.420, .494, .556, .593, .667],
        color: "#8FBCE6"
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

/**
 * Line chart payroll by season
 */
Highcharts.chart('line2', {
    chart: {
        height: 700,
        width: 700,
        backgroundColor:'#343435'
    },
    title: {
        text: 'Payroll by season'
    },

    subtitle: {
        text: "Source: <a href='https://www.spotrac.com/mlb/payroll'>spotrac.com</a>"
    },

    yAxis: {
        min: 0,
        max: 260000000,
        title: {
            text: 'Payroll ($ millions)'
        }
    },

    xAxis: {
        allowDecimals: false,
       title: {
           text: 'Year of Season'
       }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2016
        // },
        // line: {
        // tooltip: {
        //     // headerFormat: '<b>{series.name}</b><br>',
        //     pointFormat: '{series.name}: $ {point.y:,.0f}'
        // }
    }
    },
    tooltip: {
        valuePrefix: "$",
    },

    series: [{
        name: 'Dodgers',
        data: [267302820, 259119625, 199582045, 207000814, 108417397],
        color: "#005A9C"
    }, {
        name: 'Rays',
        data: [70832249, 77811205, 68810167, 64178722, 28290689],
        color: "#8FBCE6"
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

            