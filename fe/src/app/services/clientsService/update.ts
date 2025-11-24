import { httpClient } from '../httpClient';
import { Client } from './getAll';

export interface UpdateClientParams {
  id: string;
  name?: string;
  cpf?: string;
  email?: string;
  birthDate?: string;
  localBirth?: string;
  cid?: string;
  phoneNumber?: string;
  acupunCode?: string;
}

export async function update({ id, ...params }: UpdateClientParams) {
  const { data } = await httpClient.put<Client>(`/clients/${id}`, params);

  return data;
}
