/**
 * 
 */
export class Pessoa{
    
    private nome:string;    

    constructor(nome:string){
        this.nome = nome;
    }

    andar(){
        return `${this.nome} anda`;
    }

    correr(){
        return `${this.nome} corre`;
    }

    pular(){
        return `${this.nome} pula`;
    }
}