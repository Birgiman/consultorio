import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export function AuthLayout() {
  return (
    <div className='flex w-full h-full'>
      <div className='w-full h-full flex flex-col items-center justify-center gap-11'>
        <img
          className='w-96'
          src={logo}
          alt='logo'
        />

        <div className='w-full max-w-[504px] px-8' >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
