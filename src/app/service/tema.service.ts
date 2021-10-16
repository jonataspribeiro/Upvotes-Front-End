import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {


  constructor(private http: HttpClient) { }

   //Váriavel token
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  //Trazer todos os temas
  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/temas', this.token)
  }

  //Campo com o conteudo a ser editado
  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/temas/${id}`, this.token)
  }

  //template literas (passar uma rota com string e variavel ao mesmo tempo)

  postTema(temaCadastro: Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/temas', temaCadastro, this.token)
  }

  //Método Put
  putTema(temaCadastro: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/temas', temaCadastro, this.token)
  }

  //Método delete
  deleteTema(id: number){
    return this.http.delete(`http://localhost:8080/temas/${id}`, this.token)
  }

}