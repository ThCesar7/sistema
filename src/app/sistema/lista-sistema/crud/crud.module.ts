import { CrudComponent } from './crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CrudModule { }
