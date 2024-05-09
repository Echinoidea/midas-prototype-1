'use client';

import { CardMidasRisk} from '@/app/ui/dashboard/cards/individual/midas-summary';
import { SaebrsSummary } from '@/app/ui/dashboard/cards/individual/saebrs-summary';
import StudentSearch from '../../ui/dashboard/student-search';
import {
  UserCircleIcon
} from '@heroicons/react/24/outline';

import { CardTripleStack } from '@/app/ui/dashboard/cards';
import { CardStudentDemographics } from '@/app/ui/dashboard/cards/individual/student-demographics';
import { CardTestsAndDisciplineSummary } from '@/app/ui/dashboard/cards/individual/tests-discipline-summary';
import { useState } from 'react';



export default async function Page() {

  const [studentId, setStudentId] = useState('')

  const [saebrsScores, setSaebrsScores] = useState(
    {
      'saebrsTotal': 'some',
      'mySaebrsTotal': 'low',
      'saebrsEmotional': 'some',
      'mySaebrsEmotional': 'high',
      'saebrsSocial': 'some',
      'mySaebrsSocial': 'low',
      'saebrsAcademic': 'some',
      'mySaebrsAcademic': 'high',
    }
  );

  const [midasSummary, setMidasSummary] = useState(
    {
      'midasRisk': 'some',
      'missingVariables': 0,
      'confidence': 96,
      'confidenceThreshold': [85, 90, 95, 99]
    }
  );

  const [identification, setIdentification] = useState(
    {
      'studentId': 'GSHS-12-31147501',
      'grade': '8',
      'classroomId': 'C16'
    }
  );

  const [demographics, setDemographics] = useState(
    {
      'gender': 'male',
      'ethnicity': 'hispanic',
      'englishLearner': 'yes',
    }
  );

  const [testScoreRisk, setTestScoreRisk] = useState(
    {
      'math': 'some',
      'reading': 'high'
    }
  );

  // Fetch functions here for states

  return (
      <main className='mt-4'>
      <div className='flex flex-row mb-8'>
        <div className='flex flex-col basis-1/4 items-center mr-4'>
          <StudentSearch></StudentSearch>
          <div className="border-solid border-gray-500 shadow-md border-2 h-52 w-52">
            <UserCircleIcon className=" text-gray-700 subpixel-antialiased shadow-lg" />
          </div>
        </div>

        <div className='basis-1/4 pr-4'>
          <CardMidasRisk 
            midasRisk=            {midasSummary['midasRisk']} 
            missingVariablesCount={midasSummary['missingVariables']} 
            confidence=           {midasSummary['confidence']} 
            confidenceThresholds= {midasSummary['confidenceThreshold']} 
          />
        </div>

        <div className='flex flex-col basis-1/4 mx-4 rounded-xl shadow-lg'>
          <CardTripleStack 
            title={'Student Information'} 
            subtitles={['Student ID', 'Grade', 'Classroom ID']} 
            values={[
              identification['studentId'], 
              identification['grade'], 
              identification['classroomId']
            ]} 
            capitalize={true}
          />
        </div>

        <div className='flex flex-col basis-1/4 mx-4 rounded-xl shadow-lg'>
          <CardStudentDemographics 
            title={'Student Demographics'} 
            subtitles={['Gender', 'Ethnicity', 'English Learner?']} 
            values={[
              demographics['gender'],
              demographics['ethnicity'],
              demographics['englishLearner']
            ]} 
            capitalize={true}
          />
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-row'>
          
          <div className='basis-3/4'>
            <SaebrsSummary 
              saebrsTotal={saebrsScores['saebrsTotal']} 
              mySaebrsTotal={saebrsScores['mySaebrsTotal']} 
              saebrsEmotional={saebrsScores['saebrsEmotional']} 
              mySaebrsEmotional={saebrsScores['mySaebrsEmotional']} 
              saebrsSocial={saebrsScores['saebrsSocial']} 
              mySaebrsSocial={saebrsScores['mySaebrsSocial']} 
              saebrsAcademic={saebrsScores['saebrsAcademic']} 
              mySaebrsAcademic={saebrsScores['mySaebrsAcademic']}
            />
          </div>
          
          <div className='flex flex-col basis-1/4 mx-4 rounded-xl'>
            <CardTestsAndDisciplineSummary title='Test' subtitlesTop={['1', '2']} subtitlesBottom={['3', '4']} valuesTop={['a', 'b']} valuesBottom={['c', 'd']}/>
          </div>
        </div>

      </div>
    </main>
  );
}

