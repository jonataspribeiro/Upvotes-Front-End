import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{

    public upvotes: number;

    public id: number;

    public data: Date;

    public titulo: string;

    public texto: string;    

    //relacionamento com as model usuario e tema
    public usuario: Usuario;

    public tema: Tema;

}