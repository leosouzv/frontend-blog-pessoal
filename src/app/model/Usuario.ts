import { Postagem } from "./Postagem";

export class User{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public postagem: Postagem[]
}

// Exporta essas informações da classe 'User' para outros lugares