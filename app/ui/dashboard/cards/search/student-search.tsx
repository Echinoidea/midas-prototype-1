import clsx from "clsx";
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Input,
  Button,
  Divider
} from "@nextui-org/react";
import { Nunito } from "next/font/google";
import SimpleLineIconsMagnifier from "@/app/ui/icons/SimpleLineIconsMagnifier";
const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

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
          </div>
        </CardBody>
      </Card>
  );
}