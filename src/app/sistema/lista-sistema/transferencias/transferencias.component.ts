import { TransferenciaService } from './transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent  {

  @Output() aoTransferir = new EventEmitter<any>();

  form!: FormGroup;
  submitted!: false | boolean;
  valor!: number;
  destino!: number;
  data!: Date;

  constructor(private service: TransferenciaService,
    private bf: FormBuilder,
    private _router: Router,
    private location: Location ) {}

  ngOnInit() {
    this.form = this.bf.group({
      destino: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      valor: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      data: [null, [Validators.required]]
    });
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  transferir() {
    const valorEmitir = { valor: this.valor, destino: this.destino, data: this.data};
    this.aoTransferir.emit(valorEmitir);
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid){
      this.service.create(this.form.value)
      .subscribe((success)  => {
        this._router.navigateByUrl('sistema/extrato')
        console.log(location)
        alert('Cadastrado com sucesso');
      }, (error) => console.error(error),
      () => console.log('request complete')
      )
    }
  }

}
