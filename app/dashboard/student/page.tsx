'use client';



import { CardConfidenceVisualizer } from '@/app/ui/dashboard/cards/general/card-confidence';
import { useEffect, useState } from 'react';
import { useSearchContext } from '@/app/context/nav-search-context';
import StudentSearch from '@/app/ui/dashboard/cards/search/student-search';
import { RiskCharts } from '@/app/ui/dashboard/cards/individual/chart-group';
import { CardMidasRisk } from '@/app/ui/dashboard/cards/individual/midas-summary';
import { CardStudentDiscipline } from '@/app/ui/dashboard/cards/individual/disciplinary';
import { CardStudentTestScores } from '@/app/ui/dashboard/cards/individual/test-scores';
import { SaebrsSummary } from '@/app/ui/dashboard/cards/individual/saebrs-summary';

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
      <div className='flex md:flex-row flex-col gap-4'>
        {/* LEFT COL */}
        <div className="flex flex-col justify-normal gap-3 basis-1/4">
          <div className='flex flex-col justify-start'>
            <StudentSearch 
              selectedStudent={selectedStudent} 
              setSelectedStudent={setSelectedStudent} 
              classroomId={identification.classroomId} 
              gradeLevel={identification.gradeLevel}
            />
          </div>

          <div className='flex flex-col justify-start'>
              <CardMidasRisk midasRisk={midasRisk} />
          </div>

          <div className='flex flex-col justify-start'>
            <CardConfidenceVisualizer confidence={90} confidenceThresholds={[85, 90, 95, 99]} missingVariables={2}/>
          </div>

          <div className='flex flex-col justify-start basis-1/6'>
            <CardStudentDiscipline odr={disciplineRisk.odr} suspensions={disciplineRisk.suspensions} />
          </div>

          <div className='flex flex-col basis-1/6'>
            <CardStudentTestScores math={testRisk.math} reading={testRisk.reading} />
          </div>
        </div>

        <div className='flex flex-col gap-3.5 basis-3/4'>
            <div className='flex flex-col basis-1/6'>
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

            <div className='flex flex-col basis-5/6 pb-4 max-lg:hidden'>
              <RiskCharts/>
            </div>
        </div>  

        <div className='flex flex-col lg:hidden h-96'>
          <RiskCharts/>
        </div>
      </div>

      
    </main>
  );
}

