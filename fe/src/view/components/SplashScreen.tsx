import { Transition } from '@headlessui/react';
import { cn } from '../../app/utils/cn';
import logo from '../../assets/logo.svg';

interface SplashScreenProps {
  isLoading: boolean;
}

export function SplashScreen({ isLoading }: SplashScreenProps) {
  return (
    <>
      <Transition
        className='fixed w-full h-full flex items-center justify-center'
        appear={true}
        show={isLoading}
        enter="duration-[400ms] transition ease-in-out"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transition duration-[550ms] ease-in-out"
        leaveFrom="rotate-0 opacity-100"
        leaveTo="rotate-[180deg] opacity-0"
      >
        <img src={logo} alt='Logo image' className={cn(
          'w-96',
          isLoading && 'animate-bounce'
        )} />
      </Transition>
    </>
  );
}

