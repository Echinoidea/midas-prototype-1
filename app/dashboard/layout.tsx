
import SideNav from '@/app/ui/dashboard/sidenav';
import { SearchContextProvider } from '../context/test';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  

  return (
    <SearchContextProvider>
    <div className="flex min-h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="">
        <SideNav />
      </div> 

      <div className="flex-grow p-6 ">{children}</div>
    </div>
    </SearchContextProvider>
  );
}