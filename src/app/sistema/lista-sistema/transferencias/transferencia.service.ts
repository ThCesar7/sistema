import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private readonly API = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {}

  create(Transferencias: any){
    return this.http.post(this.API, Transferencias).pipe(take(1));
  }
}
