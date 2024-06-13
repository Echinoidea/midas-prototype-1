import clsx from "clsx";
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Input,
  Button,
  Divider,
  Tooltip
} from "@nextui-org/react";
import { Nunito } from "next/font/google";
import SimpleLineIconsMagnifier from "@/app/ui/icons/SimpleLineIconsMagnifier";
import { DonutChart } from "@/app/ui/charts/donut-chart";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

const genderDataPlaceholder = [
  {
    id: "Male",
    value: 500
  },
  {
    id: "Female",
    value: 548
  }
]

const ethnicityDataPlaceholder = [
  {
    id: 'White',
    value: 358
  },
  {
    id: 'Hispanic',
    value: 300
  },
  {
    id: 'Other POC',
    value: 390
  }
]

const englishLearnerDataPlaceholder = [
  {
    id: "ELL",
    value: 800
  },
  {
    id: "Not ELL",
    value: 248
  }
]

function Row({
  header,
  content,
}:
{
  header: string;
  content: string;
}) {
  return (
    <div className='flex flex-row'>
      <p className='ml-0 mr-auto font-normal text-xl'>{header}</p>
      <div className="ml-auto mr-0 text-xl">
        {content}
      </div>
    </div>
  )
}

function DemographicsRow({
  content,
}:
{
  content: [string, string, string]
}) {
  return (
    <div className='flex flex-row '>
      <Tooltip content={<DonutChart data={genderDataPlaceholder} colors={['#f87171', '#a5f3fc']} selectedSlice={'Male'}/>}>
        <div className='flex basis-1/3 justify-center'>
          {content[0]}
        </div>
      </Tooltip>

      
      <DonutChart data={ethnicityDataPlaceholder} colors={['#f87171', '#a5f3fc', '#4ade80']} selectedSlice={'White'}/>
      
      <Divider orientation="vertical"/>

      <Tooltip content={<DonutChart data={englishLearnerDataPlaceholder} colors={['#4ade80', '#a3a3a3']} selectedSlice={'ELL'}/>}>
        <div className='flex basis-1/3 justify-center'>
          {content[1]}
        </div>
      </Tooltip>
      <Divider orientation="vertical"/>
      <div className='flex basis-1/3 justify-center'>
        {content[2]}
      </div>
    </div>
  )
}

export default function StudentSearch({
  selectedStudent,
  setSelectedStudent,
  classroomId,
  gradeLevel,
}: {
  selectedStudent: string;
  setSelectedStudent : React.Dispatch<React.SetStateAction<string>>;
  classroomId: string;
  gradeLevel: string;
}) {

  const SearchAction = async (formData: FormData) => {
    const id = formData.get('studentId') || ""
    setSelectedStudent(id.toString())
  }

  return (
    <Card className="bg-neutral-100 pb-1" shadow='md'>
        <CardHeader className={nunito.className}>
          <h3 className="text-lg font-medium text-slate-800">Currently viewing student </h3>&nbsp;<span className="font-extrabold underline">{selectedStudent}</span>
        </CardHeader>
        <CardBody className='-mt-4 flex flex-row w-full'>
          <div className='flex flex-col basis-full w-max gap-1'>
            <form className="flex flex-row w-full mb-4" action={SearchAction}>
              <div className='flex w-full'>
                <Input name="studentId" placeholder="Enter student ID" variant="underlined"/>
                <Button className='min-w-fit' variant="flat" type="submit" >
                  <SimpleLineIconsMagnifier/>
                </Button>
              </div>
            </form>
            <Row header="Classroom ID" content={classroomId}/>
            <Divider/>
            <Row header="Grade Level" content={gradeLevel}/>
            <Divider className='mb-2'/>
            <DemographicsRow content={['Male', 'White', 'ELL']}/>
          </div>
        </CardBody>
      </Card>
  );
}