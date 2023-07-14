import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly prismaService: PrismaService) {}

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

    const emailTaken = await this.prismaService.client.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const cpfTaken = await this.prismaService.client.findUnique({
      where: { cpf },
      select: { id: true },
    });

    if (cpfTaken) {
      throw new ConflictException('This CPF is already in use.');
    }

    await this.prismaService.client.create({
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
    const allClients = await this.prismaService.client.findMany();

    return allClients;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
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

    const emailTaken = await this.prismaService.client.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const getOldCPF = await this.prismaService.client.findUnique({
      where: { id },
      select: { cpf: true },
    });

    if (getOldCPF.cpf === cpf) {
      throw new ConflictException('This CPF is the same.');
    }

    const cpfTaken = await this.prismaService.client.findUnique({
      where: { cpf },
      select: { id: true },
    });

    if (cpfTaken) {
      throw new ConflictException('This CPF is already in use.');
    }

    await this.prismaService.client.update({
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
      await this.prismaService.client.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException('Account not found.');
    }

    return null;
  }
}
