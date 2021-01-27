import {Veiculo} from "./interface/Veiculo";

export class Carro implements Veiculo{
    tipo: string;
    modelo: string;
    ano: string;
    nPortas: number;
    marca: string;

    constructor(tipo: string, modelo: string, ano: string, nPortas: number, marca: string) {
        this.tipo = tipo;
        this.modelo = modelo;
        this.ano = ano;
        this.nPortas = nPortas;
        this.marca = marca;
    }
}
