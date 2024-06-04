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
import SimpleLineIconsMagnifier from "@/app/ui/icons/SimpleLineIconsMagnifier";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

export default function ClassSearch({
  selectedClass,
  setSelectedClass
}: {
  selectedClass: string;
  setSelectedClass : React.Dispatch<React.SetStateAction<string>>;
}) {
  const SearchAction = async (formData: FormData) => {
    const id = formData.get('classroomId') || ""
    setSelectedClass(id.toString())
  }

  return (
    <Card className="bg-neutral-100" shadow='md'>
        <CardHeader className={nunito.className}>
          <h3 className="text-lg font-medium text-slate-800">Currently viewing class </h3>&nbsp;<span className="font-extrabold underline">{selectedClass}</span>
        </CardHeader>
        <CardBody className='flex flex-row'>
          <div className='flex flex-row basis-1/2 w-full'>
            <form className="flex flex-row" action={SearchAction}>
              <div className='flex'>
                <Input name="classroomId" placeholder="Enter classroom ID" variant="underlined"/>
                <Button className='min-w-fit' variant="flat" type="submit" >
                  <SimpleLineIconsMagnifier/>
                </Button>
              </div>
            </form>
          </div>

          <Divider orientation="vertical" className="mx-2"/>

          <div className='flex flex-row basis-1/2 w-full'>
            <Dropdown >
              <DropdownTrigger className='flex min-w-full'>
                <Button 
                  variant="bordered" 
                >
                  Go to Student
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="1">S01AEE</DropdownItem>
                <DropdownItem key="2">S02AFG</DropdownItem>
                <DropdownItem key="3">S03AG0</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          
        </CardBody>
      </Card>
  );
}