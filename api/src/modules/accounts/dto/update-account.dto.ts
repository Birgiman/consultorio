import { PartialType } from '@nestjs/mapped-types';
import { SignupDto } from '../../auth/dto/signup';

export class UpdateAccountDto extends PartialType(SignupDto) {}
