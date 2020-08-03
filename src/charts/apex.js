import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from './pros-cons'

const pros = ['Free(MIT)', 'Vanilla with react adaptor']
const cons = [
  'export(?) and SSR for money',
  'Hardly customizable(no offset labels for pie chart for example)'
]


export class ApexChart extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: DEFAULT_DATA.map(({ litres }) => litres),
      options: {
        fill: {
          colors: COLORS
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '85%'
            }
          }
        },
        chart: {
          type: 'donut',
          dropShadow: {
            enabled: false,
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
        labels: DEFAULT_DATA.map(({ country }) => country)
      }

    }
  }

  render () {
    return (
      <div className="chart-demo">
        <a href="https://apexcharts.com/javascript-chart-demos/" target="_blank"><h3>Apex charts</h3></a>
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type={this.state.options.chart.type} height={350}/>
      </div>
        <ProsCons cons={cons} pros={pros}></ProsCons>
      </div>
    )
  }
}
