import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import { DEFAULT_DATA } from '../data'

export const ChartJS = () => {
// And for a doughnut chart
const options = {cutoutPercentage: 90,}
  const data = {
    labels: DEFAULT_DATA.map(({ country }) => country),


    datasets: [
      {
        data: DEFAULT_DATA.map(({ litres }) => litres),
        borderWidth: 10,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          'red',
          'green',
          'blue'
        ]
      }]
  }

  return (
    <Doughnut data={data} options={options}/>
  )
}
