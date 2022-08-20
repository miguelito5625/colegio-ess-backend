import { DataSource } from "typeorm";
import { GradoEntity } from "../entitites/grado.entity";
import { listaGrados } from "./arraygrados";

export class MisMigrations {

    constructor() {
    }

    async crearGrados() {
        console.log("Creando Grados");        
        console.log(await GradoEntity.count());
        await GradoEntity.clear();
        console.log(await GradoEntity.count());
        for (const grado of listaGrados) {
            const grados = new GradoEntity();
            grados.nombre = grado;
            await grados.save();
        }
        console.log("SE CREARON LOS GRADOS");
    }
}