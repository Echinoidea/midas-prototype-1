'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
  TriangleDownIcon,
} from '@radix-ui/react-icons';
import { BarChart } from '@tremor/react';

import {
  BarChartEnglishLearner,
  BarChartEthnicity,
  DonutChartGender,
} from './charts/total-demographics-charts';
import useRiskOptions from '@/hooks/useRiskOptions';
import { PopToRiskCharts } from './dashboard/cards/population/demographics-summary';
const Dropdown = () => {
  const riskOptions = useRiskOptions();
  const colors = ['rose-500', 'yellow-400', 'green-500'];
  const [title, setTitle] = useState<string>('Risk Option');
  const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();

  useEffect(() => {
    console.log(riskOptions);
  }, [riskOptions]);

  const ethnicityDataPlaceholder = [
    {
      Ethnicity: 'White',
      'High Risk': 58,
      'Some Risk': 200,
      'Low Risk': 100,
    },
    {
      Ethnicity: 'Hispanic',
      'High Risk': 20,
      'Some Risk': 150,
      'Low Risk': 130,
    },
    {
      Ethnicity: 'Other POC',
      'High Risk': 33,
      'Some Risk': 156,
      'Low Risk': 200,
    },
  ];

  return (
    <div className="">
      <div className="">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className="flex items-end justify-end">
            <button
              className="text-violet11 shadow-blackA4 hover:bg-violet3 flex inline-flex items-center justify-center gap-x-4 rounded-md border-transparent bg-white px-6 py-2 shadow-[0_2px_10px] outline-none transition focus:shadow-[0_0_0_2px] focus:shadow-black"
              aria-label="Customise options"
            >
              <p>{title}</p>
              <TriangleDownIcon width={20} height={20} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="  data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
              sideOffset={5}
            >
              <DropdownMenu.Item
                onClick={() => {
                  riskOptions.onTotalScore();
                  setTitle('Total Score');
                }}
                className=" text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                Total Score{' '}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <DropdownMenu.Item
                onClick={() => {
                  riskOptions.onEmotional();
                  setTitle('Emotional');
                }}
                className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                Emotional{' '}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <DropdownMenu.Item
                onClick={() => {
                  riskOptions.onSocial();
                  setTitle('Social');
                }}
                className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                Social{' '}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <DropdownMenu.Item
                onClick={() => {
                  riskOptions.onAcademic();
                  setTitle('Academic');
                }}
                className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                Academic{' '}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <DropdownMenu.Item
                onClick={() => {
                  riskOptions.onGender();
                  setTitle('Gender');
                }}
                className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                Gender{' '}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <DropdownMenu.Item
                onClick={() => {
                  riskOptions.onEnglishLearner();
                  setTitle('English Learner');
                }}
                className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                English Learner{' '}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <DropdownMenu.Item
                onClick={() => {
                  console.log('first time : ' + riskOptions.isEthnicity);
                  if (!riskOptions.isEthnicity) {
                    console.log('first time : ' + riskOptions.isEthnicity);
                    riskOptions.onEthnicity();
                  }
                }}
                className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none hover:bg-neutral-100/80 data-[disabled]:pointer-events-none"
              >
                Ethnicity{' '}
              </DropdownMenu.Item>

              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Dropdown;
