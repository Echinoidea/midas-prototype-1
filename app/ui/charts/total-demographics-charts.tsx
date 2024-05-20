import { DonutChart, Card, Legend, BarChart } from '@tremor/react'
import exp from 'constants'
 

const genderDataPlaceholder = [
  {
    Gender: 'Male',
    'Total': 530,
    'High Risk': 70,
    'Some Risk': 200,
    'Low Risk': 180
  },
  {
    Gender: 'Female',
    'Total': 550,
    'High Risk': 30,
    'Some Risk': 56,
    'Low Risk': 300
  }
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
  }
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
  }
]

const colors = ['rose-500', 'yellow-400', 'green-500']

export function DonutChartGender() {
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
    />
  )
}

