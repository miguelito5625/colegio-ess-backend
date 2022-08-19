import { Module } from '@nestjs/common';
import { GradosService } from './grados.service';
import { GradosController } from './grados.controller';

@Module({
  providers: [GradosService],
  controllers: [GradosController]
})
export class GradosModule {}
