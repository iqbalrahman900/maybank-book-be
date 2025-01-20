import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { BooksService } from './books.service';
  import { CreateBookDto } from './dto/create-book.dto';
  import { UpdateBookDto } from './dto/update-book.dto';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  
  @ApiTags('books')
  @Controller('books')
  export class BooksController {
    constructor(private readonly booksService: BooksService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new book' })
    @ApiResponse({ status: 201, description: 'The book has been created.' })
    create(@Body() createBookDto: CreateBookDto) {
      return this.booksService.create(createBookDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all books' })
    @ApiResponse({ status: 200, description: 'Return all books.' })
    findAll() {
      return this.booksService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a book by id' })
    @ApiResponse({ status: 200, description: 'Return a book.' })
    findOne(@Param('id') id: string) {
      return this.booksService.findOne(id);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Update a book' })
    @ApiResponse({ status: 200, description: 'The book has been updated.' })
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
      return this.booksService.update(id, updateBookDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a book' })
    @ApiResponse({ status: 200, description: 'The book has been deleted.' })
    remove(@Param('id') id: string) {
      return this.booksService.remove(id);
    }
  }