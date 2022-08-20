import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";

@Entity('materias')
export class MateriaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

}