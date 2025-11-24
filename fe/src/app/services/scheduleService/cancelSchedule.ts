import { httpClient } from '../httpClient';

interface CancelScheduleParams {
  scheduleId: string;
}

export async function cancelSchedule({ scheduleId }: CancelScheduleParams) {
  await httpClient.delete(`/time-slot-reservation/${scheduleId}`);
}
