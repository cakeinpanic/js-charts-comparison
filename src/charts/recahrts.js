import React, { PureComponent } from 'react'
import { Cell, LabelList, Pie, PieChart } from 'recharts'
import { DEFAULT_DATA } from '../data'

export default class Rechart extends PureComponent {
  data = DEFAULT_DATA
  colors = ['red', 'green', 'blue', 'yellow', 'lightblue', 'orange', 'pink', 'lightgreen']


  render () {
    return (
      <div className="chart-demo">
        <h3>Recharts</h3>
        <PieChart width={400} height={400}>
          <Pie data={this.data} dataKey="litres" nameKey="country" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label="ggg">
            {
              this.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.colors[index]}/>
              ))
            }
            // why it sous not work?
            <LabelList valueAccessor={()=>'fff'} dataKey="litres" position="top" angle="45"/>
          </Pie>

        </PieChart>
      </div>
    )
  }
}
