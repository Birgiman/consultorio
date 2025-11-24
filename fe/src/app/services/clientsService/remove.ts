import { httpClient } from '../httpClient';

export interface RemoveClientParams {
  id: string;
}

export async function remove({ id }: RemoveClientParams) {
  await httpClient.delete(`/clients/${id}`);
}
