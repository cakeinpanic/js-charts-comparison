import React, { Component } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from './pros-cons'

am4core.useTheme(am4themes_animated)
const pros = ['Very customizable', 'svg – SSR', 'Framework agnostic, has official react wrapper']
const cons = ['Expensive(with maps even more)', 'Declarative: not nice to read or move from it to another library']

class Amacharts extends Component {
  componentDidMount () {
    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.PieChart)

   // Add data
    chart.data = DEFAULT_DATA
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = 'litres'
    pieSeries.dataFields.category = 'country'

    pieSeries.colors.list = COLORS.map(c => am4core.color(c))


    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(90)

    // Set up fills
    pieSeries.slices.template.fillOpacity = 1

    var hs = pieSeries.slices.template.states.getKey('hover')
    hs.properties.scale = 1
    hs.properties.fillOpacity = 0.5

  }

  componentWillUnmount () {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  render () {
    return (
      <div className="chart-demo">
        <a href="https://www.amcharts.com/" target="_blank" rel="noopener noreferrer"><h3>Amcharts</h3></a>
        <div id="chartdiv" style={{ width: '600px', height: '300px' }}></div>
        <ProsCons cons={cons} pros={pros}></ProsCons>
      </div>
    )
  }
}

export default Amacharts