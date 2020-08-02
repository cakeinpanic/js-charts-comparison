import React from 'react'
// with default styles:
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Rechart from './recahrts'
import Amacharts from './amcharts'
import 'react-tabs/style/react-tabs.css'
import { ChartJS } from './chartjs'
import { ApexChart } from './apex'

export const AllChartsDemo = () => {

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Apex charts</Tab>
          <Tab>Chartjs</Tab>
          <Tab>Amcharts</Tab>
          <Tab>Recharts</Tab>
        </TabList>

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
