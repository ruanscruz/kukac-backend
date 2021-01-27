export class VerificaPalindromos {

    public palindromos: number[];

    public constructor(vlInicial: number, vlFinal: number) {
        this.palindromos = this.valida(vlInicial, vlFinal)
    }

    private valida(vlInicial: number, vlFinal: number): number[] {

        const intervaloNumeros = [];

        for(let i = vlInicial; i <= vlFinal; i++){
            intervaloNumeros.push(i)
        }

        const todosNumeros = intervaloNumeros.map(numero => {
            return numero.toString()
        })

        const palindromos: number[] = todosNumeros.filter(palindromo => {
            let verificador = palindromo.split('').reverse().join('');
            if(palindromo === verificador){
                return palindromo
            }
        })

        return palindromos
    }
}
