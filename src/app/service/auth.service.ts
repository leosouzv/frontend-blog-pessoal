import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/Usuario';
import { Userlogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };
  
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(userLogin: Userlogin): Observable<Userlogin>{
    //return this.http.post<Userlogin>('https://leo-blog-pessoal.herokuapp.com/usuarios/logar', userLogin)

    return this.http.post<Userlogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  /*
  editar(user: User): Observable<User>{
    return this.http.put<User>('http://localhost:8080/usuarios/atualizar', user, this.token)
  }
  */

  cadastrar(user: User):Observable<User>{
    //return this.http.post<User>('https://leo-blog-pessoal.herokuapp.com/usuarios/cadastrar' ,user)

    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar' ,user)
  }

  getByIdUser(id: number): Observable<User>{
    // return this.http.get<User>(`https://leo-blog-pessoal.herokuapp.com/${id}`, this.token)

    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  //checa se a variavel token nao esta vazia, caso não esteja, permite a visualização do nav e footer
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}


/*
https://leo-blog-pessoal.herokuapp.com/usuarios/cadastrar
http://localhost:8080/usuarios/cadastrar
*/