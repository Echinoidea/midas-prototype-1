import { Card, CardBody,  CardHeader,  Divider } from '@nextui-org/react';
import React from 'react';

import { Nunito } from "next/font/google";
const nunito = Nunito({weight: ['200', '300'], subsets:['latin'], style: ['normal', 'italic']})

function Row({
  header,
  content,
}:
{
  header: string;
  content: string;
}) {
  return (
    <div className=''>
      <p className='items-start font-normal text-xl'>{header}</p>
      <div className="flex flex-col items-center text-xl">
        {content}
      </div>
    </div>
  )
}

export function CardStudentTestScores({
  math,
  reading,
}: {
  math: string;
  reading: string;
}) {

  return (
    <Card className={`${nunito.className} bg-neutral-100 w-full`} shadow='md'>
      <CardHeader>
        <h3 className="text-lg font-medium text-slate-800">Test Risk Scores</h3>
      </CardHeader>
      <CardBody className={`${nunito.className} flex gap-1 justify-center -mt-2`}>
        <Row header="Math Risk" content={math}/>
        <Divider/>
        <Row header="Reading Risk" content={reading}/>
      </CardBody>
    </Card>
  );
}