import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import { ECharts } from './echarts'
import { Anychart } from './anychart'
import { ApexChart } from './apex'
import { ChartJS } from './chartjs'
import Amacharts from './amcharts'
import Rechart from './recahrts'

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
