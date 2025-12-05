import { useMemo } from 'react';
import { useSchedulesWithClients } from './useSchedulesWithClients';
import { getNextSchedule } from '../utils/scheduleHelpers';

export function useNextSchedule() {
  const { schedulesWithClients, isLoading, error } = useSchedulesWithClients({
    status: 'SCHEDULED',
  });

  const nextSchedule = useMemo(() => {
    return getNextSchedule(schedulesWithClients);
  }, [schedulesWithClients]);

  return {
    nextSchedule,
    isLoading,
    error,
  };
}
