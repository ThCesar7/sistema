import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Form!: FormGroup;

  constructor(private authService: AutenticacaoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
   const userName = this.Form.get('userName')?.value;
   const password = this.Form.get('password')?.value;

   this.authService.autenticar(userName, password).subscribe(() =>{
      this.router.navigate(['sistema']);
      alert('Logado com sucesso');
   }, (err: any) => {
     console.log(err)
     alert('Usuário ou senha inválido');
     this.Form.reset()
   }
   )
  }
}
