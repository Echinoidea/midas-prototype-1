import { CardInterior, CardSaebrsSummary, SaebrsCardSplitInterior, CardSplitValue, CardSingleValue } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { Suspense, useState } from 'react';
import { sql } from '@vercel/postgres';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import { fetchMySaebrsData, fetchSchools, fetchStudents } from '@/app/lib/data';
import SchoolSearch from '../../ui/dashboard/school-search';

 
export default async function Page() {
    // const revenue = await fetchRevenue();
    const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
    const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
    const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
    const schools = await fetchSchools();
    // const selectedSchool = GetSelectedSchool();
    const numberOfStudents = await fetchStudents("Greco Middle School");

    return (
        <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
            Classroom-level Dashboard
            {/* {selectedSchool} */}
        </h1>
        <div className="mb-4 rounded-md">
            {/* <SchoolSearch schools={schools}></SchoolSearch> */}
        </div>
        <div className="flex flex-row mb-4 rounded-md">
            <div className='flex flex-col basis-1/4 mr-4'>
                <div className='pb-4'>
                    <CardSingleValue capitalize={true} type='string' title="Total Students" value={400}/>
                </div>
                
                <div className='pb-4'>
                    <CardSingleValue capitalize={true} type='string' title="Most Frequent MIDAS Risk" value={'some'}/>
                </div>

                <div className='pb-4'>
                    <CardSplitValue title="Most Frequent Test Score Risk" values={['some', 'low']} subtitles={['Math', 'Reading']}/>
                </div>

                <div className='pb-4'>
                    <CardSplitValue title="Disciplinary Action Summary" values={['one+', 'zero']} subtitles={['To Office', 'Suspensions']}/>
                </div>
            </div>

            <div className='basis-3/4'>
                <CardSaebrsSummary title={'Most Frequent Risk Scores'} emotional={['high', 'some']} social={['low', 'some']} academic={['some', 'high']}/>
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