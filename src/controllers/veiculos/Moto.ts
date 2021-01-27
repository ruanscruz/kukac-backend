import {Veiculo} from "./interface/Veiculo";

export class Moto implements Veiculo {
    tipo: string;
    modelo: string;
    ano: string;
    marca: string;
    rodas: number;
    passageiros: number;

    constructor(tipo: string, modelo: string, ano: string, marca: string, passageiros: number) {
        this.tipo = tipo;
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.rodas = 2;
        this.passageiros = passageiros;
    }
}
