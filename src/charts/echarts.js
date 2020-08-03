import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { COLORS, DEFAULT_DATA } from '../data'


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
    <ReactEcharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
    />
    </div>)
}