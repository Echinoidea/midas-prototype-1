'use client';

import { SaebrsSummary } from '@/app/ui/dashboard/cards/population/saebrs-summary';
import { PopToRiskCharts } from '@/app/ui/dashboard/cards/population/demographics-summary';
import { CardDisciplinarySummary } from '@/app/ui/dashboard/cards/population/disciplinary-summary';
import { CardTestScoreSummary } from '@/app/ui/dashboard/cards/population/test-scores-summary';
import { CardConfidenceVisualizer } from '@/app/ui/dashboard/cards/general/card-confidence';
import { useState } from 'react';
import { CardThreeValue } from '@/app/ui/dashboard/cards/general/card-three-value';
import { Tooltip } from '@nextui-org/react';
import {
  AcademicChart,
  BarChartEnglishLearner,
  BarChartEthnicity,
  BarChartTotal,
  DonutChartGender,
  EmotionalChart,
  SocialChart,
} from '@/app/ui/charts/total-demographics-charts';
import Dropdown from '@/app/ui/Dropdown';
import useRiskOptions from '@/hooks/useRiskOptions';
function MidasRiskTooltipContent() {
  return (
    <div>Percentages of students at the three different MIDAS risk levels.</div>
  );
}

export default async function Page() {
  const riskOptions = useRiskOptions();
  // const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
  // const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
  // const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
  // const schools = await fetchSchools();
  // const numberOfStudents = await fetchStudents("Greco Middle School");

  const [midasRisk, setMidasRisk] = useState({
    low: '45%',
    some: '40%',
    high: '15%',
  });

  const [disciplineRisk, setDisciplineRisk] = useState({
    odrZero: '77%',
    odrSome: '23%',
    suspZero: '80%',
    suspSome: '20%',
  });

  // ASK SONJA WHAT THE VALUES FOR TEST RISK ARE
  const [testRisk, setTestRisk] = useState({});

  const [saebrsRisk, setSaebrsRisk] = useState({
    saebrsTotal: ['60%', '25%', '15%'],
    mySaebrsTotal: ['54%', '33%', '13%'],
    saebrsEmotional: ['59%', '33%', '8%'],
    mySaebrsEmotional: ['50%', '37%', '13%'],
    saebrsSocial: ['40%', '41%', '19%'],
    mySaebrsSocial: ['40%', '39%', '17%'],
    saebrsAcademic: ['72%', '16%', '12%'],
    mySaebrsAcademic: ['70%', '18%', '12%'],
  });

  return (
    <main>
      <div className="flex gap-4">
        {/* LEFT COL */}
        <div className="mb-4 flex basis-1/4 flex-col">
          <div className="flex flex-col">
            <div className="pb-4">
              <CardThreeValue
                title="MIDAS Risk Scores"
                values={[
                  midasRisk['low'],
                  midasRisk['some'],
                  midasRisk['high'],
                ]}
                subtitles={['Low', 'Some', 'High']}
                tooltip={MidasRiskTooltipContent()}
              />
            </div>

            <div className="pb-4">
              <CardConfidenceVisualizer
                confidence={90}
                confidenceThresholds={[85, 90, 95, 99]}
              />
            </div>

            <div className="pb-4">
              <CardDisciplinarySummary
                title={'Disciplinary Action Summary'}
                valuesTop={[
                  disciplineRisk['odrZero'],
                  disciplineRisk['odrSome'],
                ]}
                subtitlesTop={['Zero', 'One Plus']}
                valuesBottom={[
                  disciplineRisk['suspZero'],
                  disciplineRisk['suspSome'],
                ]}
                subtitlesBottom={['Zero', 'One Plus']}
              />
            </div>

            <div className="-mb-8">
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
        <div className=" flex h-full w-full flex-col gap-y-28">
          <div className="flex h-full w-full items-center justify-end">
            <Dropdown />
          </div>

          <div className="flex justify-center">
            {riskOptions.isEthnicity && <BarChartEthnicity />}
            {riskOptions.isEnglishLeaner && <BarChartEnglishLearner />}
            {riskOptions.isGender && <DonutChartGender />}
            {riskOptions.isAcademic && <AcademicChart />}
            {riskOptions.isEmotional && <EmotionalChart />}
            {riskOptions.isTotalScore && <BarChartTotal />}
            {riskOptions.isSocial && <SocialChart />}
          </div>
        </div>
      </div>
    </main>
  );
}
