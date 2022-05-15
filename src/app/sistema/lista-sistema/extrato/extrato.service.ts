import { Extrato } from './extrato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  private readonly API = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<Extrato[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }

  create(Extrato: any){
    return this.http.post(this.API, Extrato).pipe(take(1));
  }

}
