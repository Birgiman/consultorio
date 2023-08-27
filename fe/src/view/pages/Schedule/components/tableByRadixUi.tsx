import { ArrowDownIcon, CheckIcon, CheckboxIcon, Cross1Icon, ResetIcon } from '@radix-ui/react-icons';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { formateTimeSlotReservation } from '../../../../app/utils/formatTimeSlotReservation';
import patientsMock from '../../../../app/utils/patientsMock.json';

export function Table() {
  return (
    <div className='rounded-xl border-spectra-500 border-y-[1.5px]'>
      <div className='flex w-full items-center bg-indian-khaki-300 py-3 pr-2.5 rounded-t-xl'>
        <button className='mx-2'>
          <CheckboxIcon className='w-6' />
        </button>
        <div className='flex w-full items-center justify-between space-x-2 py-2'>
          <div className='flex items-center w-1/3'>
            <strong>Nome</strong>
            <ArrowDownIcon />
          </div>
          <div className='flex items-center w-1/3'>
            <div className='flex flex-1 items-center space-x-1 min-w-[110px]'>
              <strong>Tratamento</strong>
              <ArrowDownIcon />
            </div>
            <div className='flex flex-1 items-center space-x-1'>
              <strong>Horário</strong>
              <ArrowDownIcon />
            </div>
            <div className='flex flex-1 items-center space-x-1 min-w-[100px]'>
              <strong>Status</strong>
              <ArrowDownIcon />
            </div>
          </div>
          <div className='text-center w-1/3'>
            <strong>Alterar status</strong>
          </div>
        </div>
      </div>
      <ScrollArea.Root className="h-[500px] rounded-b-xl overflow-hidden bg-white">
        <ScrollArea.Viewport className="w-full h-full">
          {patientsMock.map(patient => (
            <div key={patient.id} className='bg-indian-khaki-100 odd:bg-indian-khaki-200 flex w-full items-center pr-2'>
              <button className='mx-2'>
                <CheckboxIcon className='w-6' />
              </button>
              <div className='flex flex-1 items-center justify-between space-x-2 whitespace-nowrap'>
                <p className='overflow-auto py-2 w-1/3'>{patient.name}</p>
                <div className='flex justify-between py-2 w-1/3'>
                  <p className='w-1/3 min-w-[110px]'>{patient.cid}</p>
                  <p className='w-1/3'>
                    {patient.timeSlotReservation.map(reservation =>
                      formateTimeSlotReservation(new Date(reservation.date))
                    )}
                  </p>
                  <p className='min-w-[100px] w-1/3'>
                    {patient.timeSlotReservation.map(reservation => reservation.status)}
                  </p>
                </div>
                <div className='flex items-center justify-center py-2 space-x-1 w-1/3 text-white font-bold text-sm'>
                  <button className='flex items-center justify-center bg-spectra-600/95 border rounded-md min-w-[80px] py-[1px] px-1'>
                    <CheckIcon className='w-3 mr-1' />
                      Confirmar
                  </button>
                  <button className='flex items-center justify-center bg-indian-khaki-500 border rounded-md min-w-[80px] py-[1px] px-1'>
                    <ResetIcon className='w-3 mr-1' />
                      Reagendar
                  </button>
                  <button className='flex items-center justify-center bg-red-500/95 border rounded-md min-w-[80px] py-[1px] px-1'>
                    <Cross1Icon className='w-3 mr-1' />
                      Cancelar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-indian-khaki-500 transition-colors duration-[160ms] ease-out hover:bg-indian-khaki-500/80 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-indian-khaki-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-indian-khaki-500/60 transition-colors duration-[160ms] ease-out hover:bg-indian-khaki-500 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 bg-indian-khaki-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-indian-khaki-600" />
      </ScrollArea.Root>
    </div>
  );
}
