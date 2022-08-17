import { Module } from '@nestjs/common';
import { GradosController } from './grados.controller';
import { GradosService } from './grados.service';

@Module({
  controllers: [GradosController],
  providers: [GradosService]
})
export class GradosModule {}
