import { Module } from '@nestjs/common';
import { AuthorService } from './author/author.service';
import { AuthorController } from './author/author.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "../books/books/books.entity";
import {Author} from "./author/author.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
