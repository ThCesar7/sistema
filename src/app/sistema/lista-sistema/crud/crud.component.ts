import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valorInput!: string;
  destinoInput!: number;
  salarioInput!: number;

  transferir() {
    const valorEmitir = { valor: this.valorInput, destino: this.destinoInput };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampo();
  }

  limparCampo() {
    this.valorInput = '';
    this.destinoInput = 0;
    this.salarioInput = 0;
  }
}
