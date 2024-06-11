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

          {/* <div className='flex flex-col justify-start basis-1/6'>
            <CardStudentIdentification id={'aaa'} classroom={'aaa'} grade={'8'}/>
          </div> */}

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




// 'use client';

// import { useState } from 'react';

// import { CardMidasRisk} from '@/app/ui/dashboard/cards/individual/midas-summary';
// import { CardConfidenceVisualizer } from '@/app/ui/dashboard/cards/general/card-confidence';
// import { CardStudentIdentification } from '@/app/ui/dashboard/cards/individual/student-identification';
// import { CardStudentDemographics } from '@/app/ui/dashboard/cards/individual/student-demographics';
// import { SaebrsSummary } from '@/app/ui/dashboard/cards/individual/saebrs-summary';

// import { Nunito } from "next/font/google";
// import { CardStudentTestScores } from '@/app/ui/dashboard/cards/individual/test-scores';
// import { CardDisciplinarySummary } from '@/app/ui/dashboard/cards/population/disciplinary-summary';
// import { CardStudentDiscipline } from '@/app/ui/dashboard/cards/individual/disciplinary';
// import StudentSearch from '@/app/ui/dashboard/cards/search/student-search';
// import { useSearchContext } from '@/app/context/nav-search-context';
// import { BarChartGender } from '@/app/ui/charts/individual-demographics-charts';
// const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})


// export default async function Page() {

//   const [studentId, setStudentId] = useState('')

//   const [saebrsScores, setSaebrsScores] = useState(
//     {
//       'saebrsTotal': 'some',
//       'mySaebrsTotal': 'low',
//       'saebrsEmotional': 'some',
//       'mySaebrsEmotional': 'high',
//       'saebrsSocial': 'some',
//       'mySaebrsSocial': 'low',
//       'saebrsAcademic': 'some',
//       'mySaebrsAcademic': 'high',
//     }
//   );

//   const [midasSummary, setMidasSummary] = useState(
//     {
//       'midasRisk': 'some',
//       'missingVariables': 0,
//       'confidence': 96,
//       'confidenceThreshold': [85, 90, 95, 99]
//     }
//   );

//   const [identification, setIdentification] = useState(
//     {
//       'studentId': 'GSHS-12-31147501',
//       'grade': '8',
//       'classroomId': 'C16'
//     }
//   );

//   const [demographics, setDemographics] = useState(
//     {
//       'gender': 'male',
//       'ethnicity': 'hispanic',
//       'englishLearner': 'yes',
//     }
//   );

//   const [testScoreRisk, setTestScoreRisk] = useState(
//     {
//       'math': 'some',
//       'reading': 'high'
//     }
//   );


//   const stateStudent = useSearchContext('student')
//   const selectedStudent = stateStudent.get
//   const setSelectedStudent = stateStudent.set
//   // Fetch functions here for states

//   return (
//     <main className={`${nunito.className} flex flex-row gap-4`}>
//       <div className='flex flex-col gap-4 basis-1/5'>
//         <StudentSearch selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}/>
//         <CardMidasRisk midasRisk='SOME'/>
//         <CardConfidenceVisualizer confidence={90} confidenceThresholds={[85, 90, 95, 99]}/>
//         <CardStudentIdentification id="S01AEE" grade="8th" classroom='C16'/>
//         <CardStudentDemographics gender="Male" ethnicity="White" englishLearner='Yes'/>

        
//       </div>


//       <div className='flex flex-col gap-4 basis-5/6'>
//         

        
//       </div>

//       <div className='max-h-96'>
        
//       </div>
      
//     </main>
//   );
// }



// // <div className="flex flex-row gap-4">
        
// //         <div className='flex flex-col gap-4 basis-1/5'>
// //         <StudentSearch selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}/>
// //           {/* 
// //            */}
// //         </div>
// //         <div className='flex basis-1/5'>
// //           <CardStudentIdentification id="S01AEE" grade="8th" classroom='C16'/>
// //         </div>
// //         <div className='flex basis-1/5'>
// //           <CardStudentDemographics gender="Male" ethnicity="White" englishLearner='Yes'/>
// //         </div>
// //         <div className='flex basis-1/5'> 
// //           <CardStudentTestScores math="Some" reading="Low"/>
// //         </div>
// //         <div className='flex basis-1/5'>
// //           
// //         </div>
// //       </div>
      
// //       <div>
// //         
// //       </div>

