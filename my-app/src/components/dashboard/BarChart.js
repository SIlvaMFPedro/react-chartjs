import React from "react";
import { Chart as ChartJS } from "chart.js/auto";

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.myChart = new ChartJS(this.canvasRef.current, {
          type: 'bar',
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 100
                  }
                }
              ]
            }
          },
          data: {
            labels: this.props.data.map(d => d.label),
            datasets: [{
              label: this.props.title,
              data: this.props.data.map(d => d.value),
              backgroundColor: this.props.color
            }]
          }
        });
    }

    componentWillUnmount() {
        if (this.myChart) {
            // Destroy the chart when the component unmounts
            this.myChart.destroy();
        }
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }



    render() {
        return (
            <canvas ref={this.canvasRef}/>
        )
    }
}

export default BarChart;

