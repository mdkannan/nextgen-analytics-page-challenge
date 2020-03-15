import React from "react";
import CanvasJSReact from '../assets/canvasjs.react';


let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SignupChart extends React.Component {

    render() {
        const optionsPie = {
            height: 225,
            width: 180,
            margin: 10,
            backgroundColor: "transparent",
            animationEnabled: true,
            responsive: true,
            maintainAspectRatio: false,
            title: {
                text: ""
            },
            subtitles: [{
                text: "648",
                fontColor: '#849fb4',
                verticalAlign: "center",
                fontSize: 22,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                dataPoints: [
                    {y: 16, color: '#ff56ee'},//pink
                    {y: 8, color: '#1bfbe4'}
                ]
            }]
        }
        return <div>
            <CanvasJSChart options={optionsPie}/>
        </div>
    }

}

export default SignupChart;