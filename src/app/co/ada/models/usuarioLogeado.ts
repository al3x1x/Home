export interface UsuarioLogeado {
    empleado:                    string;
    logeado:                     boolean;
    listaImagenesPerfilEmpleado: ListaPerfilesEmpleados[];
    nombreUsuario : string;

    // constructor(empleado: string){
    //     this.empleado = empleado; 
    // }

}

export interface ListaPerfilesEmpleados {
    csPerfil:      number;
    descripcion:   string;
    imagenes:      string;


    // constructor(csPerfil: number, descripcion: string, imagenes: string){
    //     this.csPerfil = const csPerfil;
    //     this.descripcion = descripcion;
    //     this.imagenes = imagenes;
    // }
}
