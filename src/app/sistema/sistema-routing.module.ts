import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSistemaComponent } from './lista-sistema/lista-sistema.component';

const routes: Routes = [
  {
    path: '',
    component: ListaSistemaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
