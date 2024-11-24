export class Usuario {
    constructor(
        public id:number,
        public usuario: string,
        public clave: string,
        public nombre: string,
        public roles: string,
    ) {
    }
}