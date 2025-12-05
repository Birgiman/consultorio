import { useQuery } from '@tanstack/react-query';
import { scheduleService } from '../services/scheduleService';
import type { GetSchedulesParams } from '../services/scheduleService';

export function useSchedules(params?: GetSchedulesParams) {
  const { data: schedules = [], isLoading, error, refetch } = useQuery({
    queryKey: ['schedules', params],
    queryFn: () => scheduleService.getAll(params),
    staleTime: 1000 * 60 * 2,
  });

  return {
    schedules,
    isLoading,
    error,
    refetch,
  };
}
