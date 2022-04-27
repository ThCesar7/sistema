import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './lista-sistema/crud/crud.component';
import { GraficoComponent } from './lista-sistema/grafico/grafico.component';
import { ListaSistemaComponent } from './lista-sistema/lista-sistema.component';

const routes: Routes = [
  {
    path: '',
    component: ListaSistemaComponent,
    children: [
      {
        path: 'app-grafico',
        component: GraficoComponent,
      },
      {
        path: 'app-crud',
        component: CrudComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
