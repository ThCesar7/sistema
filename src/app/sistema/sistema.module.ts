import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { ListaSistemaComponent } from './lista-sistema/lista-sistema.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 


@NgModule({
  declarations: [
    ListaSistemaComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SistemaModule { }
