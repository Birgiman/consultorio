import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { hash } from 'bcryptjs';
import { AccountsRepository } from 'src/shared/database/repositories/accounts.repositories';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly accountsRepo: AccountsRepository) {}

  getAccountById(accountId: string) {
    return this.accountsRepo.findUnique({
      where: { id: accountId },
      select: {
        name: true,
        email: true,
      },
    });
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    const { name, email, password } = updateAccountDto;

    const emailTaken = await this.accountsRepo.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const hashedPassword = await hash(password, 12);

    await this.accountsRepo.update({
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
      await this.accountsRepo.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException('Account not found.');
    }
    return null;
  }
}
