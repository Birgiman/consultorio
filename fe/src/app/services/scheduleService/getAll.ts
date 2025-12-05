import { httpClient } from '../httpClient';

export interface TimeSlotReservation {
  id: string;
  clientId: string;
  date: string;
  status: 'SCHEDULED' | 'CONFIRMED' | 'CANCELED' | 'COMPLETED';
  period: 'MORNING' | 'AFTERNOON' | 'EVENING';
}

export interface GetSchedulesParams {
  clientId?: string;
  status?: 'SCHEDULED' | 'CONFIRMED' | 'CANCELED' | 'COMPLETED';
  period?: 'MORNING' | 'AFTERNOON' | 'EVENING';
}

export async function getAll(params?: GetSchedulesParams) {
  const { data } = await httpClient.get<TimeSlotReservation[]>(
    '/time-slot-reservation',
    { params }
  );

  return data;
}
