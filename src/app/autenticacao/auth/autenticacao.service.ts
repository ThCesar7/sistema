import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient,
    private tokenService: TokenService) { }

  autenticar(usuario: string, senha: string) {
    return this.httpCliente.post('http://localhost:3000/user/login',
    {userName: usuario,password: senha},
    { observe: 'response' })
    .pipe(tap(res => {
      const authToken: any = res.headers.get('x-access-token');
      this.tokenService.setToken(authToken);
    }))
  }
}
