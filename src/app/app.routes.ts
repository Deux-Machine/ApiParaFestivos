import { Routes } from '@angular/router';
import { ValidarComponent } from './features/componentes/validar/validar.component';
import { ListarComponent } from './features/componentes/listar/listar.component';

export const routes: Routes = [
    { path: "validar", component: ValidarComponent },
    { path: "listar", component: ListarComponent },
];
