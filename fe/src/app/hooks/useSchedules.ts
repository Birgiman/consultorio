import { useQuery } from '@tanstack/react-query';
import { QUERY_STALE_TIMES } from '../config/queryConfig';
import { scheduleService } from '../services/scheduleService';
import type { GetSchedulesParams } from '../services/scheduleService';

export function useSchedules(params?: GetSchedulesParams) {
  const { data: schedules = [], isLoading, error, refetch } = useQuery({
    queryKey: ['schedules', params],
    queryFn: () => scheduleService.getAll(params),
    staleTime: QUERY_STALE_TIMES.SCHEDULES,
  });

  return {
    schedules,
    isLoading,
    error,
    refetch,
  };
}
