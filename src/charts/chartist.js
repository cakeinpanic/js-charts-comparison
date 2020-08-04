import React from 'react'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'
import ChartistGraph from 'react-chartist'
import LegendPlugin from 'chartist-plugin-legend'
import HoverPlugin from 'chartist-hover'
import 'react-chartist/'

const pros = [
  'Free',
  'SVG – SSR',
  'Very customisable(gives access to full control of SVG)',
  'Framework agnostic with a react wrapper'
]

const cons = [
  'React wrapper is maintained not by owners of library',
  'Documentation is bad',
  'All additions(legend, tooltip, interactivity) are opensource plugins with doubted support',
  'To customise sometimes need to dive into SVG']

export const Chartist = () => {
  const data = {
    labels: DEFAULT_DATA.map(({ country }) => country),
    series: DEFAULT_DATA.map(({ litres }) => litres)
  }
  const options = {
    donut: true,
    height: 300,
    donutWidth: 20,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
    showLine: true,
    chartPadding: 40,
    labelOffset: 30,
    labelDirection: 'explode',
    plugins: [
      LegendPlugin(),
      HoverPlugin({
        onMouseEnter: () => {console.log(456)},
        triggerSelector: '.ct-slice-donut-solid'
      })
    ]
  }



  const listener = {
    draw: function (data, i) {
      data.element._node.setAttribute('style', 'fill:' + COLORS[data.index]+';color:' + COLORS[data.index])
    }
  }
  return (
    <div className="chart-demo">
      <a href="https://gionkunz.github.io/chartist-js/" target="_blank" rel="noopener noreferrer"><h3>Chartist (12.3K🌟)</h3></a>
      <ChartistGraph data={data} options={options} listener={listener} type="Pie"/>
      <ProsCons cons={cons} pros={pros}/>
    </div>)
}