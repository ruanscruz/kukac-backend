import {Request, Response} from "express";
import {VerificaPalindromos} from "./VerificaPalindromos";

class PalindromoController {
    public async index (req: Request, res: Response): Promise<Response> {
        const palindromos = await new VerificaPalindromos(req.body.valorInicial, req.body.valorFinal);
        return res.json(palindromos);
    }
}

export default new PalindromoController();
