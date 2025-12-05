import { Client } from '../services/clientsService';
import { TimeSlotReservation } from '../services/scheduleService';

export interface ScheduleWithClient extends TimeSlotReservation {
  client: Client;
}

export function combineSchedulesWithClients(
  schedules: TimeSlotReservation[],
  clients: Client[]
): ScheduleWithClient[] {
  return schedules.map(schedule => {
    const client = clients.find(c => c.id === schedule.clientId);

    if (!client) {
      console.error(`Cliente não encontrado para o agendamento ${schedule.id}`);
      throw new Error(`Cliente não encontrado para o agendamento ${schedule.id}`);
    }

    return {
      ...schedule,
      client,
    };
  });
}

export function getNextSchedule(
  schedules: ScheduleWithClient[]
): ScheduleWithClient | null {
  const now = new Date();

  const upcomingSchedules = schedules
    .filter(s => s.status === 'SCHEDULED' || s.status === 'CONFIRMED')
    .filter(s => new Date(s.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcomingSchedules[0] || null;
}

export function getTimeUntilSchedule(scheduleDate: string): string {
  const now = new Date();
  const schedule = new Date(scheduleDate);
  const diffMs = schedule.getTime() - now.getTime();

  if (diffMs < 0) return 'Agendamento passado';

  const diffMinutes = Math.floor(diffMs / 1000 / 60);

  if (diffMinutes < 60) {
    return `${diffMinutes} minuto${diffMinutes !== 1 ? 's' : ''}`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  return `${diffHours} hora${diffHours !== 1 ? 's' : ''}`;
}

export interface BirthdayClient extends Client {
  age: number;
}

export function getTodayBirthdays(clients: Client[]): BirthdayClient[] {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  return clients
    .filter(client => {
      const birthDate = new Date(client.birthDate);
      return (
        birthDate.getMonth() === todayMonth &&
        birthDate.getDate() === todayDay
      );
    })
    .map(client => ({
      ...client,
      age: calculateAge(client.birthDate),
    }));
}

function calculateAge(birthDateStr: string): number {
  const birthDate = new Date(birthDateStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
