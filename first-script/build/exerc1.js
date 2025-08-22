// Exercicio referente a Aula 1 sobre variaveis e funções
var KMS_POR_LITROS = 15;
var Marcas;
(function (Marcas) {
    Marcas["FORD"] = "Ford";
    Marcas["VOLKSWAGEN"] = "VolksWagen";
    Marcas["FIAT"] = "Fiat";
})(Marcas || (Marcas = {}));
var mustang = {
    marca: Marcas.FORD,
    volumeDoTanque: 61,
    temMotorFlex: false,
    distanciaTotalPorTanque: function (volumeDoTanque) { return volumeDoTanque * KMS_POR_LITROS; }
};
var gol = {
    marca: Marcas.VOLKSWAGEN,
    volumeDoTanque: 55,
    temMotorFlex: true,
    distanciaTotalPorTanque: function (volumeDoTanque) { return volumeDoTanque * KMS_POR_LITROS; }
};
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter(function (carro) {
        return carro.marca === marca;
    });
}
// porque mesmo sem tipo ele ainda da o retorno certo
var ArrayDeCarros = [mustang, gol];
console.log(buscarCarrosPorMarca(ArrayDeCarros, "Ford"));
console.log(mustang.distanciaTotalPorTanque(30));
