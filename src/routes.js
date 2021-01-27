import express from "express";
import PalindromoController from "./controllers/palindromos/PalindromoController";
import TransacaoController from "./controllers/transacao/TransacaoController";
import VeiculosController from "./controllers/veiculos/VeiculosController";


const routes = express.Router();

routes.post('/palindromos', PalindromoController.index)
routes.post('/transacao', TransacaoController.index)
routes.post('/veiculo', VeiculosController.index)



export default routes
