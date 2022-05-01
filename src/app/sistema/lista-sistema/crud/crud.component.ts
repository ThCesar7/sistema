import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valorInput!: string;
  funcaoInput!: string;
  perfilInput!: string;

  transferir() {
    const valorEmitir = { nome: this.valorInput, funcao: this.funcaoInput, perfil: this.perfilInput  };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampo();
  }

  limparCampo() {
    this.valorInput = '';
    this.funcaoInput = '';
    this.perfilInput = '';
  }
}
