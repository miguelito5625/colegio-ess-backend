import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GradoEntity } from '../database/entitites/grado.entity';

@Injectable()
export class GradosService {

    constructor(
        @InjectRepository(GradoEntity)
        private gradosRepository: Repository<GradoEntity>,
    ) {

    }

    async findAll(): Promise<GradoEntity[]> {
        return await this.gradosRepository.find();
    }
}
