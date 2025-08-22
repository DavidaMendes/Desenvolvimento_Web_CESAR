// Exercicio referente a Aula 1 sobre variaveis e funções

const KMS_POR_LITROS: number = 15;

enum Marcas {
    FORD = "Ford",
    VOLKSWAGEN = "VolksWagen",
    FIAT = "Fiat"    
}

type car = {
    marca: string,
    volumeDoTanque: number,
    temMotorFlex: boolean,
    distanciaTotalPorTanque: (volumeDoTanque: number) => number
}

const mustang: car = {
	marca: Marcas.FORD,
	volumeDoTanque: 61,
	temMotorFlex: false,
    distanciaTotalPorTanque: (volumeDoTanque: number) => volumeDoTanque * KMS_POR_LITROS
}

const gol: car = {
	marca: Marcas.VOLKSWAGEN,
	volumeDoTanque: 55,
	temMotorFlex: true,
    distanciaTotalPorTanque: (volumeDoTanque: number) => volumeDoTanque * KMS_POR_LITROS
}

function buscarCarrosPorMarca(frota:Array<car>, marca?:string): Array<car>{
    if(marca === undefined){
        return frota;
    }

    return frota.filter((carro) => {
        return carro.marca === marca
    })
}
// porque mesmo sem tipo ele ainda da o retorno certo

const ArrayDeCarros: Array<car> = [mustang, gol];

console.log(buscarCarrosPorMarca(ArrayDeCarros, "Ford"));

console.log(mustang.distanciaTotalPorTanque(30));