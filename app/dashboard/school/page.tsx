'use client';

import { CardThreeValue} from '@/app/ui/dashboard/cards';
import { SaebrsSummary } from '@/app/ui/dashboard/cards/population/saebrs-summary';
import { GenderPopulationToRiskChartGroup } from '@/app/ui/dashboard/cards/population/demographics-summary';
import { CardDisciplinarySummary } from '@/app/ui/dashboard/cards/population/disciplinary-summary';
import { CardTestScoreSummary } from '@/app/ui/dashboard/cards/population/test-scores-summary';
import { CardConfidenceVisualizer } from '@/app/ui/dashboard/cards/general/card-confidence';



export default async function Page() {
  // const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
  // const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
  // const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
  // const schools = await fetchSchools();
  // const numberOfStudents = await fetchStudents("Greco Middle School");

  return (
    <main>

      <div className='flex flex-col'>
        <div className="mb-4 rounded-md -mr-2">
          {/* <SchoolSearch schools={schools}></SchoolSearch> */}
        </div>

        <div className="flex flex-row mb-4 rounded-md">
          <div className='flex flex-col mr-4'>
            

            <div className='pb-4 w-96'>
              <CardThreeValue 
                title="Percentage of Students at Risk" 
                values={['60%', '30%', '10%']} 
                subtitles={['Low', 'Some', 'High']} 
                tooltipText='Percentages of students at the three different MIDAS risk levels.' />
            </div>

             <div className='pb-4 w-96'>
              <CardConfidenceVisualizer confidence={90} confidenceThresholds={[85, 90, 95, 99]}/>
            </div>

            <div className='pb-4 w-96'>
              <CardDisciplinarySummary
                title={'Disciplinary Action Summary'} 
                valuesTop={['77%', '23%']} 
                subtitlesTop={['Zero', 'One Plus']} 
                valuesBottom={['80%', '20%']}
                subtitlesBottom={['Zero', 'One Plus']}            
              />
            </div>

            <div className='pb-4 w-96'>
              <CardTestScoreSummary
                title={'Math Score Risk Summary'} 
                valuesTop={['60%', '40%']} 
                subtitlesTop={['Value1', 'Value2']} 
                valuesBottom={['55%', '45%']}
                subtitlesBottom={['Value1', 'Value2']}            
              />
            </div>

          </div>

          <div className='flex flex-col'>
            
            <div className='pb-4'>
              <SaebrsSummary 
                saebrsTotal={['60%', '25%', '15%']} 
                mySaebrsTotal={['54%', '33%', '13%']} 
                saebrsEmotional={['59%', '33%', '8%']} 
                mySaebrsEmotional={['50%', '37%', '13%']} 
                saebrsSocial={['40%', '41%', '19%']} 
                mySaebrsSocial={['40%', '39%', '17%']} 
                saebrsAcademic={['72%', '16%', '12%']} 
                mySaebrsAcademic={['70%', '18%', '12%']}
              />
            </div>
              <GenderPopulationToRiskChartGroup/>
          </div>

        </div>  
      </div>


    </main>
  );
}

