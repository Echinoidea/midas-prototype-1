import { DonutChart, Card, Legend, BarChart } from '@tremor/react'
// import BarChart from "@tremor/react";

 import { ResponsiveBar } from '@nivo/bar';

const genderDataPlaceholder = [
  {
    id: 'Male', // 455
    'High Risk': .08,
    'Some Risk': .44,
    'Low Risk': .48
  },
  {
    id: 'Female', // 591
    'High Risk': .12,
    'Some Risk': .33,
    'Low Risk': .55
  },
]

const ethnicityDataPlaceholder = [
  
  {
    Ethnicity: 'White',
    'High Risk': 58,
    'Some Risk': 200,
    'Low Risk': 100
  },
  {
    Ethnicity: 'Hispanic',
    'High Risk': 20,
    'Some Risk': 150,
    'Low Risk': 130
  },
  {
    Ethnicity: 'Other POC',
    'High Risk': 33,
    'Some Risk': 156,
    'Low Risk': 200
  },
]

const ethnicityDataPlaceholder2 = [
  {
    id: 'White',
    'High Risk': .162,
    'Some Risk': .559,
    'Low Risk': .279
  },
  {
    id: 'Hispanic',
    'High Risk': .067,
    'Some Risk': .50,
    'Low Risk': .433
  },
  {
    id: 'Other POC',
    'High Risk': .085,
    'Some Risk': .401,
    'Low Risk': .514
  }
]

const englishLearnerDataPlaceholder = [
  {
    id: 'ELL', // 250
    'High Risk': .2,
    'Some Risk': .35,
    'Low Risk': .45
  },
  {
    id: 'Not ELL', 
    'High Risk': .33,
    'Some Risk': .4,
    'Low Risk': .27
  },
]

const colors = ['red-400', 'yellow-300', 'green-400']

export function BarChartGender() {
  return (
    <ResponsiveBar
      data={genderDataPlaceholder}
      keys={['High Risk', 'Some Risk', 'Low Risk']}
      indexBy="id"
      margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="stacked"
      colors={['#f87171', '#fde047', '#4ade80']}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      valueFormat={" >-.1%"}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Gender',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      // axisLeft={{
      //   tickSize: 0,
      //   tickPadding: 0,
      //   tickRotation: 0,
      //   legend: '',
      //   legendPosition: 'middle',
      //   legendOffset: 0,
      // }}
      axisLeft={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top-right',
          direction: 'row',
          justify: true,
          translateX: 0,
          translateY: -50,
          itemsSpacing: 50,
          itemWidth: 65,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 10,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
    />
    
  )
}

export function BarChartEthnicity() {
  return (
    <ResponsiveBar
      data={ethnicityDataPlaceholder2}
      keys={['High Risk', 'Some Risk', 'Low Risk']}
      indexBy="id"
      margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="stacked"
      colors={['#f87171', '#fde047', '#4ade80']}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      valueFormat={" >-.1%"}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Ethnicity',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      // axisLeft={{
      //   tickSize: 0,
      //   tickPadding: 0,
      //   tickRotation: 0,
      //   legend: '',
      //   legendPosition: 'middle',
      //   legendOffset: 0,
      // }}
      axisLeft={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top-right',
          direction: 'row',
          justify: true,
          translateX: 0,
          translateY: -50,
          itemsSpacing: 50,
          itemWidth: 65,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 10,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
    />
  )
}

export function BarChartEnglishLearner() {
  return (

    <ResponsiveBar
      data={englishLearnerDataPlaceholder}
      keys={['High Risk', 'Some Risk', 'Low Risk']}
      indexBy="id"
      margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="stacked"
      colors={['#f87171', '#fde047', '#4ade80']}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      valueFormat={" >-.1%"}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'ELL',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      // axisLeft={{
      //   tickSize: 0,
      //   tickPadding: 0,
      //   tickRotation: 0,
      //   legend: '',
      //   legendPosition: 'middle',
      //   legendOffset: 0,
      // }}
      axisLeft={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top-right',
          direction: 'row',
          justify: true,
          translateX: 0,
          translateY: -50,
          itemsSpacing: 50,
          itemWidth: 65,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 10,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
    />
  )
}

