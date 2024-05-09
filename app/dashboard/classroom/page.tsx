'use client';

import { CardSaebrsSummary, CardSplitValue, CardSingleValue, CardSingleValueTooltip, CardMidasRisk } from '@/app/ui/dashboard/cards';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import { fetchMySaebrsData, fetchSchools, fetchStudents } from '@/app/lib/data';
import SchoolSearch from '../../ui/dashboard/school-search';
import { GeistProvider, CssBaseline, Card, Tooltip } from '@geist-ui/core'



export default async function Page() {
  // const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
  // const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
  // const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
  // const schools = await fetchSchools();
  // const numberOfStudents = await fetchStudents("Greco Middle School");

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Class-level Dashboard
        {/* {selectedSchool} */}
        
      </h1>
      <div className='flex flex-col'>
        <div className="mb-4 rounded-md -mr-2">
          {/* <SchoolSearch schools={schools}></SchoolSearch> */}
          
        </div>
        <div className="flex flex-row mb-4 rounded-md">
          <div className='flex flex-col mr-4'>
            <div className='pb-4'>
              <CardSingleValueTooltip 
                title="Total Students" 
                type='string' value={400} 
                capitalize={true} 
                tooltipText="The total count of students in this school"  />
            </div>

            <div className='pb-4'>
              <CardMidasRisk 
                title="MIDAS Risk" 
                type='string' value={'some'}
                confidence={95} CiThresholds={[85, 90, 95, 99]}
                capitalize={true}  />
            </div>

            <div className='pb-4'>
              <CardSplitValue 
                title="Most Frequent Test Score Risk" 
                values={['na', 'low']} 
                subtitles={['Math', 'Reading']} 
                tooltipTextLeft='Math scores risk...' tooltipTextRight='Reading score risk...' />
            </div>

            <div className='pb-4'>
              <CardSplitValue 
                title="Disciplinary Action Summary" 
                values={['one+', 'zero']} 
                subtitles={['To Office', 'Suspensions']} 
                tooltipTextLeft='How many times students were referred to the office within the span of...' tooltipTextRight='How many students were suspended within the span of...'/>
            </div>
          </div>

          <div className=''>
            <CardSaebrsSummary title={'Most Frequent Risk Scores'} emotional={['high', 'some']} social={['some', 'some']} academic={['some', 'high']} />
          </div>

        </div>  
      </div>


    </main>
  );
}

/*
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Emotional" value={mySaebrsEmoHigh} type="emotional" />
            <Card title="Social" value={mySaebrsSocHigh} type="social" />
            <Card title="Academic" value={mySaebrsAcaHigh} type="academic" />
            <Card
            title="Total Students"
            value={numberOfStudents}
            type="customers"
            />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton/>}>
                <RevenueChart/>
            </Suspense>
            
            <LatestInvoices latestInvoices={latestInvoices} /> 
            
            </div>
*/