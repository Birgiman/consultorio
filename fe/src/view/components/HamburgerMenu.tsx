import { CalendarIcon, ExitIcon, GearIcon, HamburgerMenuIcon, PersonIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../app/utils/cn';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(event.target as Node))
        setIsOpen(false);
      console.log({isOpen});
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, [isOpen]);


  function handleChangeMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={cn(isOpen ? 'w-full h-full bg-black/10 fixed top-0 right-0 backdrop-blur-sm pt-4 transition-all ease-in-out duration-[300ms]' : '',)}>
      <div
        ref={hamburgerMenuRef}
        className={cn(
          isOpen ? 'w-[250px] h-[96%] fixed right-0 flex justify-center items-start bg-spectra-600/[60%] rounded-l-lg transition-all ease-in-out duration-[400ms]'
            : 'w-[40px] h-[96%] fixed right-0 flex justify-center items-start rounded-l-lg bg-spectra-600/95 transition-all ease-in-out duration-300'
        )}>
        <div className='flex flex-1 flex-col items-center space-y-3 mt-6 max-w-[85%] text-white'>
          <button
            className={cn(
              'flex items-center justify-between w-full uppercase py-1 px-2 bg-spectra-400 rounded-md shadow-lg shadow-spectra-900 border-[1.5px] border-spectra-600',
              isOpen
                ? 'border-[1.5px] hover:scale-110 hover:duration-100 transition-all duration-500'
                : 'border-none bg-transparent shadow-none hover:scale-100 hover:text-spectra-200 transition-all duration-150'
            )}
            onClick={handleChangeMenu}
          >
            {isOpen ? 'Menu' : ''}
            <HamburgerMenuIcon width={25} height={25} />
          </button>
          <button
            className={cn(
              'flex items-center justify-between w-full uppercase py-1 px-2 bg-spectra-400 rounded-md shadow-lg shadow-spectra-900 border-[1.5px] border-spectra-600',
              isOpen
                ? 'border-[1.5px] hover:scale-110 hover:duration-100 transition-all duration-500'
                : 'border-none bg-transparent shadow-none hover:scale-100 hover:text-spectra-200 transition-all duration-150'
            )}
            onClick={handleChangeMenu}
          >
            {isOpen ? 'Agenda' : ''}
            <CalendarIcon width={25} height={25} />
          </button>
          <button
            className={cn(
              'flex items-center justify-between w-full uppercase py-1 px-2 bg-spectra-400 rounded-md shadow-lg shadow-spectra-900 border-[1.5px] border-spectra-600',
              isOpen
                ? 'border-[1.5px] hover:scale-110 hover:duration-100 transition-all duration-500'
                : 'border-none bg-transparent shadow-none hover:scale-100 hover:text-spectra-200 transition-all duration-150'
            )}
            onClick={handleChangeMenu}
          >
            {isOpen ? 'Pacientes' : ''}
            <PersonIcon width={25} height={25} />
          </button>
          <button
            className={cn(
              'flex items-center justify-between w-full uppercase py-1 px-2 bg-spectra-400 rounded-md shadow-lg shadow-spectra-900 border-[1.5px] border-spectra-600',
              isOpen
                ? 'border-[1.5px] hover:scale-110 hover:duration-100 transition-all duration-500'
                : 'border-none bg-transparent shadow-none hover:scale-100 hover:text-spectra-200 transition-all duration-150'
            )}
            onClick={handleChangeMenu}
          >
            {isOpen ? 'Configurações' : ''}
            <GearIcon width={25} height={25} />
          </button>
          <button
            className={cn(
              'flex items-center justify-between w-full uppercase py-1 px-2 bg-spectra-400 rounded-md shadow-lg shadow-spectra-900 border-[1.5px] border-spectra-600',
              isOpen
                ? 'border-[1.5px] hover:scale-110 hover:duration-100 transition-all duration-500'
                : 'border-none bg-transparent shadow-none hover:scale-100 hover:text-spectra-200 transition-all duration-150'
            )}
            onClick={handleChangeMenu}
          >
            {isOpen ? 'Sair' : ''}
            <ExitIcon width={25} height={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
