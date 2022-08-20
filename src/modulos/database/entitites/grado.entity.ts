// import { CreateClientDto } from "src/modules/clients/create-client.dto";
import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity} from "typeorm";

@Entity('grados')
export class GradoEntity extends BaseEntity {

    //generate and fill addressentity instance
    // generate(createClientDto: CreateClientDto){
    //     this.country = createClientDto.country;
    //     this.departament = createClientDto.departament;
    //     this.municipality = createClientDto.municipality;
    //     this.street = createClientDto.street;
    //     this.reference = createClientDto.reference;
    //     this.zip_code = createClientDto.zip_code;
    // }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    // @Column({ default: true })
    // isActive?: boolean;

    // @CreateDateColumn({type: "timestamp"})
    // createdAt?: Date;

    // @UpdateDateColumn({type: "timestamp"})
    // updatedAt?: Date;
}