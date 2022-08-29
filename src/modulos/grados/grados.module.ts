import { Module } from '@nestjs/common';
import { GradosService } from './grados.service';
import { GradosController } from './grados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradoEntity } from '../database/entitites/grado.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      GradoEntity
    ])
  ],
  providers: [GradosService],
  controllers: [GradosController]
})
export class GradosModule {}
