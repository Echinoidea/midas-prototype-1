import { CardSaebrsSummary, CardSplitValue, CardSingleValue} from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense, useState } from 'react';
import { sql } from '@vercel/postgres';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import { fetchRevenue, fetchLatestInvoices, fetchCardData, fetchMySaebrsData, fetchSchools, fetchStudents } from '@/app/lib/data';
import SchoolSearch from '../../ui/dashboard/school-search';

 
export default async function Page() {
    // const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const numberOfCustomers = (await fetchCardData()).numberOfCustomers;
    const mySaebrsEmoHigh = (await fetchMySaebrsData()).emo;
    const mySaebrsSocHigh = (await fetchMySaebrsData()).soc;
    const mySaebrsAcaHigh = (await fetchMySaebrsData()).aca;
    const schools = await fetchSchools();
    // const selectedSchool = GetSelectedSchool();
    const numberOfStudents = await fetchStudents("Greco Middle School");

    return (
        <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
            Student-level Dashboard
            {/* {selectedSchool} */}
        </h1>
        <div className="mb-4 rounded-md">
            {/* Student Search here */}
            {/* <SchoolSearch schools={schools}></SchoolSearch> */}
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='basis-1/4 pr-4'>
                <CardSingleValue capitalize={true} type='string' title="MIDAS Risk" value={'some'}/>
              </div>
              <div className='basis-3/4 pr-4'>
                <CardSaebrsSummary title={"Risk Scores"} emotional={['high', 'some']} social={['low', 'some']} academic={['some', 'high']}/>
              </div>
              
            </div>

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
        </div>
        </main>
    );
}





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