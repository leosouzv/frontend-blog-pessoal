import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  idUser = environment.id;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number

  postagem: Postagem = new Postagem;
  listaPostagens: Postagem[];
  
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      //alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    this.auth.refreshToken();
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe({
      next: (resp: Tema[]) => {
        this.listaTemas = resp;
      },
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe({
      next: (resp: Tema) => {
        this.tema = resp;
      },
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe({
      next: (resp: Postagem[]) => {
        this.listaPostagens = resp;
      }
    })
  }

  findByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe({
      next: (resp :User) =>{
        this.user = resp;
      },
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema


    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }
}
