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

  return (
    <main>

      <div className='flex flex-row gap-4'>
        {/* LEFT COL */}
        <div className="flex flex-col mb-4 basis-1/4">
          <div className='flex flex-col'>
            
              <div className='pb-4'>
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

             <div className='pb-4'>
              <CardConfidenceVisualizer confidence={90} confidenceThresholds={[85, 90, 95, 99]}/>
            </div>

            <div className='pb-4'>
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

            <div className='-mb-8'>
              <CardTestScoreSummary
                title={'Test Score Risk Summary'} 
                valuesTop={['60%', '40%']} 
                subtitlesTop={['Low', 'Some']} 
                valuesBottom={['55%', '45%']}
                subtitlesBottom={['Low', 'Some']}            
              />
            </div>

          </div>
        </div>

        <div className='flex flex-col basis-3/4 w-full'>
            <div className='pb-4'>
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

            <div className='flex flex-col h-full'>
              <PopToRiskCharts/>
            </div>
        </div>  
      </div>
    </main>
  );
}

