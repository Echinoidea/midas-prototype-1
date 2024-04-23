import { CardSaebrsSummary, CardMidasRisk} from '@/app/ui/dashboard/cards';
import { Suspense, useState } from 'react';
import { sql } from '@vercel/postgres';
import { fetchMySaebrsData, fetchSchools, fetchStudents } from '@/app/lib/data';
import StudentSearch from '../../ui/dashboard/student-search';
import {
  UserCircleIcon
} from '@heroicons/react/24/outline';

import EpUser from '@/app/ui/icons/EpUser';
import QuillUserHappy from '@/app/ui/icons/QuillUserHappy';
import CircumUser from '@/app/ui/icons/CircumUser';
import { CardTripleStack } from '@/app/ui/dashboard/cards';
import { ConfidenceIntervalVisualizer } from '@/app/ui/dashboard/confidence-visualizer';


 
export default async function Page() {
    const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
    const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
    const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
    const schools = await fetchSchools();
    const numberOfStudents = await fetchStudents("Greco Middle School");

    return (
        <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
            Student-level Dashboard
        </h1>
        
        <div className='flex flex-row mb-8'>
          <div className='flex flex-col basis-1/3 items-center pr-4'>
            <StudentSearch></StudentSearch>
            <div className="border-solid border-gray-500 shadow-md border-2 h-52 w-52">
              <UserCircleIcon className=" text-gray-700 subpixel-antialiased" />
              {/* <QuillUserHappy className=" text-gray-700 subpixel-antialiased w-full h-full" /> */}
            </div>
          </div>

          <div className='flex flex-col basis-1/3 pl-4 pr-4'>
            <CardTripleStack title={'Student Information'} subtitles={['Student ID', 'Grade', 'Classroom ID']} values={['GSHS-12-31147501', '12', 'C16']} capitalize={false}/>
          </div>

          <div className='flex flex-col basis-1/3 pl-4'>
            <CardTripleStack title={'Student Demographics'} subtitles={['Gender', 'Ethnicity', 'English Learner?']} values={['Male', 'Hispanic', 'Yes']} capitalize={false}/>
          </div>
        </div>
        

        

        <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='basis-1/4 pr-4'>
                <CardMidasRisk capitalize={true} type='string' title="MIDAS Risk" confidence={95} CiThresholds={[85, 90, 95, 99]} value={'some'}/>
              </div>
              <div className='basis-3/4'>
                <CardSaebrsSummary title={"Risk Scores"} emotional={['high', 'some']} social={['low', 'some']} academic={['some', 'high']}/>
              </div>
              
            </div>

        </div>
        </main>
    );
}


/*

            <div className='flex flex-row pt-4 pr-4'>
                <div className='basis-1/5 pr-2'>
                    <CardSplitValue title="Test Score Risk" values={['some', 'low']} subtitles={['Math', 'Reading']}/>
                </div>

                <div className='basis-1/5 pr-2'>
                    <CardSplitValue title="Disciplinary Action Summary" values={['one+', 'zero']} subtitles={['To Office', 'Suspensions']}/>
                </div>


                <div className='basis-1/5 pr-2'>
                    <CardSingleValue capitalize={false} type='string' title="Gender" value={'Male'}/>
                </div>

                <div className='basis-1/5 pr-2'>
                    <CardSingleValue capitalize={false} type='string' title="Ethnicity" value={'White'}/>
                </div>

                <div className='basis-1/5'>
                  <CardSingleValue capitalize={false} type='string' title="English Learner" value={'Not an ELL'}/>
                </div>
            </div>
*/


/*
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

// export default function Student() {
//     return <p>Student Page</p>;
//   }
*/