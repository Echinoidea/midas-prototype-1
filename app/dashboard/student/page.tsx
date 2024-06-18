'use client';

import { CardConfidenceVisualizer } from '@/app/ui/dashboard/cards/general/card-confidence';
import { useEffect, useState } from 'react';
import { useSearchContext } from '@/app/context/nav-search-context';
import StudentSearch from '@/app/ui/dashboard/cards/search/student-search';
import { CardMidasRisk } from '@/app/ui/dashboard/cards/individual/midas-summary';
import { CardStudentDiscipline } from '@/app/ui/dashboard/cards/individual/disciplinary';
import { CardStudentTestScores } from '@/app/ui/dashboard/cards/individual/test-scores';
import { SaebrsSummary } from '@/app/ui/dashboard/cards/individual/saebrs-summary';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kalbwmivszjzlnepcebm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function Page() {

  const [ identification, setIdentification ] = useState({
    'classroomId': 'C01',
    'gradeLevel': '8'
  })

  const [ demographics, setDemographics ] = useState({
    'gender': 'Male',
    'ethnicity': 'White',
    'ell': 'Yes'
  })

  const [midasRisk, setMidasRisk] = useState('Low')

  const [disciplineRisk, setDisciplineRisk] = useState({
    'odr': 'Zero',
    'suspensions': 'Zero'
  })

  const [testRisk, setTestRisk] = useState({
    'math': 'Low',
    'reading': 'Some'
  })

  const [saebrsRisk, setSaebrsRisk] = useState({
    'saebrsTotal': 'Low',
    'mySaebrsTotal': 'Low',
    'saebrsEmotional': 'Low', 
    'mySaebrsEmotional': 'Low',
    'saebrsSocial': 'Low', 
    'mySaebrsSocial': 'Low', 
    'saebrsAcademic': 'Low', 
    'mySaebrsAcademic': 'Low',
  })

  const stateStudent = useSearchContext('student')
  const selectedStudent = stateStudent.get
  const setSelectedStudent = stateStudent.set

  useEffect(() => {
    console.log('Selected school:', selectedStudent);
  }, [selectedStudent]);

  return (
    <main>
      <div className='flex flex-col gap-4'>

        {/* Top row */}
        <div className='flex flex-row gap-8 w-full'>
          <div className='flex basis-1/3 w-full'>
            <StudentSearch 
              selectedStudent={selectedStudent} 
              setSelectedStudent={setSelectedStudent} 
              classroomId={identification.classroomId} 
              gradeLevel={identification.gradeLevel}
            />
          </div>
          
          <div className='flex basis-1/3 w-full'>
            <CardStudentDiscipline odr={disciplineRisk.odr} suspensions={disciplineRisk.suspensions} />
          </div>

          <div className='flex basis-1/3 w-full'>
            <CardStudentTestScores math={testRisk.math} reading={testRisk.reading} />
          </div>
        </div>


        {/* Second row */}
        <div className='flex flex-row gap-4 w-full'>
          <div className='flex flex-col gap-2 basis-1/5'>
            <CardMidasRisk midasRisk={midasRisk} />
            <CardConfidenceVisualizer confidence={90} confidenceThresholds={[85, 90, 95, 99]} missingVariables={2}/>
          </div>

          <div className='flex flex-row w-max basis-4/5'>
            <SaebrsSummary 
              saebrsTotal={saebrsRisk.saebrsTotal} 
              mySaebrsTotal={saebrsRisk.mySaebrsTotal} 
              saebrsEmotional={saebrsRisk.saebrsEmotional} 
              mySaebrsEmotional={saebrsRisk.mySaebrsEmotional} 
              saebrsSocial={saebrsRisk.saebrsSocial} 
              mySaebrsSocial={saebrsRisk.mySaebrsSocial} 
              saebrsAcademic={saebrsRisk.saebrsAcademic} 
              mySaebrsAcademic={saebrsRisk.mySaebrsAcademic}
            />
          </div>
        </div>
      </div>
    </main>
  );
}