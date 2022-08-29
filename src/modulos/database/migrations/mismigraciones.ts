import { DataSource } from "typeorm";
import { GradoEntity } from "../entitites/grado.entity";
import { MateriaEntity } from "../entitites/materia.entity";
import { listaGrados } from "./listagrados";
import { listaMaterias } from "./listamaterias";

export class MisMigraciones {

    constructor() {
    }

    async crearGrados() {
        console.log("Creando Grados");        
        console.log("Cantidad de grados:",await GradoEntity.count());
        await GradoEntity.clear();
        console.log("Cantidad de grados:",await GradoEntity.count());
        for (const grado of listaGrados) {
            const grados = new GradoEntity();
            grados.nombre = grado;
            await grados.save();
        }
        console.log("SE CREARON LOS GRADOS");
    }


    async crearMaterias() {
        console.log("Creando Materias");        
        console.log("Cantidad de materias:",await MateriaEntity.count());
        await MateriaEntity.clear();
        console.log("Cantidad de materias:",await MateriaEntity.count());
        for (const materia of listaMaterias) {
            const materias = new MateriaEntity();
            materias.nombre = materia;
            await materias.save();
        }
        console.log("SE CREARON LAS MATERIAS");
    }
}