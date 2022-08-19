import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradosModule } from './modulos/grados/grados.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modulos/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GradosModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
