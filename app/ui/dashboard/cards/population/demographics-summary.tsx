
import { Key, useState } from "react";
import { BarChartEnglishLearner, BarChartEthnicity, BarChartGender } from "../../../charts/total-demographics-charts";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Nunito } from "next/font/google";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

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
          <BarChartGender />
        </div>
      </Card>

      <Card className='bg-neutral-100 mr-2  pb-7 -mb-4 basis-1/3 rounded-xl' shadow='md'>
        <p className='pl-2 -mb-8 text-xl'>English Learner Status and Risk</p>
        <p className='mt-6 pl-2 -mb-8 text-sm'>Distribution of those at risk for each ELL and non-ELL students</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <BarChartEnglishLearner/>
        </div>
      </Card>

      <Card className='bg-neutral-100 mr-2  pb-7 -mb-4 basis-1/3 rounded-xl' shadow='md'>
        <p className='pl-2 -mb-8 text-xl'>Ethnicity and Risk</p>
        <p className='mt-6 pl-2 -mb-8 text-sm'>Distribution of those at risk for each ethnicity</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <BarChartEthnicity/>
        </div>
      </Card>
    </div>
  );
}