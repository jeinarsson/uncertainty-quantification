import React, { Component } from 'react';
import ScenarioDetail from './Charts/ScenarioDetail'
import ParameterGrid from './Charts/ParameterGrid'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.forwardData = this.forwardData.bind(this);

    this.scenarioDetailChart = null;
    this.parameterGridChart = null;
  }
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate() {
    this.fetchData()
  }

  componentWillUnmount() {
  }

  fetchData() {
  
    fetch('/data.json')
    .then(response => {
      if (!response.ok) {
        throw Error("Network request failed")
      }
      return response
    })
    .then(d => d.json())
    .then(d => {
      this.forwardData(d);
    })
  }

  forwardData(data) {
    this.scenarioDetailChart.data(data)
    this.parameterGridChart.data(data)
  }

  render() {
    return (
		<div id="container">
			<div id="navbar">
				<span className="logo">Uncertainty Quantification</span> 
			</div> 
      <div id="content">
      <ScenarioDetail size={[500,500]} ref={(c) => { this.scenarioDetailChart = c; }}/>
      <ParameterGrid size={[400,500]} ref={(c) => { this.parameterGridChart = c; }}/>
      </div>
		</div>
    );
  }
}

export default App;
