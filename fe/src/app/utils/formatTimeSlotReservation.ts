export function formateTimeSlotReservation(date: Date) {
  const options = { hour: 'numeric', minute: 'numeric' } as Intl.DateTimeFormatOptions;
  return  Intl.DateTimeFormat('pt-br', options).format(date);
}
