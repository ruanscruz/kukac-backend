import {Request, Response} from "express";
import {ValidaTransacao} from "./ValidaTransacao";

class TransacaoController {
    public async index (req: Request, res: Response): Promise<Response> {

        const transacao = await new ValidaTransacao(req.body.valorCompra, req.body.valorPago);
        const salvo = true;
        return res.json(transacao);
    }
}

export default new TransacaoController();
