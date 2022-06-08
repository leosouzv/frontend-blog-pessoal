import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { Userlogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: Userlogin): Observable<Userlogin>{
    return this.http.post<Userlogin>('https://leo-blog-pessoal.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User):Observable<User>{
    return this.http.post<User>('https://leo-blog-pessoal.herokuapp.com/usuarios/cadastrar' ,user)

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
http://localhost:8080/usuario/cadastrar
*/