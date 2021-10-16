import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

/*Integração do Front-end com o Back-end*/
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  };

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }


  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      'https://localhost:8080/usuarios/atualizar',
      usuario, this.token );
  }

  getUserById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://localhost:8080/usuarios/${id}`, this.token);
  }

  /*Método para validação do token*/
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
    ok = true
    }
    return ok
  }
}
