import { BadRequestException, Injectable } from '@nestjs/common';
import { UnimedsRepository } from 'src/shared/database/repositories/unimeds.repositories';
import { CreateUnimedDto } from './dto/create-unimed.dto';
import { UpdateUnimedDto } from './dto/update-unimed.dto';
import { UnimedType } from './entities/UnimedEntities';

@Injectable()
export class UnimedsService {
  constructor(private readonly unimedsRepo: UnimedsRepository) {}

  async create(createUnimedDto: CreateUnimedDto) {
    const { clientId, name, icon, type } = createUnimedDto;

    const haveUnimed = await this.unimedsRepo.findFirst({
      where: { clientId },
    });

    if (haveUnimed) {
      throw new BadRequestException('You already have a Unimed.');
    }

    const unimed = await this.unimedsRepo.create({
      data: {
        clientId,
        name,
        icon,
        type,
      },
    });

    return unimed;
  }

  async findUnimedsBy(filters: { type: UnimedType }) {
    return await this.unimedsRepo.findUnimedsBy({
      where: { type: filters.type },
    });
  }

  async update(id: string, updateUnimedDto: UpdateUnimedDto) {
    const { clientId, icon, name, type } = updateUnimedDto;

    const clientExists = await this.unimedsRepo.findFirst({
      where: { clientId },
    });

    if (!clientExists) {
      throw new BadRequestException('Client not found.');
    }

    const unimedExists = await this.unimedsRepo.findUnique({
      where: { id },
    });

    if (!unimedExists) {
      throw new BadRequestException('Unimed not found!');
    }

    const unimedUpdated = await this.unimedsRepo.update({
      where: { id },
      data: {
        clientId,
        icon,
        name,
        type,
      },
    });

    return unimedUpdated;
  }

  async remove(id: string) {
    return await this.unimedsRepo.delete({
      where: { id },
    });
  }
}
