import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      //alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe({
      next: (resp: Tema[]) =>{
      this.listaTemas = resp
      },
    });
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe({
    next: (resp: Tema) =>{
    this.tema = resp
    alert('Tema cadastrado com sucesso!') // Mensagem pro usuário
    this.findAllTemas()
    this.tema = new Tema // Zera o campo após cadastrar um tema
    },
  });
}

}
