import { BadRequestException, Injectable } from '@nestjs/common';
import { UnimedsRepository } from 'src/shared/database/repositories/unimeds.repositories';
import { CreateUnimedDto } from '../dto/create-unimed.dto';
import { UpdateUnimedDto } from '../dto/update-unimed.dto';
import { UnimedType } from '../entities/UnimedEntities';
import { ValidationsUnimeds } from './validationsUnimeds.service';

@Injectable()
export class UnimedsService {
  constructor(
    private readonly unimedsRepo: UnimedsRepository,
    private readonly validationUnimeds: ValidationsUnimeds,
  ) {}

  async create(createUnimedDto: CreateUnimedDto) {
    const { clientId, name, icon, type } = createUnimedDto;

    const unimedExists = await this.validationUnimeds.unimed(clientId);

    if (unimedExists) {
      throw new BadRequestException('Client already have a Unimed.');
    }

    return await this.unimedsRepo.create({
      data: {
        clientId,
        name,
        icon,
        type,
      },
    });
  }

  async findUnimedsBy(filters: { type: UnimedType }) {
    return await this.unimedsRepo.findUnimedsBy({
      where: { type: filters.type },
    });
  }

  async update(id: string, updateUnimedDto: UpdateUnimedDto) {
    const unimedExists = await this.validationUnimeds.unimed(id);

    if (!unimedExists) {
      throw new BadRequestException('Unimed not found.');
    }

    const { clientId, icon, name, type } = updateUnimedDto;

    await this.validationUnimeds.client(clientId, 'Client not found.');

    return await this.unimedsRepo.update({
      where: { id },
      data: {
        clientId,
        icon,
        name,
        type,
      },
    });
  }

  async remove(id: string) {
    const unimedExists = await this.validationUnimeds.unimed(id);

    if (!unimedExists) {
      throw new BadRequestException('Unimed not found.');
    }

    await this.unimedsRepo.delete({
      where: { id },
    });

    return null;
  }
}
