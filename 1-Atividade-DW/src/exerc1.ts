//a) Não é possível atribuir um valor númerico de fato, ele da erro e diz que é um tipo number, o qual não pode ser possível, oque pode fazer é ou por como string ou atribuir um tipo "any"
const minhaString: string = "1";

//b) Para habilitar a possibilidade de fazer uma varável do tipo number também aceitar uma string é utilizar o "|" uniun type, ele permite atribriur um valor correspo 
const meuNumero: number | string = "10" ;

//c) 
type Pessoa = {
    nome: string,
    idade: number,
    CorFavorita: string
}

const p1: Pessoa = {
    nome: "Davi",
    idade: 19,
    CorFavorita: "Preto"
}
const p2: Pessoa = {
    nome: "Gabi",
    idade: 20,
    CorFavorita: "Azul"
}
const p3: Pessoa = {
    nome: "Caio",
    idade: 21,
    CorFavorita: "Branco"
}

//d)
enum Cores {
    AZUL = "Azul",
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    LARANJA = "Laranja",
    VIOLETA = "Violeta",
    ANIL = "Anil"
}

type PessoaComEnum = {
    nome: string,
    idade: number,
    CorFavorita: Cores
}

const p1mod: PessoaComEnum = {
    nome: "Carlos",
    idade: 21,
    CorFavorita: Cores.AMARELO
}
