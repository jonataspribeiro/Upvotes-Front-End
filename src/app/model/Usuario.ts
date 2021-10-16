import { Postagem } from "./Postagem";

export class Usuario{

    public id: number;

    public nome: string;   

    public 	usuario: string;

    public 	senha: string;

    public tipo: string;    

    //relacionamento com model postagem
    public 	postagem: Postagem[];



}