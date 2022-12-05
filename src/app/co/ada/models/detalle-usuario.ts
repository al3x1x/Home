export interface RecursoPadre {
    id: number;
    nivel: number;
    csRecursoHijo: number;
    descripcionHijo: string;
    csRecursoPadre : number;
    perfil:  number;
    paginaRecurso: string;
    detalleUsu: Array<RecursoPadreHijo>;
}

export interface RecursoPadreHijo{
    id: number;
    nivel: number;
    csRecursoHijo: number;
    descripcionHijo: string;
    csRecursoPadre : number;
    perfil:  number;
    paginaRecurso: string;
    detalleUsu: Array<RecursoPadre>;
}


// export interface RecursoPadre {
//     recursoPadreHijo: RecursoPadreHijo[];
// }

// export interface RecursoPadreHijo {
//     id:              number;
//     nivel:           number;
//     csRecursoHijo:   number;
//     descripcionHijo: string;
//     csRecursoPadre:  number;
//     perfil:          number;
//     paginaRecurso:    string;
//     detalleUsu:      RecursoPadre[];
// }