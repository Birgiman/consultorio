import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 9)
  cep: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsString()
  others: string;
}
