import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({ example: 1925 })
  @IsNotEmpty()
  @IsNumber()
  year: number;
}