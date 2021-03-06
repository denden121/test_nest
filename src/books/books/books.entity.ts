import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Author} from "../../author/author/author.entity";

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(()=>Author,author => author.id)
    author: Author;

    @Column()
    description: string;


}
