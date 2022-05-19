import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './Funcionario';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  funcionarios!: Funcionario[]

  funcionarios$!: Observable<Funcionario[]>;

  constructor(private service: FuncionariosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe(console.log)
    this.funcionarios$ = this.service.list();
  }

  onDelete(funcionario$: any){

  }
}
