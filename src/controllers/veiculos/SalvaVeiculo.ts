import {promises} from 'fs';
import {Moto} from "./Moto";
import {Carro} from "./Carro";
const {readFile, writeFile} = promises;


export const validaVeiculo = (veiculo: object): object => {
    const {tipo, modelo, ano, marca, nPortas, passageiros}: any = veiculo
    let novoVeiculo: object
    if(tipo === 'moto'){
        novoVeiculo = new Moto(tipo, modelo, ano, marca, passageiros)
    }else{
        novoVeiculo = new Carro(tipo, modelo, ano, nPortas, marca)
    }
    return novoVeiculo
}


export const salvaArquivo = async (texto: object): Promise<void> => {
    const arquivo = await readFile('veiculos.json')
    const json = JSON.parse(arquivo.toString())
    const novoVeiculo = {id: json.nextId++, ...texto}
    json.veiculos.push(novoVeiculo)
    await writeFile('veiculos.json', JSON.stringify(json))
}
