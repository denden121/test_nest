import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Book} from "./books.entity";
import {BooksService} from "./books.service";

@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService) {}

    @Get()
    Index(): Promise<Book[]>{
        return this.booksService.findAll()
    }
    @Post('create')
    async create(@Body() bookData: Book): Promise<any> {
        return this.booksService.create(bookData);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() bookData: Book): Promise<any> {
        bookData.id = Number(id);
        console.log('Update #' + bookData.id);
        return this.booksService.update(bookData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.booksService.delete(id);
    }
}
