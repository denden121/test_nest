import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Book} from "./books.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository:Repository<Book>
    ) {}
    async findAll():Promise<Book[]>{
        return  await this.bookRepository.find();
    }
    async create(book:Book):Promise<Book>{
        return  await this.bookRepository.save(book);
    }
    async update(book:Book):Promise<UpdateResult>{
        return  await this.bookRepository.update(book.id,book);
    }
    async delete(id):Promise<DeleteResult>{
        return  await this.bookRepository.delete(id);
    }
}
