import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { Response } from "express";


@Controller('materias')
export class MateriasController {
    constructor(
        private readonly servicioMaterias: MateriasService
    ) {

    }

    @Get()
    async listarGrados(@Res() res: Response) {
        const materias = await this.servicioMaterias.findAll();
        return res.status(HttpStatus.OK).json({
            message: 'Materias listados',
            status: 'ok',
            cantidad_materias: materias.length,
            materias
        });
    }
}
