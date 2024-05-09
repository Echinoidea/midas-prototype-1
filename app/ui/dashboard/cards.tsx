'use client';

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  FaceSmileIcon,
  AcademicCapIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

import clsx from 'clsx';
import { nunito } from '@/app/ui/fonts';
import React from 'react';
import { Text, Tooltip } from '@geist-ui/core';

import { ConfidenceIntervalVisualizer } from './confidence-visualizer';

import { DonutChartEnglishLearner, DonutChartEthnicity, DonutChartGender } from '../charts/total-demographics-charts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  emotional: FaceSmileIcon,
  social: UsersIcon,
  academic: AcademicCapIcon,
};



// export function CardSingleValue({
//   title,
//   value,
//   type,
//   capitalize
// }: {
//   title: string;
//   value: string | number;
//   type: string;
//   capitalize: boolean
// }) {

//   return (
//     <div>
//       <div className="rounded-xl p-4 bg-zinc-100 shadow-sm">
//         <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

//         <div className='flex-1'>
//           <div className='flex justify-center items-center bg-zinc-50 rounded-xl h-20'>
//             <p className={clsx(
//                 'font-semibold text-3xl',
//                 {
//                   'text-red-500': value.toString().toLowerCase() === 'high' && type === 'string'
//                     || Number(value) > 5 && type === 'number',
//                   'text-amber-300': value.toString().toLowerCase() === 'some' && type === 'string',
//                   'text-green-400': value.toString().toLowerCase() === 'low' && type === 'string',
//                   'text-slate-600': value.toString().toLowerCase() === 'na'
//                 }
//                 )}>
//               {capitalize ? value.toString().toUpperCase() : value.toString()}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function CardMidasRisk({
  title,
  value,
  type,
  confidence,
  CiThresholds,
  capitalize
}: {
  title: string;
  value: string | number;
  type: string;
  confidence: number;
  CiThresholds: number[];
  capitalize: boolean;
}) {

  return (
    <div>
      <Tooltip text={'MIDAS Risk is calculated by...'} placement='bottom' enterDelay={450} className='min-w-full'>
      <div className="rounded-xl p-4 bg-zinc-100 shadow-lg">
        <h3 className="text-lg font-medium text-slate-800 ">{title}</h3>

        <div className='flex-1'>
          <div className='flex flex-col justify-center items-center bg-zinc-50 rounded-xl h-20'>
            <p className={clsx(
                'font-semibold text-3xl',
                {
                  'text-white': value.toString().toLowerCase() === 'high' && type === 'string'
                    || Number(value) > 5 && type === 'number',
                  'text-amber-300': value.toString().toLowerCase() === 'some' && type === 'string',
                  'text-green-400': value.toString().toLowerCase() === 'low' && type === 'string',
                  'text-slate-600': value.toString().toLowerCase() === 'na'
                }
                )}>
              {capitalize ? value.toString().toUpperCase() : value.toString()}
            </p>
            
            <div className='flex flex-col justify-center items-center' >
              
              <ConfidenceIntervalVisualizer confidence={confidence} thresholds={CiThresholds}/>
              <p className='font-extralight italic text-xs'>{'Confidence'} </p>
            </div>
            
          </div>
        </div>
      </div>
      </Tooltip>
    </div>
  );
}

