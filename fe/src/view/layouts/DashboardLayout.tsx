import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Outlet } from 'react-router-dom';
import { BirthdayCard } from '../components/BirthdayCard';
import { NextScheduleCard } from '../components/NextScheduleCard';

export function DashboardLayout() {
  return (
    <div className='flex w-full h-full p-4'>
      <div className='w-1/4 h-full mr-2 '>
        <div className='h-1/2'>
          <NextScheduleCard />
        </div>
        <div className='h-1/2'>
          <BirthdayCard />
        </div>
      </div>

      <div className='w-3/4 h-full' >
        <Outlet />
      </div>
      <div className='bg-red-500 py-3 px-4'>
        <HamburgerMenuIcon />
      </div>
    </div>
  );
}
