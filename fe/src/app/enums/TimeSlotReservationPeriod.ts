export enum TimeSlotReservationPeriod {
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  EVENING = 'EVENING',
}

export const timeSlotReservationPeriodLabels = {
  [TimeSlotReservationPeriod.MORNING]: 'Manhã',
  [TimeSlotReservationPeriod.AFTERNOON]: 'Tarde',
  [TimeSlotReservationPeriod.EVENING]: 'Noite',
};
