import { httpClient } from '../httpClient';

interface ConfirmScheduleParams {
  scheduleId: string;
}

interface ConfirmScheduleResponse {
  id: string;
  status: string;
  date: string;
  clientId: string;
}

export async function confirmSchedule({ scheduleId }: ConfirmScheduleParams) {
  const { data } = await httpClient.patch<ConfirmScheduleResponse>(
    `/time-slot-reservation/${scheduleId}`,
    { status: 'CONFIRMED' }
  );

  return data;
}
