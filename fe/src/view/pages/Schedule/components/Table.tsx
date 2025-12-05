import { ArrowDownIcon, CheckIcon, CheckboxIcon, Cross1Icon, ResetIcon } from '@radix-ui/react-icons';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useState } from 'react';
import 'swiper/css';
import { useScheduleActions } from '../../../../app/hooks/useScheduleActions';
import { useSchedulesWithClients } from '../../../../app/hooks/useSchedulesWithClients';
import { timeSlotReservationStatusLabels } from '../../../../app/enums/TimeSlotReservationStatus';
import { formateTimeSlotReservation } from '../../../../app/utils/formatTimeSlotReservation';
import { DatePickerInput } from '../../../components/DatePickerInput';
import { WeekNavigation } from './WeekNavigation';

export function Table() {
  const { confirmSchedule, cancelSchedule } = useScheduleActions();
  const { schedulesWithClients, isLoading, error } = useSchedulesWithClients();
  const [loadingScheduleId, setLoadingScheduleId] = useState<string | null>(null);

  async function handleConfirm(scheduleId: string) {
    try {
      setLoadingScheduleId(scheduleId);
      await confirmSchedule({ scheduleId });
    } finally {
      setLoadingScheduleId(null);
    }
  }

  async function handleCancel(scheduleId: string) {
    const confirmed = window.confirm('Tem certeza que deseja cancelar este agendamento?');

    if (!confirmed) return;

    try {
      setLoadingScheduleId(scheduleId);
      await cancelSchedule({ scheduleId });
    } finally {
      setLoadingScheduleId(null);
    }
  }

  function handleReschedule(scheduleId: string) {
    // TODO: Implementar modal de reagendamento
    alert(`Reagendar agendamento: ${scheduleId}\n\nFuncionalidade será implementada em breve.`);
  }

  if (isLoading) {
    return (
      <>
        <div className='flex mb-2'>
          <div className='w-[248px]'>
            <div className='relative'>
              <WeekNavigation />
            </div>
          </div>
          <DatePickerInput />
        </div>
        <div className='flex items-center justify-center h-[460px] laptop:h-[610px] rounded-xl border-spectra-500 border-y-[1.5px]'>
          <p className='text-gray-500'>Carregando agendamentos...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className='flex mb-2'>
          <div className='w-[248px]'>
            <div className='relative'>
              <WeekNavigation />
            </div>
          </div>
          <DatePickerInput />
        </div>
        <div className='flex items-center justify-center h-[460px] laptop:h-[610px] rounded-xl border-spectra-500 border-y-[1.5px]'>
          <p className='text-red-500'>Erro ao carregar agendamentos. Tente novamente.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='flex mb-2'>
        <div className='w-[248px]'>
          <div className='relative'>
            <WeekNavigation />
          </div>
        </div>
        <DatePickerInput />

      </div>
      <div className='w-[200px ]'>

      </div>
      <div className='rounded-xl border-spectra-500 border-y-[1.5px] '>
        <div className='flex w-full items-center bg-indian-khaki-300 py-3 pr-2.5 rounded-t-xl border-b-[0.5px] border-spectra-500'>
          <button className='mx-2'>
            <CheckboxIcon className='w-6' />
          </button>
          <div className='flex w-full items-center justify-between space-x-2 py-2 text-lg'>
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
            <div className='text-center w-1/3 invisible'>
              <strong>Alterar status</strong>
            </div>
          </div>
        </div>
        <ScrollArea.Root className="h-[460px] laptop:h-[610px] rounded-b-xl overflow-hidden bg-white">
          <ScrollArea.Viewport className="w-full h-full">
            {schedulesWithClients.length === 0 ? (
              <div className='flex items-center justify-center h-full'>
                <p className='text-gray-500'>Nenhum agendamento encontrado.</p>
              </div>
            ) : (
              schedulesWithClients.map(schedule => (
                <div key={schedule.id} className='flex w-full items-center justify-center bg-indian-khaki-100 odd:bg-indian-khaki-200 mb-[5px] py-2 pr-2 shadow-md shadow-indian-khaki-400 hover:bg-indian-khaki-300 rounded-sm transition-all ease-in'>
                  <div className='flex items-center justify-center'>
                    <button className='mx-2'>
                      <CheckboxIcon className='w-6' />
                    </button>
                  </div>
                  <div className='flex flex-1 items-center justify-center space-x-2 whitespace-nowrap group/item'>
                    <p className='overflow-auto w-1/3 tracking-tight'>{schedule.client.name}</p>
                    <div className='flex justify-between w-1/3'>
                      <p className='w-1/3 min-w-[110px]'>{schedule.client.cid}</p>
                      <p className='w-1/3'>
                        {formateTimeSlotReservation(new Date(schedule.date))}
                      </p>
                      <p className='min-w-[100px] w-1/3'>
                        {timeSlotReservationStatusLabels[schedule.status]}
                      </p>
                    </div>
                    <div className='flex items-center justify-center space-x-1 w-1/3 text-white font-bold text-sm invisible group-hover/item:visible transition-all ease-in'>
                      <button
                        className='flex items-center justify-center bg-spectra-600/95 border rounded-md w-[100px] py-[1px] px-1 tracking-tight shadow-md shadow-indian-khaki-500 hover:bg-spectra-700 active:bg-spectra-500 transition-all ease-in disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={() => handleConfirm(schedule.id)}
                        disabled={loadingScheduleId === schedule.id}
                      >
                        <CheckIcon className='w-3 mr-1' />
                        {loadingScheduleId === schedule.id ? 'Aguarde...' : 'Confirmar'}
                      </button>
                      <button
                        className='flex items-center justify-center bg-indian-khaki-500 border rounded-md w-[100px] py-[1px] px-1 tracking-tight shadow-md shadow-indian-khaki-500 hover:bg-indian-khaki-700 active:bg-indian-khaki-400 transition-all ease-in disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={() => handleReschedule(schedule.id)}
                        disabled={loadingScheduleId === schedule.id}
                      >
                        <ResetIcon className='w-3 mr-1' />
                        Reagendar
                      </button>
                      <button
                        className='flex items-center justify-center bg-red-500/95 border rounded-md w-[100px] py-[1px] px-1 tracking-tight shadow-md shadow-indian-khaki-500 hover:bg-red-700 active:bg-red-400 transition-all ease-in disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={() => handleCancel(schedule.id)}
                        disabled={loadingScheduleId === schedule.id}
                      >
                        <Cross1Icon className='w-3 mr-1' />
                        {loadingScheduleId === schedule.id ? 'Aguarde...' : 'Cancelar'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
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
    </>
  );
}
