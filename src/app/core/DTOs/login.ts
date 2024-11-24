import { Usuario } from "../entidades/usuario";

export class Login {
    constructor(
        public usuario: Usuario,
        public token: string
    ) {
    }
}