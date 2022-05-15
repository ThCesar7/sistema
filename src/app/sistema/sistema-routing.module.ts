import { FuncionariosComponent } from './lista-sistema/funcionarios/funcionarios.component';
import { ExtratoComponent } from './lista-sistema/extrato/extrato.component';
import { TransferenciasComponent } from './lista-sistema/transferencias/transferencias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './lista-sistema/crud/crud.component';
import { ListaSistemaComponent } from './lista-sistema/lista-sistema.component';

const routes: Routes = [
  {
    path: '',
    component: ListaSistemaComponent,
    children: [
      {
        path: 'app-crud',
        component: CrudComponent,
      },
      {
        path: 'app-transferencias',
        component: TransferenciasComponent,
      },
      {
        path: 'extrato',
        component: ExtratoComponent,
      },
      {
        path: 'funcionarios',
        component: FuncionariosComponent,
      }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
