import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MateriaEntity } from '../database/entitites/materia.entity';

@Injectable()
export class MateriasService {

    constructor(
        @InjectRepository(MateriaEntity)
        private materiasRepository: Repository<MateriaEntity>,
    ) {

    }

    async findAll(): Promise<MateriaEntity[]> {
        return await this.materiasRepository.find();
    }

}
