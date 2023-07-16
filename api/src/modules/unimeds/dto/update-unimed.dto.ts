import { PartialType } from '@nestjs/mapped-types';
import { CreateUnimedDto } from './create-unimed.dto';

export class UpdateUnimedDto extends PartialType(CreateUnimedDto) {}
