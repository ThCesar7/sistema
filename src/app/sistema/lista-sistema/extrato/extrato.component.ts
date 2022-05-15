import { Transferencias } from './../transferencias/transferencias';
import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias!: Transferencias[]

  transferencias$!: Observable<Transferencias[]>;

  constructor(private service: ExtratoService) { }

  ngOnInit(): void {
    this.service.list().subscribe(console.log)
    this.transferencias$ = this.service.list();
  }

}
