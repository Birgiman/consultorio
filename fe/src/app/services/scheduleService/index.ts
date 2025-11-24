import { confirmSchedule } from './confirmSchedule';
import { cancelSchedule } from './cancelSchedule';
import { rescheduleSchedule } from './rescheduleSchedule';

export const scheduleService = {
  confirm: confirmSchedule,
  cancel: cancelSchedule,
  reschedule: rescheduleSchedule,
};