export function CardTripleStack({
  title,
  subtitles,
  values,
  capitalize
}: {
  title: string;
  subtitles: [string, string, string]
  values: [string, string, string] | [string, string | number, string];
  capitalize: boolean
}) {

  return (
    <div>
      {/* MAIN DIV */}
      <div className="rounded-xl p-4 bg-zinc-100 shadow-sm">
        {/* MAIN TITLE */}
        <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

        {/* MAIN COLUMN */}
        <div className='flex flex-col'>
          
          {/* CARD 1 */}
          
            <div className='flex flex-col bg-zinc-50 rounded-xl h-20 items-center '>
              <p className="text-sm font-medium text-slate-800 mt-0 mb-auto ml-0 mr-auto">{subtitles[0]}</p>
              <p className='font-semibold text-3xl text-slate-800 -mt-3 mb-auto justify-center'>
                {capitalize ? values[0].toString().toUpperCase() : values[0].toString()}
              </p>
            </div>


          {/* CARD 2 */}
          <div className='flex flex-col bg-zinc-50 rounded-xl h-20 mt-4 items-center'>
          <p className="text-sm font-medium text-slate-800 mt-0 mb-auto ml-0 mr-auto">{subtitles[1]}</p>
            <p className='font-semibold text-3xl text-slate-800 -mt-3 mb-auto justify-center'>
              {capitalize ? values[1].toString().toUpperCase() : values[1].toString()}
            </p>
          </div>

          {/* CARD 3 */}
          <div className='flex flex-col bg-zinc-50 rounded-xl h-20 mt-4 items-center'>
          <p className="text-sm font-medium text-slate-800 mt-0 mb-auto ml-0 mr-auto">{subtitles[2]}</p>
            <p className='font-semibold text-3xl text-slate-800 -mt-3 mb-auto justify-center'>
              {capitalize ? values[2].toString().toUpperCase() : values[2].toString()}
            </p>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
}







export function CardSplitValue({
  title,
  values,
  subtitles,
  tooltipTextLeft,
  tooltipTextRight,
}: {
  title: string;
  values: [string | number, string | number];
  subtitles: [string, string];
  tooltipTextLeft: string;
  tooltipTextRight: string;
}) {
  return (
    <div className="rounded-xl p-4 bg-zinc-100 shadow-sm">
      <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

      <div className='flex flex-col bg-zinc-50 pt-4 h-20 rounded-xl'>
        {/* CONTENT ROW */}
        <div className="flex flex-row px-8 -mx-2">

          {/* LEFT COLUMN */}
          <Tooltip text={tooltipTextLeft} placement='bottomStart' enterDelay={450} className='basis-1/2 min-w-fit'>
            <div className='flex flex-col ml-4 mr-16 basis-1/2 items-center'>
              {/* VALUE DIV */}
              <div className="-mb-1">
                <p className={clsx(
                  'font-semibold text-3xl',
                  {
                    'text-red-500': values[0].toString().toLowerCase() === 'high',
                    'text-amber-300': values[0].toString().toLowerCase() === 'some' ||
                      values[0].toString().toLowerCase() === 'one+',
                    'text-green-400': values[0].toString().toLowerCase() === 'low'  ||
                      values[0].toString().toLowerCase() === 'zero',
                    'text-slate-600': values[0].toString().toLowerCase() === 'na'
                  }
                  )}>
                    {values[0].toString().toUpperCase()}
                  </p>
              </div>
              {/* SUBTITLE DIV */}
              <div>
                <p className='font-extralight italic text-sm'>{subtitles[0]}</p>
              </div>
            </div>
          </Tooltip>

          {/* RIGHT COLUMN */}
          <Tooltip text={tooltipTextRight} placement='bottomEnd' enterDelay={450} className='basis-1/2 min-w-fit'>
            <div className='flex flex-col ml-16 mr-4 basis-1/2 items-center'>
              {/* VALUE DIV */}
              <div className="">
                <p className={clsx(
                  'font-semibold text-3xl',
                  {
                    'text-red-500': values[1].toString().toLowerCase() === 'high',
                    'text-amber-300': values[1].toString().toLowerCase() === 'some' ||
                      values[1].toString().toLowerCase() === 'one+',
                    'text-green-400': values[1].toString().toLowerCase() === 'low'  ||
                      values[1].toString().toLowerCase() === 'zero',
                    'text-slate-600': values[1].toString().toLowerCase() === 'na'
                  }
                  )}>
                    {values[1].toString().toUpperCase()}
                  </p>
              </div>
              {/* SUBTITLE DIV */}
              <div className="">
                <p className='font-extralight italic text-sm'>{subtitles[1]}</p>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export function ThreeValueInterior({
  values,
  subtitles,
}: {
  values: [string | number, string | number, string | number];
  subtitles: [string, string, string];
}) {
  return (
    <div className='flex flex-col bg-zinc-50 pt-4 h-20 rounded-xl'>
          {/* CONTENT ROW */}
          <div className="flex flex-row px-8 -mx-2">

            {/* LEFT COLUMN */}
            
              <div className='flex flex-col basis-1/3 items-center'>
                {/* VALUE DIV */}
                <div className="-mb-1">
                  <p className={clsx(
                    'font-semibold text-3xl',
                    {
                      'text-red-500': values[0].toString().toLowerCase() === 'high',
                      'text-amber-300': values[0].toString().toLowerCase() === 'some' ||
                        values[0].toString().toLowerCase() === 'one+',
                      'text-green-400': values[0].toString().toLowerCase() === 'low'  ||
                        values[0].toString().toLowerCase() === 'zero',
                      'text-slate-600': values[0].toString().toLowerCase() === 'na'
                    }
                    )}>
                      {values[0].toString().toUpperCase()}
                    </p>
                </div>
                {/* SUBTITLE DIV */}
                <div>
                  <p className='font-extralight italic text-sm'>{subtitles[0]}</p>
                </div>
              </div>
            

            {/* MIDDLE COLUMN */}
            
              <div className='flex flex-col  basis-1/3 items-center'>
                {/* VALUE DIV */}
                <div className="">
                  <p className={clsx(
                    'font-semibold text-3xl',
                    {
                      'text-red-500': values[1].toString().toLowerCase() === 'high',
                      'text-amber-300': values[1].toString().toLowerCase() === 'some' ||
                        values[1].toString().toLowerCase() === 'one+',
                      'text-green-400': values[1].toString().toLowerCase() === 'low'  ||
                        values[1].toString().toLowerCase() === 'zero',
                      'text-slate-600': values[1].toString().toLowerCase() === 'na'
                    }
                    )}>
                      {values[1].toString().toUpperCase()}
                    </p>
                </div>
                {/* SUBTITLE DIV */}
                <div className="">
                  <p className='font-extralight italic text-sm'>{subtitles[1]}</p>
                </div>
              </div>
            

            {/* RIGHT COLUMN */}
            
              <div className='flex flex-col  basis-1/3 items-center'>
                {/* VALUE DIV */}
                <div className="">
                  <p className={clsx(
                    'font-semibold text-3xl',
                    {
                      'text-red-500': values[2].toString().toLowerCase() === 'high',
                      'text-amber-300': values[2].toString().toLowerCase() === 'some' ||
                        values[1].toString().toLowerCase() === 'one+',
                      'text-green-400': values[2].toString().toLowerCase() === 'low'  ||
                        values[1].toString().toLowerCase() === 'zero',
                      'text-slate-600': values[2].toString().toLowerCase() === 'na'
                    }
                    )}>
                      {values[2].toString().toUpperCase()}
                    </p>
                </div>
                {/* SUBTITLE DIV */}
                <div className="">
                  <p className='font-extralight italic text-sm'>{subtitles[2]}</p>
                </div>
              </div>
            
          </div>
          
        </div>
  );
}


export function CardThreeValue({
  title,
  values,
  subtitles,
  tooltipText,
}: {
  title: string;
  values: [string | number, string | number, string | number];
  subtitles: [string, string, string];
  tooltipText: string;
}) {
  return (
    
      <div className="rounded-xl p-4 bg-zinc-100 shadow-md">
        <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

        <Tooltip text={tooltipText} placement='bottom' enterDelay={450} className='min-w-full shadow-sm'>
          <ThreeValueInterior values={values} subtitles={subtitles}/>

        </Tooltip>
      </div>
  );
}




export function SaebrsCardSplitInterior({
  title,
  saebrsValue,
  mysaebrsValue,
  type,
  className,
}: {
  title: string;
  saebrsValue: string;
  mysaebrsValue: string;
  type: 'emotional' | 'social' | 'academic';
  className: string;
}) {
  const Icon = iconMap[type];

  const tooltipsMap = {
    'emotional' : <>Emotional risk score is calculated by... and indicates...<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>,
    'social' : <>Social risk score is calculated by... and indicates...<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>,
    'academic' : <>Academic risk score is calculated by... and indicates...<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>,
  };

  const thisTooltip = tooltipsMap[type];
// min-w-fit max-w-sm on tooltip className if break
  return (
      // <Tooltip text={thisTooltip} 
      //   placement='bottomStart' 
      //   enterDelay={450}
      //   className=''>
        <div className={'flex flex-col bg-zinc-50 rounded-xl ' + className}>
          
          {/* TITLE ROW */}
          <div className="flex flex-row -mb-1">
            {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
            <h3 className="text-sm font-medium text-slate-800">{title}</h3>
          </div>
          
          {/* VALUES ROW */}
          <div className="flex flex-row px-8 -mx-2">
            {/* SAEBRS COLUMN */}
            <div className='flex flex-col ml-4 mr-16 items-center'>
              {/* RISK VALUE DIV */}
              <div className="-mb-1">
                <p className={clsx(
                  'font-semibold text-3xl',
                  {
                    'text-red-500': saebrsValue.toLowerCase() === 'high',
                    'text-amber-300': saebrsValue.toLowerCase() === 'some',
                    'text-green-400': saebrsValue.toLowerCase() === 'low',
                    'text-slate-600': saebrsValue.toString().toLowerCase() === 'na'
                  }
                  )}>
                    {saebrsValue.toUpperCase()}
                  </p>
              </div>
              {/* SUBTITLE DIV */}
              <div>
                <p className='font-extralight italic text-sm'>Saebrs</p>
              </div>
            </div>

            {/* MYSAEBRS COLUMN */}
            <div className='flex flex-col ml-16 mr-4 items-center'>
              {/* RISK VALUE DIV */}
              <div className="">
                <p className={clsx(
                  'font-semibold text-3xl',
                  {
                    'text-red-500': mysaebrsValue.toLowerCase() === 'high',
                    'text-amber-300': mysaebrsValue.toLowerCase() === 'some',
                    'text-green-400': mysaebrsValue.toLowerCase() === 'low',
                    'text-slate-600': mysaebrsValue.toString().toLowerCase() === 'na'
                  }
                  )}>
                    {mysaebrsValue.toUpperCase()}
                  </p>
              </div>
              {/* SUBTITLE DIV */}
              <div className="">
                <p className='font-extralight italic text-sm'>MySaebrs</p>
              </div>
            </div>
          </div>
        </div>
      // </Tooltip>
  );
}

export function CardSaebrsSummary({
  title,
  emotional,
  social,
  academic
}: {
  title: string
  emotional: [string, string];
  social: [string, string];
  academic: [string, string];
}) {
  return (
    <div>
      <div className="flex flex-col rounded-xl p-2 bg-zinc-100 shadow-sm">
        <h3 className="text-lg font-medium text-slate-800 mb-2 justify-center items-center">{title}</h3>

        <div className='flex flex-row justify-center'>
          <SaebrsCardSplitInterior title="Total" saebrsValue={emotional[0]} mysaebrsValue={emotional[1]} type='emotional' className='basis-3/5'/>
        </div>
        

        <div className="flex flex-row h-20 mt-1">
          <Tooltip
            text={<>Emotional risk score is calculated by... and indicates...<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>}
            placement='bottom'
          >
          <div className="flex">
            <SaebrsCardSplitInterior title="Emotional" saebrsValue={emotional[0]} mysaebrsValue={emotional[1]} type='emotional' className=''/>
          </div>
          </Tooltip>
          <div className="flex ml-auto mr-auto px-4">
            <SaebrsCardSplitInterior title="Social" saebrsValue={social[0]} mysaebrsValue={social[1]} type='social' className=''/>
          </div>
          <div className="flex ">
            <SaebrsCardSplitInterior title="Academic" saebrsValue={academic[0]} mysaebrsValue={academic[1]} type='academic' className=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

