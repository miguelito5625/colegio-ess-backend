import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaEntity } from '../database/entitites/materia.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      MateriaEntity
    ]),
  ],
  providers: [MateriasService],
  controllers: [MateriasController]
})
export class MateriasModule {}
