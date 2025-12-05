import { useMemo } from 'react';
import { useClients } from './useClients';
import { useSchedules } from './useSchedules';
import { combineSchedulesWithClients } from '../utils/scheduleHelpers';
import type { GetSchedulesParams } from '../services/scheduleService';

export function useSchedulesWithClients(params?: GetSchedulesParams) {
  const { clients, isLoading: isLoadingClients, error: clientsError } = useClients();
  const { schedules, isLoading: isLoadingSchedules, error: schedulesError } = useSchedules(params);

  const schedulesWithClients = useMemo(() => {
    if (clients.length === 0 || schedules.length === 0) {
      return [];
    }

    try {
      return combineSchedulesWithClients(schedules, clients);
    } catch (error) {
      console.error('Erro ao combinar agendamentos com clientes:', error);
      return [];
    }
  }, [schedules, clients]);

  return {
    schedulesWithClients,
    isLoading: isLoadingClients || isLoadingSchedules,
    error: clientsError || schedulesError,
  };
}
