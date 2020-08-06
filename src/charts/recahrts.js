import React, { PureComponent } from 'react'
import { Cell, Legend, Pie, PieChart } from 'recharts'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'

const RADIAN = Math.PI / 180

const pros = ['Free', 'svg', 'Well customizable']
const cons = ['React only']


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
  colors = COLORS

  state = {}

  handleMouseEnter = (value) => {
    this.setState({
      [value]: true
    })
  }

  handleMouseLeave = (value) => {
    this.setState({
      [value]: false
    })
  }

  options = {
    data: this.data,
    dataKey: 'litres',
    nameKey: 'country',
    innerRadius: 70,
    isAnimationActive: false,
    outerRadius: 90,
    fill: '#82ca9d',
    label: renderCustomizedLabel
  }

  render () {

    return (
      <div className="chart-demo">
        <a href="https://recharts.org/" target="_blank" rel="noopener noreferrer"><h3>Recharts (14.5K★)</h3></a>
        <PieChart width={500} height={300}>
          <Legend onMouseEnter={(o) => this.handleMouseEnter(o.value)} onMouseLeave={(o) => this.handleMouseLeave(o.value)}/>

          <Pie {...this.options}>
            {
              this.data.map(({ country }, index) => {
                const opacity = this.state[country] ? 1 : .5
                const style = this.state[country] ? { transform: 'scale(1.01)' } : null
                return <Cell key={`cell-${index}`} fill={this.colors[index]} fillOpacity={opacity} style={style} onMouseEnter={() => this.handleMouseEnter(country)}
                             onMouseLeave={() => this.handleMouseLeave(country)}/>
              })
            }
          </Pie>

        </PieChart>
        <ProsCons cons={cons} pros={pros}></ProsCons>
      </div>
    )
  }
}
