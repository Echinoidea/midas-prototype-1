
import { Key, useState } from "react";
import { BarChartEnglishLearner, BarChartEthnicity} from "../../../charts/total-demographics-charts";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Nunito } from "next/font/google";
import {  DonutChartEnglishLearner, DonutChartEthnicity, DonutChartGender } from "@/app/ui/charts/individual-demographics-charts";
import DonutChart from "@/app/ui/charts/expanding-pie-test";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

function Capitalize(str: string){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function RiskCharts() {
  const [ genderRiskSample, setGenderRiskSample ] = useState('high')
  const [ ethnicityRiskSample, setEthnicityRiskSample ] = useState('high')
  const [ ellRiskSample, setEllRiskSample ] = useState('high')

  return (
    <div className={`${nunito.className} flex flex-row basis-full`}>
      <Card className='bg-neutral-100 mr-2 pb-7 -mb-4  basis-1/3 rounded-xl' shadow='md'>
        <p className={`pl-2 -mb-8 text-xl`}>Gender and Risk</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <DonutChartGender selectedSlice={'Male'}/>
        </div>
      </Card>

      <Card className='bg-neutral-100 mr-2  pb-7 -mb-4 basis-1/3 rounded-xl' shadow='md'>
        <p className={`pl-2 -mb-8 text-xl font-sans`}>English Learner Status and Risk</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <DonutChartEnglishLearner selectedSlice={"ELL"}/>
        </div>
      </Card>

      <Card className='bg-neutral-100 mr-2  pb-7 -mb-4 basis-1/3 rounded-xl' shadow='md'>
        <p className={`pl-2 -mb-8 text-xl font-sans`}>Ethnicity and Risk</p>
        <div className='flex flex-col pt-10 mb-0 mt-auto h-full'>
          <DonutChartEthnicity selectedSlice={"White"} />
        </div>
      </Card>
    </div>
  );
}