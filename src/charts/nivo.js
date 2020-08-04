import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import { COLORS, DEFAULT_DATA } from '../data'
import { ProsCons } from '../utils/pros-cons'

const pros = ['Free', 'SVG/Canvas', 'Good documentation with a playground', 'Customizable']
const cons = ['React only(but not complicated to migrate to any framework-agnostic solution)']

export const Nivo = ({}) => {
  const options = {
    data: DEFAULT_DATA.map(({ country, litres }) => ({ id: country, value: litres })),
    margin: { top: 40, right: 200, bottom: 40, left: 80 },
    pixelRatio: 2,
    innerRadius: 0.8,
    padAngle: 0.7,
    cornerRadius: 0,
    colors: COLORS,
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
    slicesLabelsTextColor: 'white',
    enableSlicesLabels: false,
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

  return (
    <div className="chart-demo">
      <a href="https://nivo.rocks" target="_blank" rel="noopener noreferrer"><h3>Nivo (7.4K🌟)</h3></a>
      <div style={{ height: 350, width: '100%' }}>
        <ResponsivePie {...options}/>
      </div>
      <ProsCons cons={cons} pros={pros}></ProsCons>
    </div>
  )
}