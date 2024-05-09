'use client';

import {
  FaceSmileIcon,
  AcademicCapIcon,
  UsersIcon
  
} from '@heroicons/react/24/outline';
import MaterialSymbolsLightPersonAlertOutline from '../../../icons/MaterialSymbolsLightPersonAlertOutline';
import { Text } from '@geist-ui/core';

import clsx from 'clsx';
import React from 'react';

function VerticalDivider() {
  return (
    <div className="w-0 border border-zinc-200 mx-4">&nbsp;</div>
  );
}

const iconMap = {
  total: MaterialSymbolsLightPersonAlertOutline,
  emotional: FaceSmileIcon,
  social: UsersIcon,
  academic: AcademicCapIcon,
};

function RiskTitle({
  title,
  type,
}: {
  title: string;
  type: 'total' | 'emotional' | 'social' | 'academic';
}) {
  const Icon = iconMap[type];

  return (
    <div className='flex flex-row items-center justify-start'>
      {Icon ? <Icon className="h-6 w-6 text-gray-700" /> : null}
      <p className='pl-2'>{title}</p>
    </div>
  )
}

function RiskRow({
  title,
  riskValue,
}: {
  title: string;
  riskValue: string;
}) {
  return (
    <div className=''>
      {/* SAEBRS ROW */}
      <div className='flex flex-row bg-zinc-50 h-20 mb-2 px-4 rounded-xl shadow-sm'>
        <div className='flex flex-col w-full'>
          <Text p className='-ml-2'>{title}</Text>

          <div className='flex flex-col justify-center items-center'>
            <Text p className='text-3xl'>{riskValue.toUpperCase()}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SaebrsSummary({
  saebrsTotal,
  mySaebrsTotal,
  saebrsEmotional,
  mySaebrsEmotional,
  saebrsSocial,
  mySaebrsSocial,
  saebrsAcademic,
  mySaebrsAcademic,
}: {
  saebrsTotal: string;
  mySaebrsTotal: string;
  saebrsEmotional: string;
  mySaebrsEmotional: string;
  saebrsSocial: string;
  mySaebrsSocial: string;
  saebrsAcademic: string;
  mySaebrsAcademic: string;
}) {

// min-w-fit max-w-sm on tooltip className if break
  return (
      // MAIN ROW
      <div className='flex flex-row  bg-zinc-100 pt-6 pb-4 px-8 rounded-xl shadow-md'>
        {/* TOTAL RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Total' type='total'/>
          <RiskRow title='Saebrs' riskValue={saebrsTotal}/>
          <RiskRow title='MySaebrs' riskValue={mySaebrsTotal}/>
        </div>
        
        <VerticalDivider/>   

        {/* EMOTIONAL RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Emotional' type='emotional'/>
          <RiskRow title='Saebrs' riskValue={saebrsEmotional}/>
          <RiskRow title='MySaebrs' riskValue={mySaebrsEmotional}/>
        </div>

        <VerticalDivider/>   

        {/* SOCIAL RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Social' type='social'/>
          <RiskRow title='Saebrs' riskValue={saebrsSocial}/>
          <RiskRow title='MySaebrs' riskValue={mySaebrsSocial}/>
        </div>

        <VerticalDivider/>   

        {/* ACADEMIC RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Academic' type='academic'/>
          <RiskRow title='Saebrs' riskValue={saebrsAcademic}/>
          <RiskRow title='MySaebrs' riskValue={mySaebrsAcademic}/>
        </div>
      </div>
  );
}
