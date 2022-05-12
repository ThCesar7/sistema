import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-sistema',
  templateUrl: './lista-sistema.component.html',
  styleUrls: ['./lista-sistema.component.scss']
})
export class ListaSistemaComponent {

  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService:UsuarioService,
    private router: Router) { }

    logout(){
      this.usuarioService.logout();
      this.router.navigate(['']);
    }
}
