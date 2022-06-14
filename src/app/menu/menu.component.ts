import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  //zera os valores das variáveis globais e redireciona para tela de login
  sair(){
    this.router.navigate(['/entrar'])
    environment.foto = ''
    environment.nome = ''
    environment.token = ''
    environment.id = 0
  }
}
