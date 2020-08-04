import React, { PureComponent } from 'react'
import AnyChart from 'anychart-react/dist/anychart-react.js'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'

const cons = ['Paid']
const pros = [
  'Great documentation',
  'Very customizable',
  'Vanilla with official react adaptor'
]

export class Anychart extends PureComponent {
  render () {
    const complexSettings = {
      width: '100%',
      height: 350,
      type: 'pie',
      outsideLabelsOffset: '50%',
      innerRadius: '80%',
      data: DEFAULT_DATA.map(({ litres }, i) => ({ value: litres, normal: { fill: COLORS[i] } })),
      labels: {
        position: 'outside',
        fontColor: 'black',
        items: DEFAULT_DATA.map(({ country }) => ({text:country})),
      },
      legend: {
        items: DEFAULT_DATA.map(({ country }, i) => ({ text: country, fontColor: COLORS[i], iconFill: {color:COLORS[i]} })),
        padding: 0
      }
    }
    return (
      <div className="chart-demo">
        <a href=" https://www.anychart.com/" target="_blank" rel="noopener noreferrer"><h3>Anycharts  (💵)</h3></a>
        <AnyChart
          {...complexSettings}
        />
        <ProsCons pros={pros} cons={cons}/>
      </div>

    )
  }
}
