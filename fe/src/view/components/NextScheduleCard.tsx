import { CheckIcon, Cross1Icon, ResetIcon } from '@radix-ui/react-icons';

export function NextScheduleCard() {
  return (
    <div className='w-full h-full'>
      <header className='flex flex-col items-center justify-center w-full h-1/5 bg-indian-khaki-200 rounded-t-xl border-t-[4px] rounded-x-sm border-x-[1.5px] border-indian-khaki-700 text-2xl tracking-tighter text-indian-khaki-900 font-bold '>
        <h1>Próxima consulta em</h1>
        <p>15 minutos</p>
      </header>
      <div className='px-3 flex flex-col justify-center w-full h-3/5 text-xl text-indian-khaki-900 tracking-wide bg-indian-khaki-400 space-y-2 rounded-x-sm border-x-[1.5px] border-y-[0.5px] border-indian-khaki-700'>
        <div className='bg-indian-khaki-200 rounded-md px-2 py-1 shadow-md shadow-indian-khaki-700'>
          <p>Eduardo Fulano De Tal</p>
        </div>
        <div className='bg-indian-khaki-200 rounded-md px-2 py-1 shadow-md shadow-indian-khaki-700'>
          <p>Agendada</p>
        </div>
        <div className='bg-indian-khaki-200 rounded-md px-2 py-1 shadow-md shadow-indian-khaki-700'>
          <p>15:00H</p>
        </div>
      </div>
      <footer className='flex items-center w-full h-1/5 justify-center py-2 space-x-1 text-white font-bold text-sm bg-indian-khaki-500
            rounded-b-xl border-b-[4px] rounded-x-sm border-x-[1.5px] border-indian-khaki-700 group/item shadow-md shadow-indian-khaki-500'>
        <button className='flex items-center justify-center bg-spectra-600/95 border rounded-md min-[1366px]:min-w-[90px] max-[1367px]:min-w-[100px] py-[1px] px-1 shadow-md shadow-indian-khaki-700 tracking-tight  hover:bg-spectra-700 active:bg-spectra-500 transition-all ease-in'>
          <CheckIcon className='w-3 mr-1' />
            Confirmar
        </button>
        <button className='flex items-center justify-center bg-indian-khaki-500 border rounded-md min-[1366px]:min-w-[90px] max-[1367px]:min-w-[100px] py-[1px] px-1 shadow-md shadow-indian-khaki-700 tracking-tight hover:bg-indian-khaki-700 active:bg-indian-khaki-400 transition-all ease-in'>
          <ResetIcon className='w-3 mr-1' />
            Reagendar
        </button>
        <button className='flex items-center justify-center bg-red-500/95 border rounded-md min-[1366px]:min-w-[90px] max-[1367px]:min-w-[100px] py-[1px] px-1 shadow-md shadow-indian-khaki-700 tracking-tight hover:bg-red-700 active:bg-red-400 transition-all ease-in'>
          <Cross1Icon className='w-3 mr-1' />
            Cancelar
        </button>
      </footer>
    </div>
  );
}
