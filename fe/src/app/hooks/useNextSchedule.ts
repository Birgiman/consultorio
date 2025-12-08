import { useMemo } from 'react';
import { TimeSlotReservationStatus } from '../enums/TimeSlotReservationStatus';
import { getNextSchedule } from '../utils/scheduleHelpers';
import { useSchedulesWithClients } from './useSchedulesWithClients';

export function useNextSchedule() {
  const { schedulesWithClients, isLoading, error } = useSchedulesWithClients({
    status: TimeSlotReservationStatus.SCHEDULED,
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
