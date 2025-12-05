import { confirmSchedule } from './confirmSchedule';
import { cancelSchedule } from './cancelSchedule';
import { rescheduleSchedule } from './rescheduleSchedule';
import { getAll } from './getAll';

export const scheduleService = {
  confirm: confirmSchedule,
  cancel: cancelSchedule,
  reschedule: rescheduleSchedule,
  getAll,
};

export type { TimeSlotReservation, GetSchedulesParams } from './getAll';
