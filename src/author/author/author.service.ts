import { Injectable } from '@nestjs/common';
import {Author} from "./author.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Book} from "../../books/books/books.entity";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private authorRepository:Repository<Author>
    ) {}
    async findd(a:number):Promise<Author>{
        return await this.authorRepository.findOne(a);
    }
    async findAll():Promise<Author[]>{
        return  await this.authorRepository.find();
    }
    async create(author:Author):Promise<Author>{
        return  await this.authorRepository.save(author);
    }
    async update(author:Author):Promise<UpdateResult>{
        return  await this.authorRepository.update(author.id,author);
    }
    async delete(id):Promise<DeleteResult>{
        return  await this.authorRepository.delete(id);
    }
}
