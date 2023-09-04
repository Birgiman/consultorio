import { Outlet } from 'react-router-dom';
import { BirthdayCard } from '../components/BirthdayCard';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { NextScheduleCard } from '../components/NextScheduleCard';

export function DashboardLayout() {
  return (
    <div className='flex w-full h-full p-4'>
      <div className='w-1/4 h-full mr-2 flex flex-col justify-between'>
        <div className='h-[49%]'>
          <NextScheduleCard />
        </div>
        <div className='h-[49%]'>
          <BirthdayCard />
        </div>
      </div>

      <div className='w-3/4 h-full'>
        <Outlet />
      </div>
      <div className='ml-9'>
        <HamburgerMenu />
      </div>
    </div>
  );
}
