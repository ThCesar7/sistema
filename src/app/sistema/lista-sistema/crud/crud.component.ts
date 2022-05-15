import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Funcionario } from './crud';
import { CrudService } from './crud.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {

  form!: FormGroup;

  submitted!: false | boolean;

 constructor(private service: CrudService,
             private bf: FormBuilder,
             private _router: Router,
             private location: Location ) {}

    ngOnInit() {
    this.form = this.bf.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      funcao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      perfil: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid){
      this.service.create(this.form.value)
      .subscribe((success)  => {
        this._router.navigateByUrl('sistema/funcionarios')
        alert('Cadastrado com sucesso');
      }, (error) => console.error(error),
      () => console.log('request complete')
      )
    }
  }
}
