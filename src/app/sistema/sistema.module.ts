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


@NgModule({
  declarations: [
    ListaSistemaComponent,
    RootNavComponent,
    CrudComponent
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
    ReactiveFormsModule
  ]
})
export class SistemaModule { }
