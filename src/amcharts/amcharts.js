import React, { Component } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_animated)
const DATA = [
  {
    'country': 'Lithuania',
    'litres': 501.9
  }, {
    'country': 'Czechia',
    'litres': 301.9
  }, {
    'country': 'Ireland',
    'litres': 201.1
  }, {
    'country': 'Germany',
    'litres': 165.8
  }, {
    'country': 'Australia',
    'litres': 139.9
  }, {
    'country': 'Austria',
    'litres': 128.3
  }, {
    'country': 'UK',
    'litres': 99
  }, {
    'country': 'Belgium',
    'litres': 60
  }, {
    'country': 'The Netherlands',
    'litres': 50
  }]

class Amacharts extends Component {
  componentDidMount () {
    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.PieChart)

   // Add data
    chart.data = DATA
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = 'litres'
    pieSeries.dataFields.category = 'country'


    pieSeries.colors.list = [
      am4core.color("red"),
      am4core.color("yellow")
    ];

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
        <h3>Amdocs</h3>
        <div id="chartdiv" style={{ width: '600px', height: '300px' }}></div>
      </div>
    )
  }
}

export default Amacharts