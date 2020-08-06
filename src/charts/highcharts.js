import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ProsCons } from '../utils/pros-cons'
import { COLORS, DEFAULT_DATA } from '../data'

const pros = ['Framework agnostic', 'SVG', 'Official react wrapper', 'Well customizable', 'Has interactive events']
const cons = ['Paid']

export const Highchart = () => {
  const options = {
    colors: COLORS,
    chart: {
      type: 'pie'
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px">Custom tooltip {point.key}</span><br/>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true
        },
        showInLegend: true
      }
    },
    series: [
      {
        innerSize: '80%',
        events: { mouseOver: function (e) {console.log(this)} },
        data: DEFAULT_DATA.map(({ litres, country }) => ([country, litres]))
      }]
  }

  return <div className="chart-demo">
    <a href="https://www.highcharts.com/" target="_blank" rel="noopener noreferrer"><h3>highcharts ($)</h3></a>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    <ProsCons cons={cons} pros={pros}></ProsCons>
  </div>
}