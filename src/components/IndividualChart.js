import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const condition = Boolean(Math.round(Math.random()))

class IndividualChart extends React.Component {

    render() {
        const dat = this.props.data.chartData;
        const options2 = {
            chart: {
                type: 'areaspline',
                backgroundColor: '#282c34',
                height: 250,
                // width:650
            },
            title: {
                text: this.props.data.title,
                style: {
                    color: '#cccccc'
                }
            },
            legend: {
                enabled: false,
                style: {
                    color: '#cccccc'
                }

            },
            xAxis: {
                tickLength: 0,
                crosshair: {
                    width: .9,
                    color: '#4effa1',
                    height: 2
                },
                gridLineWidth: 0,
                labels: {
                    align: 'left',
                    reserveSpace: false,
                    y: -5,
                    style: {
                        color: 'white'
                    },
                    formatter: function () {
                        return dat[this.value][0];
                    }
                }
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                //  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                crosshair: {
                    width: 1,
                    color: '#4effa1',
                },
                tickInterval: 3,
                gridLineWidth: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: 'white'
                    },
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                //crosshairs: true,
                shared: true,
                pointFormat: '<b>{point.y:.0f}</b>'
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'London',
                marker: {
                    symbol: 'diamond'
                },

                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, this.props.data.color[0]],
                        [1, this.props.data.color[1]]
                        // [0, 'blue'],
                        // [1, 'rgba(2,0,0,0)']
                        // [0,'rgba(78, 255, 207)'],
                        //    [1, 'rgba(8, 164, 188) ']
                    ]
                },
                data: dat
            }]
        }

        return <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options2}
            />
        </div>
    }

}

export default IndividualChart;