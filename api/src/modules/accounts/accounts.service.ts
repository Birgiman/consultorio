import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { hash } from 'bcryptjs';
import { PrismaService } from '../../database/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAccountDto: CreateAccountDto) {
    const { name, email, password } = createAccountDto;

    const emailTaken = await this.prismaService.account.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const hashedPassword = await hash(password, 12);

    const account = await this.prismaService.account.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      name: account.name,
      email: account.email,
    };
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    const { name, email, password } = updateAccountDto;

    const emailTaken = await this.prismaService.account.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const hashedPassword = await hash(password, 12);

    await this.prismaService.account.update({
      where: { id },
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      message: `The client ${name} has been updated.`,
      name: name,
    };
  }

  async remove(id: string) {
    try {
      await this.prismaService.account.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException('Account not found.');
    }
    return null;
  }
}
