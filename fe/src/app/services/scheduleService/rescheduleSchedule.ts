import { httpClient } from '../httpClient';

interface RescheduleScheduleParams {
  scheduleId: string;
  newDate: string;
}

interface RescheduleScheduleResponse {
  id: string;
  status: string;
  date: string;
  clientId: string;
}

export async function rescheduleSchedule({ scheduleId, newDate }: RescheduleScheduleParams) {
  const { data } = await httpClient.patch<RescheduleScheduleResponse>(
    `/time-slot-reservation/${scheduleId}`,
    { date: newDate }
  );

  return data;
}
