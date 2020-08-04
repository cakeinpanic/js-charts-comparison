import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'

const pros = ['Free', 'framework agnostic with a react wrapper']
const cons = ['Hardly customizable(no possibility to add labels to each part)', 'canvas', 'react wrapper maintained not by devs of charts itself']

export const ChartJS = () => {
// And for a doughnut chart
  const options = { cutoutPercentage: 90 }
  const data = {
    labels: DEFAULT_DATA.map(({ country }) => country),
    datasets: [
      {
        data: DEFAULT_DATA.map(({ litres }) => litres),
        borderWidth: 10,
        backgroundColor:COLORS,
        hoverBackgroundColor: COLORS
      }]
  }

  return (
    <div className="chart-demo">
      <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer"><h3>Chartjs (49.8K🌟)</h3></a>
      <Doughnut className="chart" data={data} options={options} height={100} />
      <ProsCons cons={cons} pros={pros}></ProsCons>
    </div>
  )
}
