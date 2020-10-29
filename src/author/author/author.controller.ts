import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BooksService} from "../../books/books/books.service";
import {Book} from "../../books/books/books.entity";
import {AuthorService} from "./author.service";
import {Author} from "./author.entity";

@Controller('authors')
export class AuthorController {
    constructor(private authorService:AuthorService) {}

    @Get()
    Index(): Promise<Author[]>{
        return this.authorService.findAll()
    }
    @Post('create')
    async create(@Body() authorData: any): Promise<any> {
        console.log(authorData)
        return this.authorService.create(authorData);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() authorData: Author): Promise<any> {
        authorData.id = Number(id);
        console.log('Update #' + authorData.id);
        return this.authorService.update(authorData);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.authorService.delete(id);
    }
}
