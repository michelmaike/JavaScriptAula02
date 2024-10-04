let quantidade = parseInt(prompt('use uma quantidade entre 2 e 18:'));
let vetor = [];
let numero = 2;
let contador = 0;

do{
    vetor.push(numero);
    numero +=2;
    contador++;
}while(contador< quantidade);

console.log(vetor);
