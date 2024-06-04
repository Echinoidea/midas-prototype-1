import clsx from 'clsx';
import React from 'react';
import { Card, CardBody, CardHeader, Divider, Spacer, Tooltip } from '@nextui-org/react';
import { Nunito } from "next/font/google";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

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
    <div className={'flex flex-col h-20 ' + padding}>
      {/* CONTENT ROW */}
      <p className={`${nunito.className} text-md ml-2`}> {title} </p>
      <div className="flex flex-row px-8 -mx-2">
      
        {/* LEFT COLUMN */}
        <div className='flex flex-col ml-4 mr-16 basis-1/2 items-center'>
          {/* VALUE DIV */}
          <div className="-mb-1">
            <p className={clsx(
              'text-3xl',
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
        
        {/* <Spacer x={32}/> */}

        {/* RIGHT COLUMN */}
        <div className='flex flex-col ml-16 mr-4 basis-1/2 items-center'>
          {/* VALUE DIV */}
          <div className="">
            <p className={clsx(
              'text-3xl',
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

      <Card className={`${nunito.className} bg-neutral-100 h-full`}>
        {/* MAIN TITLE */}
        <CardHeader className=''>
          <h3 className="text-lg font-medium text-slate-800">{title}</h3>
        </CardHeader>
        
        {/* MAIN CONTENT */}
        <CardBody className='flex flex-col -mt-4 px-4'>
          {/* CARD 1 --- ODR */}
          <Tooltip content={"ODR Tooltip"} placement='bottom'>
            <div className=''>
              <Interior title='Math' values={valuesTop} subtitles={subtitlesTop} padding=''/>
            </div>
          </Tooltip>

          <Divider className='mt-0 mb-1'/>

          {/* CARD 2 --- SUSPENSIONS */}
          <Tooltip content={"Reading test risk Tooltip"} placement='bottom'>
            <div className=''>
              <Interior title='Reading' values={valuesBottom} subtitles={subtitlesBottom} padding=''/>
            </div>
          </Tooltip>
        </CardBody>
      </Card>
  );
}