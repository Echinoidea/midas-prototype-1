import { Key, useState } from "react";
import { BarChart } from "../../../charts/bar-chart";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Nunito } from "next/font/google";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})


const genderDataPlaceholder = [
  {
    id: 'Male', // 455
    'High Risk': .08,
    'Some Risk': .44,
    'Low Risk': .48
  },
  {
    id: 'Female', // 591
    'High Risk': .12,
    'Some Risk': .33,
    'Low Risk': .55
  },
]


const ethnicityDataPlaceholder = [
  {
    id: 'White',
    'High Risk': .162,
    'Some Risk': .559,
    'Low Risk': .279
  },
  {
    id: 'Hispanic',
    'High Risk': .067,
    'Some Risk': .50,
    'Low Risk': .433
  },
  {
    id: 'Other POC',
    'High Risk': .085,
    'Some Risk': .401,
    'Low Risk': .514
  }
]


const englishLearnerDataPlaceholder = [
  {
    id: 'ELL', // 250
    'High Risk': .2,
    'Some Risk': .35,
    'Low Risk': .45
  },
  {
    id: 'Not ELL', 
    'High Risk': .33,
    'Some Risk': .4,
    'Low Risk': .27
  },
]


const colors = ['red-400', 'yellow-300', 'green-400']


export function PopToRiskCharts() {
  const [ genderRiskSample, setGenderRiskSample ] = useState('high')
  const [ ethnicityRiskSample, setEthnicityRiskSample ] = useState('high')
  const [ ellRiskSample, setEllRiskSample ] = useState('high')

  return (
    <div className={`${nunito.className} flex flex-row basis-full`}>
      <Card className='bg-neutral-100 mr-2 pb-7 -mb-4  basis-1/3 rounded-xl' shadow='md'>
        <p className='pl-2 -mb-8 text-xl'>Gender and Risk</p>
        <p className='mt-6 pl-2 -mb-8 text-sm'>Distribution of those at risk for each gender</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <BarChart data={genderDataPlaceholder} colors={colors} legendVariable="Gender"/>
        </div>
      </Card>

      <Card className='bg-neutral-100 mr-2  pb-7 -mb-4 basis-1/3 rounded-xl' shadow='md'>
        <p className='pl-2 -mb-8 text-xl'>English Learner Status and Risk</p>
        <p className='mt-6 pl-2 -mb-8 text-sm'>Distribution of those at risk for each ELL and non-ELL students</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <BarChart data={englishLearnerDataPlaceholder} colors={colors} legendVariable="ELL Status"/>
        </div>
      </Card>

      <Card className='bg-neutral-100 mr-2  pb-7 -mb-4 basis-1/3 rounded-xl' shadow='md'>
        <p className='pl-2 -mb-8 text-xl'>Ethnicity and Risk</p>
        <p className='mt-6 pl-2 -mb-8 text-sm'>Distribution of those at risk for each ethnicity</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
         <BarChart data={ethnicityDataPlaceholder} colors={colors} legendVariable="Ethnicity"/>
        </div>
      </Card>
    </div>
  );
}