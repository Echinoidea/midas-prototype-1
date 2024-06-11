'use client';

import { DonutChart, Card, Legend, BarChart } from '@tremor/react'
import { useState } from 'react';
// import BarChart from "@tremor/react";

 

const genderDataPlaceholder = [
  {
    Gender: 'Male',
    'High Risk': 40,
    'Some Risk': 200,
    'Low Risk': 180
  },
  {
    Gender: 'Female',
    'High Risk': 30,
    'Some Risk': 56,
    'Low Risk': 300
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

const englishLearnerDataPlaceholder = [
  {
    ELL: 'ELL',
    'High Risk': 58,
    'Some Risk': 200,
    'Low Risk': 100
  },
  {
    ELL: 'Not ELL',
    'High Risk': 20,
    'Some Risk': 150,
    'Low Risk': 130
  },
]

const colors = ['red-400', 'yellow-300', 'green-400']

export function BarChartGender() {
  const [ group, setGroup ] = useState(2)

  return (
    <BarChart
        className='min-h-full h-max'
        data={genderDataPlaceholder}
        index='Gender'
        categories={['High Risk', 'Some Risk', 'Low Risk']}
        colors={colors}
        layout='horizontal'
        yAxisWidth={50}
        stack={true}
        tickGap={25}
        barCategoryGap={40}
      />
    
  )
}

export function BarChartEthnicity() {
  return (

      <BarChart
        className='min-h-full h-max'
        data={ethnicityDataPlaceholder}
        index='Ethnicity'
        categories={['High Risk', 'Some Risk', 'Low Risk']}
        colors={colors}
        layout='horizontal'
        yAxisWidth={50}
        stack={true}
        barCategoryGap={16}
      />
  )
}

export function BarChartEnglishLearner() {
  return (

    <BarChart
      className='min-h-full h-max'
      data={englishLearnerDataPlaceholder}
      index='ELL'
      categories={['High Risk', 'Some Risk', 'Low Risk']}
      colors={colors}
      layout='horizontal'
      yAxisWidth={50}
      stack={true}
      barCategoryGap={40}
    />
  )
}

