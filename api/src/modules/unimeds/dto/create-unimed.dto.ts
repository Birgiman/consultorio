import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UnimedType } from '../entities/UnimedEntities';

export class CreateUnimedDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsEnum(UnimedType)
  @IsNotEmpty()
  type: UnimedType;
}
