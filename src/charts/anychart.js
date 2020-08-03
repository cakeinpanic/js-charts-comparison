import React, { PureComponent } from 'react'
import AnyChart from 'anychart-react/dist/anychart-react.js'
import { DEFAULT_DATA } from '../data'
import { ProsCons } from './pros-cons'

const cons = ['Paid']
const pros = [
  'Great documentation',
  'Very customizable',
  'Vanilla with react adaptor(official?)'
]

export class Anychart extends PureComponent {
  data = DEFAULT_DATA
  colors = ['red', 'green', 'blue', 'yellow', 'lightblue', 'orange', 'pink', 'lightgreen']

  render () {
    const complexSettings = {
      width: '100%',
      height: 350,
      type: 'pie',
      outsideLabelsOffset: '50%',
      innerRadius: '80%',
      data: this.data.map(({ litres }) => litres),
      labels: {
        position: 'outside',
        fontColor: 'black',
        getLabel: ()=>'123',
        items: DEFAULT_DATA.map(({ country }) => ({text:country})),
      },
      legend: {
        items: DEFAULT_DATA.map(({ country }) => ({text:country})),
        padding: 0
      }
    }
    return (
      <div className="chart-demo">
        <a href=" https://www.anychart.com/" target="_blank"><h3>Anycharts</h3></a>
        <AnyChart
          {...complexSettings}
        />
        <ProsCons pros={pros} cons={cons}/>
      </div>

    )
  }
}
