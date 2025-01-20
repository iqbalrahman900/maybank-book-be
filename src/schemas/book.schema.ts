import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book {
  @ApiProperty({ example: 'The Great Gatsby', description: 'The title of the book' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ example: 'F. Scott Fitzgerald', description: 'The author of the book' })
  @Prop({ required: true })
  author: string;

  @ApiProperty({ example: 1925, description: 'Year of publication' })
  @Prop({ required: true })
  year: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);