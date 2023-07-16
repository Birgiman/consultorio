import { Injectable } from '@nestjs/common';
import { UnimedsRepository } from 'src/shared/database/repositories/unimeds.repositories';
import { CreateUnimedDto } from './dto/create-unimed.dto';
import { UpdateUnimedDto } from './dto/update-unimed.dto';
import { UnimedType } from './entities/UnimedEntities';

@Injectable()
export class UnimedsService {
  constructor(private readonly unimedsRepo: UnimedsRepository) {}

  async create(createUnimedDto: CreateUnimedDto) {
    const { clientId, name, icon, type } = createUnimedDto;

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

  async findAll() {
    const unimeds = await this.unimedsRepo.findMany();

    return unimeds;
  }

  async findByUnimedType(filter: { type: UnimedType }) {
    const clientsByUnimed = await this.unimedsRepo.findByUnimedId({
      where: { type: filter.type },
    });

    return clientsByUnimed;
  }

  async update(id: string, updateUnimedDto: UpdateUnimedDto) {
    const { clientId, icon, name, type } = updateUnimedDto;

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
