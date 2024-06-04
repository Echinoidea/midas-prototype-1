import clsx from "clsx";
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Divider, 
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem, 
  Button
} from "@nextui-org/react";
import { Nunito } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

export default function GradeSearch({
  selectedGrade,
  setSelectedGrade
}: {
  selectedGrade: string;
  setSelectedGrade : React.Dispatch<React.SetStateAction<string>>;
}) {

  const [ classList, setClassList ] = useState(['C01', 'C02', 'C03', 'C04', 'C05'])

  return (
    <Card className="bg-neutral-100" shadow='md'>
        <CardHeader className={nunito.className}>
          <h3 className="text-lg font-medium text-slate-800">Currently viewing grade </h3>&nbsp;<span className="font-extrabold underline">{selectedGrade}</span>
        </CardHeader>
        <CardBody className='flex flex-row'>
          <div className='flex flex-row basis-1/2 w-full'>
            <Dropdown >
              <DropdownTrigger className='flex min-w-full'>
                <Button 
                  variant="bordered" 
                >
                  {selectedGrade}
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="8" onPress={() => setSelectedGrade("8")}>8</DropdownItem>
                <DropdownItem key="7" onPress={() => setSelectedGrade("7")}>7</DropdownItem>
                <DropdownItem key="6" onPress={() => setSelectedGrade("6")}>6</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <Divider orientation="vertical" className="mx-2"/>

          <div className='flex flex-row basis-1/2 w-full'>
            <Dropdown >
              <DropdownTrigger className='flex min-w-full'>
                <Button 
                  variant="bordered" 
                >
                  Go to Classroom
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="Static Actions">
              
                {classList.map((classroom: string) => {
                  return (
                      
                    <DropdownItem key={classroom}>
                      <Link
                        key={classroom}
                        href={{
                          pathname: '/dashboard/classroom',
                          query: { classroom },
                        }}
                      >
                        <div className="w-full">
                          {classroom}
                        </div>
                      
                      </Link>
                    </DropdownItem>
                  
                  );
                })}
                
              </DropdownMenu>
            </Dropdown>
          </div>
          
        </CardBody>
      </Card>
  );
}