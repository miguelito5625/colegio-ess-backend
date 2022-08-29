import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradosModule } from './modulos/grados/grados.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modulos/database/database.module';
import { MateriasModule } from './modulos/materias/materias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradoEntity } from './modulos/database/entitites/grado.entity';
import { MateriaEntity } from './modulos/database/entitites/materia.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GradosModule,
    MateriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
