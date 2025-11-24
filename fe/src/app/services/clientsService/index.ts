import { getAll } from './getAll';
import { create } from './create';
import { update } from './update';
import { remove } from './remove';

export const clientsService = {
  getAll,
  create,
  update,
  remove,
};

export type { Client } from './getAll';
export type { CreateClientParams } from './create';
export type { UpdateClientParams } from './update';
export type { RemoveClientParams } from './remove';
