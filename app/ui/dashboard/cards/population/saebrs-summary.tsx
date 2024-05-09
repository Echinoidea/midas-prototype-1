import {
  FaceSmileIcon,
  AcademicCapIcon,
  UsersIcon
  
} from '@heroicons/react/24/outline';
import MaterialSymbolsLightPersonAlertOutline from '../../../icons/MaterialSymbolsLightPersonAlertOutline';

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
  type,
  riskValues,
}: {
  title: string;
  type: string;
  riskValues: string[];
}) {
  return (
    <div className=''>
      {/* SAEBRS ROW */}
      <div className='flex flex-row items-center bg-zinc-50 h-20 mb-2 px-4 rounded-xl shadow-sm'>
        <div className='flex flex-col'>
          <p className='-ml-2'>{title}</p>
          {/* LOW RISK COLUMN */}
          <div className='flex flex-row'>
            <div className='flex flex-col items-center mx-3'>
              {/* VALUE */}
              <p className='font-semibold text-2xl'>
                {riskValues[0]}
              </p>
              {/* SUBTITLE */}
              <p className='font-extralight italic text-sm'>
                Low
              </p>
            </div>
            
            <div className='flex flex-col items-center mx-3'>
              {/* VALUE */}
              <p className='font-semibold text-2xl'>
                {riskValues[1]}
              </p>
              {/* SUBTITLE */}
              <p className='font-extralight italic text-sm'>
                Some
              </p>
            </div>

            <div className='flex flex-col items-center mx-3'>
              {/* VALUE */}
              <p className='font-semibold text-2xl'>
                {riskValues[2]}
              </p>
              {/* SUBTITLE */}
              <p className='font-extralight italic text-sm'>
                High
              </p>
            </div>
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
  saebrsTotal: string[];
  mySaebrsTotal: string[];
  saebrsEmotional: string[];
  mySaebrsEmotional: string[];
  saebrsSocial: string[];
  mySaebrsSocial: string[];
  saebrsAcademic: string[];
  mySaebrsAcademic: string[];
}) {

// min-w-fit max-w-sm on tooltip className if break
  return (
      // MAIN ROW
      <div className='flex flex-row  bg-zinc-100 pt-6 pb-4 px-8 rounded-xl shadow-md'>
        {/* TOTAL RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Total' type='total'/>
          <RiskRow title='Saebrs' type='total' riskValues={saebrsTotal}/>
          <RiskRow title='MySaebrs' type='total' riskValues={mySaebrsTotal}/>
        </div>
        
        <VerticalDivider/>   

        {/* EMOTIONAL RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Emotional' type='emotional'/>
          <RiskRow title='Saebrs' type='total' riskValues={saebrsEmotional}/>
          <RiskRow title='MySaebrs' type='total' riskValues={mySaebrsEmotional}/>
        </div>

        <VerticalDivider/>   

        {/* SOCIAL RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Social' type='social'/>
          <RiskRow title='Saebrs' type='total' riskValues={saebrsSocial}/>
          <RiskRow title='MySaebrs' type='total' riskValues={mySaebrsSocial}/>
        </div>

        <VerticalDivider/>   

        {/* ACADEMIC RISK COLUMN */}
        <div className='flex flex-col basis-1/4'>
          <RiskTitle title='Academic' type='academic'/>
          <RiskRow title='Saebrs' type='total' riskValues={saebrsAcademic}/>
          <RiskRow title='MySaebrs' type='total' riskValues={mySaebrsAcademic}/>
        </div>
      </div>
  );
}
