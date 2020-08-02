import React from 'react'
// with default styles:
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Rechart from './recahrts'
import Amacharts from './amcharts'
import 'react-tabs/style/react-tabs.css';

export const AllChartsDemo = () => {

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Amcharts</Tab>
          <Tab>Recharts</Tab>
        </TabList>

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
