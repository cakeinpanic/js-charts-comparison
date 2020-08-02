import React, { PureComponent } from 'react'
import { Cell, Legend, Pie, PieChart } from 'recharts'
import { DEFAULT_DATA } from '../data'

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 2
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {DEFAULT_DATA[index].country}
    </text>
  )
}

export default class Rechart extends PureComponent {
  data = DEFAULT_DATA
  colors = ['red', 'green', 'blue', 'yellow', 'lightblue', 'orange', 'pink', 'lightgreen']

  state = {
    opacity: {
      uv: 1,
      pv: 1
    }
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 }
    })
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 }
    })
  }

  render () {

    return (
      <div className="chart-demo">
        <h3>Recharts</h3>
        <PieChart width={400} height={400}>
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>

          <Pie data={this.data} dataKey="litres" nameKey="country" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label={renderCustomizedLabel}>
            {
              this.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.colors[index]}/>
              ))
            }
            // why it sous not work?

          </Pie>

        </PieChart>
      </div>
    )
  }
}
