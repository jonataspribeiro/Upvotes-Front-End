import { Postagem } from "./Postagem";

export class Tema{

    public id: number;

    public descricao: string;
    
//relacionamento com a model Postagem
    public postagem: Postagem[];

}