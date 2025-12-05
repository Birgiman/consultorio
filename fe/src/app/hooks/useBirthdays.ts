import { useMemo } from 'react';
import { useClients } from './useClients';
import { getTodayBirthdays } from '../utils/scheduleHelpers';

export function useBirthdays() {
  const { clients, isLoading, error } = useClients();

  const birthdays = useMemo(() => {
    return getTodayBirthdays(clients);
  }, [clients]);

  return {
    birthdays,
    isLoading,
    error,
  };
}
