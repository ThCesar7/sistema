import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';
import { Funcionario } from './Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = 'http://localhost:3000/funcionarios';

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<Funcionario[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }

  create(Funcionario: any){
    return this.http.post(this.API, Funcionario).pipe(take(1));
  }
}
