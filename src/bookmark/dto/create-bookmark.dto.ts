import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: true })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  link: string;
}
