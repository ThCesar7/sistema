import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './Funcionario';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  funcionarios!: Funcionario[]

  funcionarios$!: Observable<Funcionario[]>;

  constructor(private service: FuncionariosService) { }

  ngOnInit(): void {
    this.funcionarios$ = this.service.list();
  }

}
