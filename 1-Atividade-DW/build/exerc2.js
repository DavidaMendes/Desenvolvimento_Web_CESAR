function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
var amostraDeDados = {
    numeros: [31, 54, 657, 43, 42342, 43],
    obterEstatisticas: function () {
        var numerosOrdenados = this.numeros.sort(function (a, b) { return a - b; });
        var soma = 0;
        for (var _i = 0, _a = this.numeros; _i < _a.length; _i++) {
            var num = _a[_i];
            soma += num;
        }
        var estatisticas = {
            maior: numerosOrdenados[this.numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / this.numeros.length
        };
        return estatisticas;
    }
};
var dados = amostraDeDados.obterEstatisticas();
console.log(dados);
