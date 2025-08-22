type Estatisticas = {
    maior: number
    menor: number
    media: number
}

function obterEstatisticas(numeros:Array<number>): Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas
}

//a) A entrada é um Array do tipo number e a saída é um objeto do tipo estatistica, que contem 3 atributos numbers
//b) 1 - parametros (a,b) ambos são number; 2 - let é number; 3 - num é number; 4 - estatistica é do tipo objeto Estatistica
//c)
type Amostragem = {
    numeros: Array<number>,
    obterEstatisticas: () => Estatisticas;
};

const amostraDeDados: Amostragem = {
    numeros: [31, 54, 657, 43, 42342, 43],
    obterEstatisticas() {
        const numerosOrdenados = this.numeros.sort(
        (a, b) => a - b
        )

        let soma: number = 0

        for (let num of this.numeros) {
            soma += num
        }

        const estatisticas: Estatisticas = {
            maior: numerosOrdenados[this.numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / this.numeros.length
        };

        return estatisticas
    }
}


const dados = amostraDeDados.obterEstatisticas(); 
console.log(dados); 

