import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import { ECharts } from '../charts/echarts'
import { Anychart } from '../charts/anychart'
import { ApexChart } from '../charts/apex'
import { ChartJS } from '../charts/chartjs'
import Amacharts from '../charts/amcharts'
import Rechart from '../charts/recahrts'
import { Chartist } from '../charts/chartist'
import { Nivo } from '../charts/nivo'
import { Highchart} from '../charts/highcharts'


export const AllChartsDemo = () => {
  const demos = [
    {
      name: 'Highcharts',
      component: <Highchart/>
    }, {
      name: 'Nivo',
      component: <Nivo/>
    }, {
      name: 'Chartist',
      component: <Chartist/>
    }, {
      name: 'Ecahrts',
      component: <ECharts/>
    }, {
      name: 'Apex',
      component: <ApexChart/>
    }, {
      name: 'Anychart',
      component: <Anychart/>
    }, {
      name: 'Chartjs',
      component: <ChartJS/>
    }, {
      name: 'Amcharts',
      component: <Amacharts/>
    }, {
      name: 'Recharts',
      component: <Rechart/>
    }]
  return (
    <div>
      <h1>Javascript chart libraries comparison</h1>
      <Tabs>
        <TabList>
          {demos.map(({ name }) => (<Tab key={name} >{name}</Tab>))}
        </TabList>
        {demos.map(({ component },i) => (<TabPanel key={i}>{component}</TabPanel>))}
      </Tabs>
    </div>
  )
}
