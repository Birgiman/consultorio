import { CheckIcon, Cross1Icon, ResetIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useNextSchedule } from '../../app/hooks/useNextSchedule';
import { useScheduleActions } from '../../app/hooks/useScheduleActions';
import { formateTimeSlotReservation } from '../../app/utils/formatTimeSlotReservation';
import { getTimeUntilSchedule } from '../../app/utils/scheduleHelpers';
import { timeSlotReservationStatusLabels } from '../../app/enums/TimeSlotReservationStatus';

export function NextScheduleCard() {
  const { nextSchedule, isLoading, error } = useNextSchedule();
  const { confirmSchedule, cancelSchedule } = useScheduleActions();
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  async function handleConfirm() {
    if (!nextSchedule) return;

    try {
      setLoadingAction('confirm');
      await confirmSchedule({ scheduleId: nextSchedule.id });
    } finally {
      setLoadingAction(null);
    }
  }

  async function handleCancel() {
    if (!nextSchedule) return;

    const confirmed = window.confirm('Tem certeza que deseja cancelar este agendamento?');
    if (!confirmed) return;

    try {
      setLoadingAction('cancel');
      await cancelSchedule({ scheduleId: nextSchedule.id });
    } finally {
      setLoadingAction(null);
    }
  }

  function handleReschedule() {
    alert('Funcionalidade será implementada em breve.');
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-indian-khaki-200 rounded-xl border-[1.5px] border-indian-khaki-700'>
        <p className='text-indian-khaki-900'>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-indian-khaki-200 rounded-xl border-[1.5px] border-indian-khaki-700'>
        <p className='text-red-500'>Erro ao carregar próxima consulta.</p>
      </div>
    );
  }

  if (!nextSchedule) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-indian-khaki-200 rounded-xl border-[1.5px] border-indian-khaki-700'>
        <p className='text-gray-500'>Nenhuma consulta agendada.</p>
      </div>
    );
  }

  return (
    <div className='w-full h-full'>
      <header className='flex flex-col items-center justify-center w-full h-1/5 bg-indian-khaki-200 rounded-t-xl border-t-[4px] rounded-x-sm border-x-[1.5px] border-indian-khaki-700 text-2xl tracking-tighter text-indian-khaki-900 font-bold '>
        <h1>Próxima consulta em</h1>
        <p>{getTimeUntilSchedule(nextSchedule.date)}</p>
      </header>
      <div className='px-3 flex flex-col justify-center w-full h-3/5 text-xl text-indian-khaki-900 tracking-wide bg-indian-khaki-400 space-y-2 rounded-x-sm border-x-[1.5px] border-y-[0.5px] border-indian-khaki-700'>
        <div className='bg-indian-khaki-200 rounded-md px-2 py-1 shadow-md shadow-indian-khaki-700'>
          <p>{nextSchedule.client.name}</p>
        </div>
        <div className='bg-indian-khaki-200 rounded-md px-2 py-1 shadow-md shadow-indian-khaki-700'>
          <p>{timeSlotReservationStatusLabels[nextSchedule.status]}</p>
        </div>
        <div className='bg-indian-khaki-200 rounded-md px-2 py-1 shadow-md shadow-indian-khaki-700'>
          <p>{formateTimeSlotReservation(new Date(nextSchedule.date))}</p>
        </div>
      </div>
      <footer className='flex items-center w-full h-1/5 justify-center py-2 space-x-1 text-white font-bold text-sm bg-indian-khaki-500
            rounded-b-xl border-b-[4px] rounded-x-sm border-x-[1.5px] border-indian-khaki-700 group/item shadow-md shadow-indian-khaki-500'>
        <button
          onClick={handleConfirm}
          disabled={loadingAction !== null}
          className='flex items-center justify-center bg-spectra-600/95 border rounded-md min-[1366px]:min-w-[90px] max-[1367px]:min-w-[100px] py-[1px] px-1 shadow-md shadow-indian-khaki-700 tracking-tight  hover:bg-spectra-700 active:bg-spectra-500 transition-all ease-in disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <CheckIcon className='w-3 mr-1' />
          {loadingAction === 'confirm' ? 'Aguarde...' : 'Confirmar'}
        </button>
        <button
          onClick={handleReschedule}
          disabled={loadingAction !== null}
          className='flex items-center justify-center bg-indian-khaki-500 border rounded-md min-[1366px]:min-w-[90px] max-[1367px]:min-w-[100px] py-[1px] px-1 shadow-md shadow-indian-khaki-700 tracking-tight hover:bg-indian-khaki-700 active:bg-indian-khaki-400 transition-all ease-in disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <ResetIcon className='w-3 mr-1' />
          Reagendar
        </button>
        <button
          onClick={handleCancel}
          disabled={loadingAction !== null}
          className='flex items-center justify-center bg-red-500/95 border rounded-md min-[1366px]:min-w-[90px] max-[1367px]:min-w-[100px] py-[1px] px-1 shadow-md shadow-indian-khaki-700 tracking-tight hover:bg-red-700 active:bg-red-400 transition-all ease-in disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <Cross1Icon className='w-3 mr-1' />
          {loadingAction === 'cancel' ? 'Aguarde...' : 'Cancelar'}
        </button>
      </footer>
    </div>
  );
}
