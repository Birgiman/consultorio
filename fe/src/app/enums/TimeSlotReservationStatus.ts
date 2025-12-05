export enum TimeSlotReservationStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
}

export const timeSlotReservationStatusLabels = {
  [TimeSlotReservationStatus.SCHEDULED]: 'Agendada',
  [TimeSlotReservationStatus.CONFIRMED]: 'Confirmada',
  [TimeSlotReservationStatus.CANCELED]: 'Cancelada',
  [TimeSlotReservationStatus.COMPLETED]: 'Concluída',
};
