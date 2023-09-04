import * as ScrollArea from '@radix-ui/react-scroll-area';
import { FaWhatsapp } from 'react-icons/fa';

export function BirthdayCard() {
  return (
    <div className='w-full h-full'>
      <header className='flex flex-col items-center justify-center w-full h-1/5 bg-indian-khaki-200 rounded-t-xl border-t-[4px] rounded-x-sm border-x-[1.5px] border-indian-khaki-700 text-2xl tracking-tighter text-indian-khaki-900 font-bold'>
        <h1>Aniversariantes do dia!</h1>
      </header>
      <div className='flex flex-col justify-center w-full h-4/5 text-xl text-indian-khaki-900 tracking-wide bg-indian-khaki-400 rounded-b-xl border-x-[1.5px] border-y-[0.5px] border-indian-khaki-700 shadow-md shadow-indian-khaki-500'>
        <ScrollArea.Root className="h-full overflow-hidden py-2 px-3">
          <ScrollArea.Viewport className="w-full h-full">
            <div className='flex items-center justify-between bg-indian-khaki-200 rounded-md border-[0.5px] border-spectra-600 mt-1 px-3 py-2 shadow-md shadow-indian-khaki-700'>
              <div className='flex flex-col space-y-1'>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              Eduardo Fulano De Tal
                </p>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              23 anos
                </p>
              </div>
              <div className='flex items-center justify-center shadow-2xl shadow-indian-khaki-800 hover:shadow-2xl'>
                <button className='hover:text-indian-khaki-700 hover:animate-none animate-bounce transition-all ease-in'>
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between bg-indian-khaki-200 rounded-md border-[0.5px] border-spectra-600 mt-1 px-3 py-2 shadow-md shadow-indian-khaki-700'>
              <div className='flex flex-col space-y-1'>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              Eduardo Fulano De Tal
                </p>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              23 anos
                </p>
              </div>
              <div className='flex items-center justify-center shadow-2xl shadow-indian-khaki-800 hover:shadow-2xl'>
                <button className='hover:text-indian-khaki-700 hover:animate-none animate-bounce transition-all ease-in'>
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between bg-indian-khaki-200 rounded-md border-[0.5px] border-spectra-600 mt-1 px-3 py-2 shadow-md shadow-indian-khaki-700'>
              <div className='flex flex-col space-y-1'>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              Eduardo Fulano De Tal
                </p>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              23 anos
                </p>
              </div>
              <div className='flex items-center justify-center shadow-2xl shadow-indian-khaki-800 hover:shadow-2xl'>
                <button className='hover:text-indian-khaki-700 hover:animate-none animate-bounce transition-all ease-in'>
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between bg-indian-khaki-200 rounded-md border-[0.5px] border-spectra-600 mt-1 px-3 py-2 shadow-md shadow-indian-khaki-700'>
              <div className='flex flex-col space-y-1'>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              Eduardo Fulano De Tal
                </p>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              23 anos
                </p>
              </div>
              <div className='flex items-center justify-center shadow-2xl shadow-indian-khaki-800 hover:shadow-2xl'>
                <button className='hover:text-indian-khaki-700 hover:animate-none animate-bounce transition-all ease-in'>
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between bg-indian-khaki-200 rounded-md border-[0.5px] border-spectra-600 mt-1 px-3 py-2 shadow-md shadow-indian-khaki-700'>
              <div className='flex flex-col space-y-1'>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              Eduardo Fulano De Tal
                </p>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              23 anos
                </p>
              </div>
              <div className='flex items-center justify-center shadow-2xl shadow-indian-khaki-800 hover:shadow-2xl'>
                <button className='hover:text-indian-khaki-700 hover:animate-none animate-bounce transition-all ease-in'>
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between bg-indian-khaki-200 rounded-md border-[0.5px] border-spectra-600 mt-1 px-3 py-2 shadow-md shadow-indian-khaki-700'>
              <div className='flex flex-col space-y-1'>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              Eduardo Fulano De Tal
                </p>
                <p className='flex items-center px-1 bg-indian-khaki-100 rounded-md shadow-md shadow-indian-khaki-400 w-fit'>
              23 anos
                </p>
              </div>
              <div className='flex items-center justify-center shadow-2xl shadow-indian-khaki-800 hover:shadow-2xl'>
                <button className='hover:text-indian-khaki-700 hover:animate-none animate-bounce transition-all ease-in'>
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 rounded-[10px] bg-indian-khaki-500 transition-colors duration-[160ms] ease-out hover:bg-indian-khaki-500/80 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-indian-khaki-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 rounded-[10px] bg-indian-khaki-500/60 transition-colors duration-[160ms] ease-out hover:bg-indian-khaki-500 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="flex-1 bg-indian-khaki-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-indian-khaki-600" />
        </ScrollArea.Root>
      </div>
    </div>
  );
}
