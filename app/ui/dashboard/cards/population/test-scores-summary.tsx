import clsx from 'clsx';
import { nunito } from '@/app/ui/fonts';
import React from 'react';
import { Text, Tooltip } from '@geist-ui/core';

function Interior({
  title,
  values,
  subtitles,
  padding,
}: {
  title: string;
  values: [string | number, string | number];
  subtitles: [string, string];
  padding: string;
}) {
  return (
    <div className={'flex flex-col bg-zinc-50 h-20 rounded-xl ' + padding}>
      {/* CONTENT ROW */}
      <Text className={`${nunito.className} text-md ml-2`}> {title} </Text>
      <div className="flex flex-row px-8 -mx-2">
      
        {/* LEFT COLUMN */}
        <div className='flex flex-col ml-4 mr-16 basis-1/2 items-center'>
          {/* VALUE DIV */}
          <div className="-mb-1">
            <p className={clsx(
              'font-semibold text-3xl',
              {
                
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
        

        {/* RIGHT COLUMN */}
        <div className='flex flex-col ml-16 mr-4 basis-1/2 items-center'>
          {/* VALUE DIV */}
          <div className="">
            <p className={clsx(
              'font-semibold text-3xl',
              {
                
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
      </div>
    </div>
  );
}

export function CardTestScoreSummary({
  title,
  subtitlesTop,
  subtitlesBottom,
  valuesTop,
  valuesBottom
}: {
  title: string;
  subtitlesTop: [string, string];
  subtitlesBottom: [string, string];
  valuesTop: [string, string] | [number, number];
  valuesBottom: [string, string] | [number, number];
}) {

  return (
    <div>
      {/* MAIN DIV */}
      <div className="rounded-xl p-4 bg-zinc-100 shadow-md">
        {/* MAIN TITLE */}
        <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>

        {/* MAIN COLUMN */}
        <div className='flex flex-col'>
          {/* CARD 1 --- ODR */}
          <Tooltip text={"Math Test Tooltip"} placement='bottom' enterDelay={450} className='basis-1/2 min-w-fit'>
            <Interior title='Math Test Risks' values={valuesTop} subtitles={subtitlesTop} padding='mb-2'/>
          </Tooltip>
          {/* CARD 2 --- SUSPENSIONS */}
          <Tooltip text={"Math Test Tooltip"} placement='bottom' enterDelay={450} className='basis-1/2 min-w-fit'>
            <Interior title='Reading Test Risks' values={valuesBottom} subtitles={subtitlesBottom} padding=''/>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}