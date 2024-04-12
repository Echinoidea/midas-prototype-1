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

import { lusitana, nunito } from '@/app/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  emotional: FaceSmileIcon,
  social: UsersIcon,
  academic: AcademicCapIcon,
};

export function CardInterior({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'emotional' | 'social' | 'academic';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${nunito.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

export function CardInteriorJustValue({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${nunito.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

export function CardSingleValue({
  title,
  value,
  type,
  capitalize
}: {
  title: string;
  value: string | number;
  type: string;
  capitalize: boolean
}) {

  return (
    <div>
      <div className="rounded-xl p-4 bg-zinc-100 shadow-sm">
        <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

        <div className='flex-1'>
          <div className='flex justify-center items-center bg-zinc-50 rounded-xl h-20'>
            <p className={clsx(
                'font-semibold text-3xl',
                {
                  'text-red-500': value.toString().toLowerCase() === 'high' && type === 'string'
                    || Number(value) > 5 && type === 'number',
                  'text-amber-300': value.toString().toLowerCase() === 'some' && type === 'string',
                  'text-green-400': value.toString().toLowerCase() === 'low' && type === 'string',
                }
                )}>
              {capitalize ? value.toString().toUpperCase() : value.toString()}
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
}: {
  title: string;
  values: [string | number, string | number];
  subtitles: [string, string];
}) {
  return (
    <div className="rounded-xl p-4 bg-zinc-100 shadow-sm">
      <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

      <div className='flex flex-col bg-zinc-50 pt-4 h-20 rounded-xl'>
        {/* VALUES ROW */}
        <div className="flex flex-row px-8 -mx-2">
          {/* SAEBRS COLUMN */}
          <div className='flex flex-col ml-4 mr-16 items-center'>
            {/* RISK VALUE DIV */}
            <div className="-mb-1">
              <p className={clsx(
                'font-semibold text-3xl',
                {
                  'text-red-500': values[0].toString().toLowerCase() === 'high',
                  'text-amber-300': values[0].toString().toLowerCase() === 'some' ||
                    values[0].toString().toLowerCase() === 'one+',
                  'text-green-400': values[0].toString().toLowerCase() === 'low'  ||
                    values[0].toString().toLowerCase() === 'zero',
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

          {/* MYSAEBRS COLUMN */}
          <div className='flex flex-col ml-16 mr-4 items-center'>
            {/* RISK VALUE DIV */}
            <div className="">
              <p className={clsx(
                'font-semibold text-3xl',
                {
                  'text-red-500': values[1].toString().toLowerCase() === 'high',
                  'text-amber-300': values[1].toString().toLowerCase() === 'some' ||
                    values[1].toString().toLowerCase() === 'one+',
                  'text-green-400': values[1].toString().toLowerCase() === 'low'  ||
                    values[1].toString().toLowerCase() === 'zero',
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
        </div>
      </div>
    </div>
  );
}

export function SaebrsCardSplitInterior({
  title,
  saebrsValue,
  mysaebrsValue,
  type,
}: {
  title: string;
  saebrsValue: string;
  mysaebrsValue: string;
  type: 'emotional' | 'social' | 'academic';
}) {
  const Icon = iconMap[type];

  return (
      <div className='flex flex-col bg-zinc-50 rounded-xl'>
        
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
                  'text-green-400': saebrsValue.toLowerCase() === 'low'
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
                  'text-green-400': mysaebrsValue.toLowerCase() === 'low'
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
      <div className="rounded-xl p-4 bg-zinc-100 shadow-sm">
        <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

        <div className="flex flex-row h-20">
          <div className="flex ml-2 mr-auto px-2">
            <SaebrsCardSplitInterior title="Emotional" saebrsValue={emotional[0]} mysaebrsValue={emotional[1]} type='emotional'/>
          </div>
          <div className="flex ml-auto mr-auto px-2">
            <SaebrsCardSplitInterior title="Social" saebrsValue={social[0]} mysaebrsValue={social[1]} type='social'/>
          </div>
          <div className="flex ml-auto mr-4 px-2">
            <SaebrsCardSplitInterior title="Academic" saebrsValue={academic[0]} mysaebrsValue={academic[1]} type='academic'/>
          </div>
        </div>
      </div>
    </div>
  );
}