export class ValidaTransacao {

    public transacao: object;
    constructor(valorCompra: number, valorPago: number) {
        this.transacao = this.valida(valorCompra, valorPago)
    }

    valida(valorCompra: number, valorPago: number): object {
        let valorTroco = valorPago - valorCompra;

        let resumoTransacao = {
            valorCompra: valorCompra,
            valorPago: valorPago,
            valorTroco: valorTroco,
            totalNotas: 0,
            trocoNotas: null
        }

        let trocoNotas = {
            nota100: 0,
            nota10: 0,
            nota1: 0,
        }

        if(valorTroco === 0){
            console.log('Não há troco');
        }
        if(valorTroco > 100) {
            trocoNotas.nota100 = Math.trunc(valorTroco / 100);
            valorTroco = valorTroco % 100;
        }
        if (valorTroco > 10) {
            trocoNotas.nota10 = Math.trunc(valorTroco / 10);
            valorTroco = valorTroco % 10;
        }
        if(valorTroco > 1){
            trocoNotas.nota1 = valorTroco / 1
            valorTroco = valorTroco % 1;
        }

        resumoTransacao.totalNotas = trocoNotas.nota1 + trocoNotas.nota10 + trocoNotas.nota100;
        resumoTransacao.trocoNotas = trocoNotas;

        return resumoTransacao
    }
}
