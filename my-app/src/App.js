import logo from './logo.svg';
import React, {useState} from 'react';
import { getData } from './utils/functions';
import BarChart from './components/dashboard/BarChart';
import LineChart from './components/dashboard/LineChart';
import DoughtnutChart from './components/dashboard/DoughnutChart';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: getData()
      };
    }

    componentDidMount() {
      window.setInterval(() => {
        this.setState({
          data: getData()
        })
      }, 5000)
    }

    render() {
      return (
        <div className="App">
          <div className="main chart-wrapper">
            <LineChart
              data={this.state.data[0].data}
              title={this.state.data[0].title}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.data[1].data}
              title={this.state.data[1].title}
              color="#70CAD1"
            />
          </div>
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.data[2].data}
              title={this.state.data[2].title}
              color="#B08EA2"
            />
          </div>
          <div className="sub chart-wrapper">
            <DoughtnutChart
              data={this.state.data[3].data}
              title={this.state.data[3].title}
              colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
            />
          </div>
        </div>
      );
    }
}

export default App;
