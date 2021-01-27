import {Request, Response} from "express";
import {salvaArquivo, validaVeiculo} from "./SalvaVeiculo";


class VeiculosController {
    public async index (req: Request, res: Response): Promise<T> {
       try {
           const teste = await req.body;
           const valida = validaVeiculo(teste)
           salvaArquivo(valida)
           const salvo = true;
           res.send(salvo)
       } catch (erro){
       }

    }
}

export default new VeiculosController();
