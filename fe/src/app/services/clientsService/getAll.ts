import { httpClient } from '../httpClient';

export interface Client {
  id: string;
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  localBirth: string;
  cid: string;
  phoneNumber: string;
  acupunCode: string;
}

export async function getAll() {
  const { data } = await httpClient.get<Client[]>('/clients');

  return data;
}
