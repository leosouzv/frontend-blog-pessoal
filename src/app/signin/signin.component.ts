import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/Usuario';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = new User
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }


  cadastrar() {
    if (this.user.senha == this.confirmarSenha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    } else {
      alert('A senha está incorreta.')
    }
  }

  checarEmail() {
    if (this.user.usuario == ""
      || this.user.usuario.indexOf('@') == -1
      || this.user.usuario.indexOf('.') == -1) {
      alert("Por favor, informe um E-MAIL válido!");
    }
  }
}
