import { ResponsivePieCanvas } from '@nivo/pie'
import React from 'react'
import { DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'

const pros = ['Free']
const cons = ['React only', 'Well customizable']

export const Nivo = ({}) => {
  const options = {
    data: DEFAULT_DATA.map(({ country, litres }) => ({ id: country, value: litres })),
    margin: { top: 40, right: 200, bottom: 40, left: 80 },
    pixelRatio: 2,
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
    colors: { scheme: 'paired' },
    borderColor: { from: 'color', modifiers: [['darker', 0.6]] },
    radialLabelsSkipAngle: 10,
    radialLabelsTextXOffset: 6,
    radialLabelsTextColor: '#333333',
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsLinkColor: { from: 'color' },
    slicesLabelsSkipAngle: 10,
    slicesLabelsTextColor: '#333333',
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    defs: [
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }],
    fill: [
      {
        match: {
          id: 'ruby'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'c'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'go'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'python'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'scala'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'lisp'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'elixir'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'javascript'
        },
        id: 'lines'
      }

    ],
    legends: [
      {
        anchor: 'right',
        direction: 'column',
        translateX: 140,
        itemWidth: 60,
        itemHeight: 14,
        itemsSpacing: 2,
        symbolSize: 14,
        symbolShape: 'circle'
      }
    ]
  }

  return (<div className="chart-demo">
      <a href="https://nivo.rocks" target="_blank" rel="noopener noreferrer"><h3>Nivo (7.4K🌟)</h3></a>
      <div style={{ height: 350, width: '100%' }}>
        <ResponsivePieCanvas {...options}/>
      </div>
      <ProsCons cons={cons} pros={pros}></ProsCons>
    </div>
  )
}