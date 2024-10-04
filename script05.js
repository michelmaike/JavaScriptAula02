function funcoesTexto(){
    let texto = prompt('digite um texto:');
    let textoMaiusculo = texto.toUpperCase();
    let textoTrocado = textoMaiusculo.replace('E', '3');
    let textoCortado = textoTrocado.slice(0, 10);
    document.write('resultado: '+textoCortado);
}