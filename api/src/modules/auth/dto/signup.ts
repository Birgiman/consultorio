import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { IsFullName } from 'src/shared/customClassValidators/IsFullName';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsFullName()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @IsAlphanumeric('pt-BR')
  password: string;
}
