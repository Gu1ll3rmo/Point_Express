import { PartialType } from '@nestjs/mapped-types';
import { CreateRecolectoreDto } from './create-recolectore.dto';

export class UpdateRecolectoreDto extends PartialType(CreateRecolectoreDto) {}
