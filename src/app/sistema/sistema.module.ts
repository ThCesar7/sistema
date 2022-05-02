import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { ListaSistemaComponent } from './lista-sistema/lista-sistema.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RootNavComponent } from '../componentes/root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CrudComponent } from './lista-sistema/crud/crud.component';
import { TransferenciasComponent } from './lista-sistema/transferencias/transferencias.component';
import { ExtratoComponent } from './lista-sistema/extrato/extrato.component';


@NgModule({
  declarations: [
    ListaSistemaComponent,
    RootNavComponent,
    CrudComponent,
    TransferenciasComponent,
    ExtratoComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SistemaModule { }
