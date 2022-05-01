import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent  {

  @Output() aoTransferir = new EventEmitter<any>();

  valorInput!: number;
  destinoInput!: number;

  transferir() {
    const valorEmitir = { valor: this.valorInput, destino: this.destinoInput };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampo();
  }

  limparCampo() {
    this.valorInput = 0;
    this.destinoInput = 0;
  }

}
