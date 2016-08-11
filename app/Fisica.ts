import {Pessoa} from "./Pessoa";

export class Fisica extends Pessoa{

    private cnpj:number;

    constructor(nome:string, cnpj:number){
        super(nome);
        this.cnpj = cnpj;
    }

    fazer(){
        return `${this.cnpj} tem a ação de ${this.andar()}`;
    }

}