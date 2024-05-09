import { DonutChart, Card } from '@tremor/react'
import exp from 'constants'

// How many of those at high midas risk are male, female, etc?

const genderDataPlaceholder = [
  {
    Gender: 'Male',
    Count: 70
  },
  {
    Gender: 'Female',
    Count: 30
  }
]

const ethnicityDataPlaceholder = [
  {
    Ethnicity: 'White',
    Count: 45
  },
  {
    Ethnicity: 'Hispanic',
    Count: 32
  },
  {
    Ethnicity: 'Other POC',
    Count: 23
  }
]

const englishLearnerDataPlaceholder = [
  {
    ELL: 'ELL',
    Count: 82
  },
  {
    ELL: 'Not ELL',
    Count: 18
  }
]

export function GenderAtRiskChart() {
  return (

      <Card className=' min-w-full w-52 border-transparent ring-transparent bg-transparent'>
        <DonutChart
          data={genderDataPlaceholder}
          index="Gender"
          category="Count"
          label='At Risk Gender'
          showAnimation={true}
          animationDuration={500}
          colors={['sky-300', 'rose-300']}
        />
      </Card>
  )
}

export function EthnicityAtRiskChart() {
  return (

      <Card className=' min-w-full w-52 border-transparent ring-transparent bg-transparent'>
        <DonutChart
          data={ethnicityDataPlaceholder}
          index="Ethnicity"
          category="Count"
          label='At Risk Ethnicity'
          showAnimation={true}
          animationDuration={500}
          colors={['yellow-300', 'purple-300', 'green-400']}
        />
      </Card>
  )
}

export function EnglishLearnerAtRiskChart() {
  return (

      <Card className=' min-w-full w-52 border-transparent ring-transparent bg-transparent'>
        <DonutChart
          data={englishLearnerDataPlaceholder}
          index="ELL"
          category="Count"
          label='At Risk ELL'
          showAnimation={true}
          animationDuration={500}
          colors={['green-400', 'zinc-300']}
        />
      </Card>
  )
}

