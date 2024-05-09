import { BarChart, Card } from '@tremor/react'
import exp from 'constants'
import { DonutChartEnglishLearner, DonutChartEthnicity, DonutChartGender } from './total-demographics-charts'
 

const genderDataPlaceholder = [
  {
    Gender: 'Gender',
    'Male': 230,
    'Female': 170 
  }
]

const ethnicityDataPlaceholder = [
  {
    Ethnicity: 'Ethnicity',
    'White': 154,
    'Hispanic': 126,
    'Other POC': 120
  }
]

const englishLearnerDataPlaceholder = [
  {
    'English Learner': 'English Learner',
    'ELL': 103,
    'Not ELL': 297
  }
  
]

export function BarChartGender() {
  return (

      <Card className=' min-w-full w-52'>
        <BarChart
          data={genderDataPlaceholder}
          index="Gender"
          maxValue={300}// USE THIS TO LIMIT Y AXIS
          
          categories={['Male', 'Female']}
          colors={['sky-300', 'rose-300']}
          showAnimation={true}
          animationDuration={500}
        />
      </Card>
  )
}

export function BarChartEthnicity() {
  return (

      <Card className=' min-w-full w-52'>
        <BarChart
          data={ethnicityDataPlaceholder}
          
          index="Ethnicity"
          categories={['White', 'Hispanic', 'Other POC']}
          // categories={['Count']}
          maxValue={300}
          
          colors={['yellow-300', 'lime-300', 'green-400']}
          showAnimation={true}
          animationDuration={500}
        />
      </Card>
  )
}

export function BarChartEnglishLearner() {
  return (

      <Card className=' min-w-full w-52'>
        <BarChart
          data={englishLearnerDataPlaceholder}
          index="English Learner"
          maxValue={300}
          categories={['ELL', 'Not ELL']}
          colors={['green-400', 'zinc-300']}
          showAnimation={true}
          animationDuration={500}
        />
      </Card>

      // <Card className=' min-w-full w-52'>
      //   <DonutChart
      //     data={englishLearnerDataPlaceholder}
      //     index="English Learner"
      //     maxValue={300}
      //     // categories={['ELL', 'Not ELL']}
      //     colors={['green-400', 'zinc-300']}
      //     showAnimation={true}
      //     animationDuration={500}
      //   />
      // </Card>
  )
}

export function BarChartGroup() {
  return (
    <div>

    
    <div className='flex flex-row bg-zinc-100 shadow-sm basis-full my-4 rounded-xl'>
      <div className='flex basis-1/4 items-center px-2'>
        {/* <BarChartGender/> */}
        <DonutChartGender></DonutChartGender>
      </div>
      <div className='flex basis-1/2 items-center px-2'>
        {/* <BarChartEthnicity/>
         */}
         <DonutChartEthnicity/>
      </div>
      <div className='flex basis-1/4 items-center px-2'>
      {/* <BarChartEnglishLearner/> */}
        <DonutChartEnglishLearner/>
      </div>
    </div>

    <div className='flex flex-row bg-zinc-100 shadow-sm basis-full my-4 rounded-xl'>
    <div className='flex basis-1/4 items-center px-2'>
      {/* <BarChartGender/> */}
      <DonutChartGender></DonutChartGender>
    </div>
    <div className='flex basis-1/2 items-center px-2'>
      {/* <BarChartEthnicity/>
      */}
      <DonutChartEthnicity/>
    </div>
    <div className='flex basis-1/4 items-center px-2'>
    {/* <BarChartEnglishLearner/> */}
      <DonutChartEnglishLearner/>
    </div>
    </div>
    </div>
  )
}

