import { Card, CardBody,  Divider, Tooltip } from '@nextui-org/react';
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

export function CardStudentDemographics({
  gender,
  ethnicity,
  englishLearner,
}: {
  gender: string;
  ethnicity: string;
  englishLearner: string;
}) {

  return (
    <Card className={`${nunito.className} bg-neutral-100 w-full`} shadow='md'>
      <CardBody className={`${nunito.className} flex gap-1 justify-center`}>
        <Row header="Gender" content={gender}/>
        <Divider/>
        <Row header="Ethnicity" content={ethnicity}/>
        <Divider/>
        <Tooltip content="Is this student an English language learner?" placement='bottom'>
        <Row header="English Learner" content={englishLearner}/>
        </Tooltip>
      </CardBody>
    </Card>
  );
}