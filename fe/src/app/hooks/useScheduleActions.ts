import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { scheduleService } from '../services/scheduleService';

export function useScheduleActions() {
  const queryClient = useQueryClient();

  const { mutateAsync: confirmSchedule, isLoading: isConfirming } = useMutation({
    mutationFn: scheduleService.confirm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
      toast.success('Agendamento confirmado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao confirmar agendamento. Tente novamente.');
    },
  });

  const { mutateAsync: cancelSchedule, isLoading: isCanceling } = useMutation({
    mutationFn: scheduleService.cancel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
      toast.success('Agendamento cancelado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao cancelar agendamento. Tente novamente.');
    },
  });

  const { mutateAsync: rescheduleSchedule, isLoading: isRescheduling } = useMutation({
    mutationFn: scheduleService.reschedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
      toast.success('Agendamento reagendado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao reagendar. Tente novamente.');
    },
  });

  return {
    confirmSchedule,
    cancelSchedule,
    rescheduleSchedule,
    isConfirming,
    isCanceling,
    isRescheduling,
  };
}
