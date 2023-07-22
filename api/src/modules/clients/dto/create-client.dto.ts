import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { IsFullName } from '../../../shared/customClassValidators/IsFullName';
import { ClientType } from '../entities/ClientEntities';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsFullName()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(14, 14)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDateString()
  @IsNotEmpty()
  birthDate: Date;

  @IsString()
  @IsNotEmpty()
  localBirth: string;

  @IsString()
  @IsNotEmpty()
  cid: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsEnum(ClientType)
  @IsNotEmpty()
  acupunCode: ClientType;
}
