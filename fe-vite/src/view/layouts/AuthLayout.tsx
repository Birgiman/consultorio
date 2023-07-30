import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className='flex w-full h-full'>
      <div className='w-full h-full flex flex-col items-center justify-center gap-16'>
        <div className='bg-blue-500 h-6 ' >LOGO</div>

        <div className='w-full max-w-[504px] px-8' >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
