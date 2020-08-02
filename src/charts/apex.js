import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import { DEFAULT_DATA } from '../data'

export class ApexChart extends Component {
  constructor (props) {
    super(props)

    this.state = {

      series: DEFAULT_DATA.map(({ litres }) => litres),
      options: {
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

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type={this.state.options.chart.type} height={350}/>
      </div>

    )
  }
}
