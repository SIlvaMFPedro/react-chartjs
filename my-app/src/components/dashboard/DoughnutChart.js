import React from "react";
import {Chart as ChartJS} from "chart.js/auto";

class DoughtnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.myChart = new ChartJS(this.canvasRef.current, {
          type: 'doughnut',
          options: {
            maintainAspectRatio: false
          },
          data: {
            labels: this.props.data.map(d => d.label),
            datasets: [{
              data: this.props.data.map(d => d.value),
              backgroundColor: this.props.colors
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
        );
    }
}

export default DoughtnutChart;