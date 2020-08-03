import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from './pros-cons'

const pros = ['Free(apache license)', 'Framework agnostic with a react wrapper(even react native wrapper)', 'wonderful documentation', 'Maintained actively(aug 2020)']
const cons = ['canvas', 'very customizable']


export const ECharts = () => {
  const options = {
    tooltip: {
      trigger: 'item',
      formatter: 'I am customized tooltip <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: DEFAULT_DATA.map(({ country }) => country)
    },
    color: COLORS,
    series: [
      {
        name: 'Chart',
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data:
          DEFAULT_DATA.map(({ country, litres }) => ({value: litres, name: country}))
      }
    ]
  }

  return (
    <div className="chart-demo">
      <a href="https://echarts.apache.org/en/index.html" target="_blank"><h3>Echarts</h3></a>
    <ReactEcharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
    />
      <ProsCons cons={cons} pros={pros}></ProsCons>
    </div>)
}