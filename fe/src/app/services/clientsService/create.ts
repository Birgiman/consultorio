import { httpClient } from '../httpClient';
import { Client } from './getAll';

export interface CreateClientParams {
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  localBirth: string;
  cid: string;
  phoneNumber: string;
  acupunCode: string;
}

export async function create(params: CreateClientParams) {
  const { data } = await httpClient.post<Client>('/clients', params);

  return data;
}
