import React, { Component } from 'react'
import { scaleTime, scaleOrdinal, schemeCategory20 } from 'd3-scale'
import { select } from 'd3-selection'
import { axisTop } from 'd3-axis'
import { range } from 'd3-array'
import { ordinalColors } from './ChartCommon'

class ParameterGrid extends Component {
 constructor(props){
  super(props)
  this.data = this.data.bind(this)
}

componentDidMount() {
}

componentDidUpdate() {  
}

data(data) {
  
  const totalWidth = 600;
  const totalHeight = 1000;

  const margin = {top: 25, right: 0, bottom: 0, left: 100};
  const drawingWidth = totalWidth - margin.left - margin.right,
        drawingHeight = totalHeight - margin.top - margin.bottom;
  
  const parent = select(this.node);
  if (!data) {
    return
  }

  let drawingArea = parent.selectAll('g.drawingArea').data([0]);
  drawingArea = drawingArea
    .enter()
      .append('g')
      .attr('class', 'drawingArea')
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .merge(drawingArea);


    console.log('render parameter grid with data:')
    console.log(data)
}

render() {

  return <svg ref={node => this.node = node}
  width={this.props.size[0]} height={this.props.size[1]}
  viewBox='0 0 400 500' preserveAspectRatio="xMinYMin meet">
  </svg>
}
}

export default ParameterGrid