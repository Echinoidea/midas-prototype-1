
import { Key, useState } from "react";
import { BarChartEnglishLearner, BarChartEthnicity} from "../../../charts/total-demographics-charts";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Nunito } from "next/font/google";
import {  DonutChartEnglishLearner, DonutChartEthnicity, DonutChartGender } from "@/app/ui/charts/individual-demographics-charts";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

function Capitalize(str: string){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function RiskCharts() {
  const [ genderRiskSample, setGenderRiskSample ] = useState('high')
  const [ ethnicityRiskSample, setEthnicityRiskSample ] = useState('high')
  const [ ellRiskSample, setEllRiskSample ] = useState('high')

  return (
    <div className={`${nunito.className} flex flex-row gap-2 basis-full`}>
      <Card className='flex flex-col bg-neutral-100 basis-1/3 rounded-xl pb-8' shadow='md'>
        <p className='text-2xl pb-10'>Gender</p>
        <div className='flex w-full -mb-16 justify-center'>
          <p className='text-2xl'>Male</p>
        </div>
        
        <DonutChartGender selectedSlice={'Male'}/>
      </Card>

      <Card className='flex flex-col bg-neutral-100 basis-1/3 rounded-xl pb-8 ' shadow='md'>
        <p className='text-2xl pb-10'>English Learner Status</p>
        <div className='flex w-full -mb-16 justify-center'>
          <p className='text-2xl'>English Learner</p>
        </div>

        <DonutChartEnglishLearner selectedSlice={"ELL"}/>
      </Card>

      <Card className='flex flex-col bg-neutral-100 basis-1/3 rounded-xl pb-8' shadow='md'>
        <p className='text-2xl pb-10 '>Ethnicity</p>
        <div className='flex w-full -mb-16 justify-center'>
          <p className='text-2xl'>White</p>
        </div>
        
        <DonutChartEthnicity selectedSlice={"White"} />
      </Card>
    </div>
  );
}