import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Book} from "./books.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Author} from "../../author/author/author.entity";
import {AuthorService} from "../../author/author/author.service";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository:Repository<Book>,
        private authorServer:AuthorService
    ) {}
    async findAll():Promise<Book[]>{
        return  await this.bookRepository.find();
    }
    async create(book:Book):Promise<any>{
        console.log(book)
        let a:number = Number(book.author)
        return await this.authorServer.findd(a)
        // console.log(temp)
        // return book
        // return  await this.bookRepository.save(book);
    }
    async update(book:Book):Promise<UpdateResult>{
        return  await this.bookRepository.update(book.id,book);
    }
    async delete(id):Promise<DeleteResult>{
        return  await this.bookRepository.delete(id);
    }
}
