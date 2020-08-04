import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'

const pros = [
  'Free(apache license)',
  'Framework agnostic with a react wrapper(even react native wrapper)',
  'very customizable',
  'wonderful documentation',
  'Maintained actively(aug 2020)',
  'Has ability to work with maps',
  'Used by gitlab: https://about.gitlab.com/blog/2019/09/30/why-we-chose-echarts/']
const cons = ['canvas', 'react wrapper is maintained not by owners of library']


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
      <a href="https://echarts.apache.org/en/index.html" target="_blank" rel="noopener noreferrer"><h3>Echarts (42.3K🌟)</h3></a>
    <ReactEcharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
    />
      <ProsCons cons={cons} pros={pros}></ProsCons>
    </div>)
}