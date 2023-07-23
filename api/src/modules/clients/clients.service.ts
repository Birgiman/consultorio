import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { ClientsReposiory } from 'src/shared/database/repositories/clients.repositories';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepo: ClientsReposiory) {}

  async create(createClientDto: CreateClientDto) {
    const {
      name,
      cpf,
      email,
      birthDate,
      localBirth,
      cid,
      phoneNumber,
      acupunCode,
    } = createClientDto;

    const emailTaken = await this.clientsRepo.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const cpfTaken = await this.clientsRepo.findUnique({
      where: { cpf },
      select: { id: true },
    });

    if (cpfTaken) {
      throw new ConflictException('This CPF is already in use.');
    }

    await this.clientsRepo.create({
      data: {
        name,
        cpf,
        email,
        birthDate,
        localBirth,
        cid,
        phoneNumber,
        acupunCode,
      },
    });

    return {
      message: `The client ${name} has been created.`,
      name: name,
    };
  }

  async findAll() {
    const allClients = await this.clientsRepo.findMany();

    return allClients;
  }

  async findOne(id: string) {
    const client = await this.clientsRepo.findUnique({
      where: { id },
      include: { address: true, unimed: true, time_slot_reservation: true },
    });

    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const {
      name,
      cpf,
      email,
      birthDate,
      localBirth,
      cid,
      phoneNumber,
      acupunCode,
    } = updateClientDto;

    const getOldEmail = await this.clientsRepo.findUnique({
      where: { id },
      select: { email: true },
    });

    if (getOldEmail.email === email) {
      throw new ConflictException('This email is the same.');
    }

    const emailTaken = await this.clientsRepo.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const getOldCPF = await this.clientsRepo.findUnique({
      where: { id },
      select: { cpf: true },
    });

    if (getOldCPF.cpf === cpf) {
      throw new ConflictException('This CPF is the same.');
    }

    const cpfTaken = await this.clientsRepo.findUnique({
      where: { cpf },
      select: { id: true },
    });

    if (cpfTaken) {
      throw new ConflictException('This CPF is already in use.');
    }

    await this.clientsRepo.update({
      where: { id },
      data: {
        name,
        cpf,
        email,
        birthDate,
        localBirth,
        cid,
        phoneNumber,
        acupunCode,
      },
    });

    return {
      message: `The client ${name} has been updated.`,
      name: name,
    };
  }

  async remove(id: string) {
    try {
      await this.clientsRepo.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException('Account not found.');
    }

    return null;
  }
}
