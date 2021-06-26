
var numeroAleatorioGerados = [];
function numeroAleatorio() {

return Math.floor(Math.random()*60)
}
while(numeroAleatorioGerados.length < 6){
    var resultado = numeroAleatorio();
    numeroAleatorioGerados.push(resultado);
}
console.log(resultado);