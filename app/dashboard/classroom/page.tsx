'use client';

import { SaebrsSummary } from '@/app/ui/dashboard/cards/population/saebrs-summary';
import { PopToRiskCharts } from '@/app/ui/dashboard/cards/population/demographics-summary';
import { CardDisciplinarySummary } from '@/app/ui/dashboard/cards/population/disciplinary-summary';
import { CardTestScoreSummary } from '@/app/ui/dashboard/cards/population/test-scores-summary';
import { CardConfidenceVisualizer } from '@/app/ui/dashboard/cards/general/card-confidence';
import { useState } from 'react';
import { CardThreeValue } from '@/app/ui/dashboard/cards/general/card-three-value';
import { Tooltip } from '@nextui-org/react';
import { DonutChartGender } from '@/app/ui/charts/total-demographics-charts';
import ClassSearch from '@/app/ui/dashboard/cards/search/class-search';
import { useSearchParams } from 'next/navigation';



function MidasRiskTooltipContent() {
  return (
    <div>
      Percentages of students at the three different MIDAS risk levels.
    </div>
  )
}

export default async function Page() {
  // const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
  // const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
  // const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
  // const schools = await fetchSchools();
  // const numberOfStudents = await fetchStudents("Greco Middle School");

  const [midasRisk, setMidasRisk] = useState({
    'low': '45%',
    'some': '40%',
    'high': '15%'
  })

  const [disciplineRisk, setDisciplineRisk] = useState({
    'odrZero': '77%',
    'odrSome': '23%',
    'suspZero': '80%',
    'suspSome': '20%'   
  })

  // ASK SONJA WHAT THE VALUES FOR TEST RISK ARE
  const [testRisk, setTestRisk] = useState({
    
  })

  const [saebrsRisk, setSaebrsRisk] = useState({
    'saebrsTotal': ['60%', '25%', '15%'],
    'mySaebrsTotal': ['54%', '33%', '13%'],
    'saebrsEmotional': ['59%', '33%', '8%'], 
    'mySaebrsEmotional': ['50%', '37%', '13%'],
    'saebrsSocial': ['40%', '41%', '19%'], 
    'mySaebrsSocial': ['40%', '39%', '17%'], 
    'saebrsAcademic': ['72%', '16%', '12%'], 
    'mySaebrsAcademic':['70%', '18%', '12%'],
  })

  // TODO fetch function to get first authorized classroom id
  const [ defaultClass, setDefaultClass ] = useState("C01"); // TEMPORARY VALUE

  const [ selectedClass, setSelectedClass ] = useState(useSearchParams().get("classroom") || defaultClass);

  return (

    

    <main>
      <div className='flex md:flex-row flex-col gap-4'>
        {/* LEFT COL */}
        <div className="flex flex-col justify-normal gap-3 basis-1/4">
            
          <div className='flex flex-col justify-start'>
            <ClassSearch selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
          </div>

          <div className='flex flex-col justify-start'>
              <CardThreeValue 
                title="MIDAS Risk Scores" 
                values={[
                  midasRisk['low'],
                  midasRisk['some'],
                  midasRisk['high']
                ]} 
              subtitles={['Low', 'Some', 'High']}
              tooltip={MidasRiskTooltipContent()}/>
          </div>

          <div className='flex flex-col justify-start'>
            <CardConfidenceVisualizer confidence={90} confidenceThresholds={[85, 90, 95, 99]}/>
          </div>

          <div className='flex flex-col justify-start basis-1/6'>
            <CardDisciplinarySummary
              title={'Disciplinary Action Summary'} 
              valuesTop={[
                disciplineRisk['odrZero'],
                disciplineRisk['odrSome']
              ]} 
              subtitlesTop={['Zero', 'One Plus']} 
              valuesBottom={[
                disciplineRisk['suspZero'],
                disciplineRisk['suspSome']
              ]}
              subtitlesBottom={['Zero', 'One Plus']}            
            />
          </div>

          <div className='flex flex-col basis-1/6'>
            <CardTestScoreSummary
              title={'Test Score Risk Summary'} 
              valuesTop={['60%', '40%']} 
              subtitlesTop={['Low', 'Some']} 
              valuesBottom={['55%', '45%']}
              subtitlesBottom={['Low', 'Some']}            
            />
          </div>
        </div>

        <div className='flex flex-col gap-6 basis-3/4'>
            <div className='flex flex-col basis-1/6'>
              <SaebrsSummary 
                saebrsTotal={saebrsRisk['mySaebrsTotal']}
                mySaebrsTotal={saebrsRisk['mySaebrsTotal']}
                saebrsEmotional={saebrsRisk['mySaebrsTotal']}
                mySaebrsEmotional={saebrsRisk['mySaebrsTotal']}
                saebrsSocial={saebrsRisk['mySaebrsTotal']}
                mySaebrsSocial={saebrsRisk['mySaebrsTotal']}
                saebrsAcademic={saebrsRisk['mySaebrsTotal']}
                mySaebrsAcademic={saebrsRisk['mySaebrsTotal']}
              />
            </div>

            <div className='flex flex-col basis-5/6 pb-4 max-lg:hidden'>
              <PopToRiskCharts/>
            </div>
        </div>  

        <div className='flex flex-col lg:hidden h-96'>
          <PopToRiskCharts/>
        </div>
      </div>

      
    </main>
  );
}

