import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity} from "typeorm";

@Entity('materias')
export class MateriaEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

}