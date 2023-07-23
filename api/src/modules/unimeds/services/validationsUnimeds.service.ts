import { BadRequestException, Injectable } from '@nestjs/common';
import { UnimedsRepository } from 'src/shared/database/repositories/unimeds.repositories';

@Injectable()
export class ValidationsUnimeds {
  constructor(private readonly unimedsRepo: UnimedsRepository) {}

  async client(id: string, message: string) {
    const data = await this.unimedsRepo.findFirst({
      where: { clientId: id },
      select: { clientId: true },
    });
    if (!data) {
      throw new BadRequestException(message);
    }
  }

  async unimed(id: string) {
    const data = await this.unimedsRepo.findFirst({
      where: { id },
      select: { id: true },
    });

    return !!data;
  }
}
