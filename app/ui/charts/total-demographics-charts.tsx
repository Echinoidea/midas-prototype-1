import { DonutChart, Card, Legend } from '@tremor/react'
import exp from 'constants'
 

const genderDataPlaceholder = [
  {
    Gender: 'Male',
    Count: 530
  },
  {
    Gender: 'Female',
    Count: 550
  }
]

const ethnicityDataPlaceholder = [
  {
    Ethnicity: 'White',
    Count: 338
  },
  {
    Ethnicity: 'Hispanic',
    Count: 370
  },
  {
    Ethnicity: 'Other POC',
    Count: 372
  }
]

const englishLearnerDataPlaceholder = [
  {
    ELL: 'ELL',
    Count: 200
  },
  {
    ELL: 'Not ELL',
    Count: 880
  }
]

export function DonutChartGender() {
  return (
    <Card className='min-w-full w-52 border-transparent ring-transparent bg-transparent'>
        <DonutChart
          data={genderDataPlaceholder}
          index="Gender"
          category="Count"
          label='Total Gender'
          showAnimation={true}
          animationDuration={500}
          colors={['sky-300', 'rose-300']}
          
        />
      </Card>
  )
}

export function DonutChartEthnicity() {
  return (

    <Card className='min-w-full w-52 border-transparent ring-transparent bg-transparent'>
        
        <DonutChart
          data={ethnicityDataPlaceholder}
          index="Ethnicity"
          category="Count"
          label='Total Ethnicity'
          showAnimation={true}
          animationDuration={500}
          colors={['yellow-300', 'purple-300', 'green-400']}
        />
      </Card>
  )
}

export function DonutChartEnglishLearner() {
  return (

    <Card className=' min-w-full w-52 border-transparent ring-transparent bg-transparent'>
    <DonutChart
      data={englishLearnerDataPlaceholder}
      index="ELL"
      category="Count"
      label='Total ELL'
      showAnimation={true}
      animationDuration={500}
      colors={['green-400', 'zinc-300']}
    />
  </Card>
  )
}

