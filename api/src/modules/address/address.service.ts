import { BadRequestException, Injectable } from '@nestjs/common';
import { AddressRepository } from 'src/shared/database/repositories/address.repositories';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepo: AddressRepository) {}

  async create(createAddressDto: CreateAddressDto) {
    const { clientId, cep, state, city, neighborhood, street, number, others } =
      createAddressDto;

    const newAddress = await this.addressRepo.create({
      data: {
        clientId,
        cep,
        state,
        city,
        neighborhood,
        street,
        number,
        others,
      },
    });

    return newAddress;
  }

  async findAll() {
    const allAddress = await this.addressRepo.findMany();

    return allAddress;
  }

  findAddressBy(filters: { cep: string; number: number }) {
    return this.addressRepo.findAddressBy({
      where: {
        cep: filters.cep,
        number: filters.number,
      },
    });
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const updatedAddress = await this.addressRepo.update({
      where: { id },
      data: {
        cep: updateAddressDto.cep,
        state: updateAddressDto.state,
        city: updateAddressDto.city,
        neighborhood: updateAddressDto.neighborhood,
        street: updateAddressDto.street,
        number: updateAddressDto.number,
        others: updateAddressDto.others,
      },
    });

    return updatedAddress;
  }

  async remove(id: string) {
    try {
      await this.addressRepo.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException('Address not found.');
    }

    return null;
  }
}
