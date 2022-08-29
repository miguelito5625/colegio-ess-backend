import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { GradosService } from './grados.service';
import { Response } from "express";

@Controller('grados')
export class GradosController {

    constructor(
        private readonly servicioGrados: GradosService
    ) {

    }

    @Get()
    async listarGrados(@Res() res: Response) {
        const grados = await this.servicioGrados.findAll();
        return res.status(HttpStatus.OK).json({
            message: 'Grados listados',
            status: 'ok',
            cantidad_grados: grados.length,
            grados
        });
    }

}
