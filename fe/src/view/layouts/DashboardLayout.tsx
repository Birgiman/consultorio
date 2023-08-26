import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div className='flex w-full h-full p-4'>
      <div className='w-1/4 h-full'>
        <div className='bg-green-500 h-1/2'>
            Próxima consulta
        </div>
        <div className='bg-pink-500 h-1/2'>
            Aniversario
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
