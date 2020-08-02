import React from 'react'
// with default styles:
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Rechart from './recahrts'
import Amacharts from './amcharts'
import 'react-tabs/style/react-tabs.css'
import { ChartJS } from './chartjs'
import { ApexChart } from './apex'
import { Anychart } from './anychart'

export const AllChartsDemo = () => {

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Anychart</Tab>
          <Tab>Apex charts</Tab>
          <Tab>Chartjs</Tab>
          <Tab>Amcharts</Tab>
          <Tab>Recharts</Tab>
        </TabList>

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
