import { Spinner } from "@nextui-org/react";

export default function DashboardSkeleton() {
  return (
    <main className='flex justify-center items-center min-h-screen'>
      <Spinner color='success'></Spinner>
    </main>
  );
}