import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import { ECharts } from '../charts/echarts'
import { Anychart } from '../charts/anychart'
import { ApexChart } from '../charts/apex'
import { ChartJS } from '../charts/chartjs'
import Amacharts from '../charts/amcharts'
import Rechart from '../charts/recahrts'

export const AllChartsDemo = () => {

  return (
    <div>
      <h1>Javascript chart libraries comparison</h1>
      <Tabs>
        <TabList>
          <Tab>Ecahrts</Tab>
          <Tab>Anychart</Tab>
          <Tab>Apex charts</Tab>
          <Tab>Chartjs</Tab>
          <Tab>Amcharts</Tab>
          <Tab>Recharts</Tab>
        </TabList>

        <TabPanel>
          <ECharts/>
        </TabPanel>
        <TabPanel>
          <Anychart/>
        </TabPanel>
        <TabPanel>
          <ApexChart/>
        </TabPanel>

        <TabPanel>
          <ChartJS/>
        </TabPanel>

        <TabPanel>
         <Amacharts/>
        </TabPanel>

        <TabPanel>
          <Rechart/>
        </TabPanel>

      </Tabs>
    </div>
  )
}
