//1

/* function contarLetra(str, letra) {
    str = str.toLowerCase();
    letra = letra.toLowerCase();
    let cuenta = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letra) {
        cuenta++;
      }
    }
    return cuenta;
  } */

//2   Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

const num = prompt("Introduce un número");
function impar(num){
    let imprimir = "";
    for(let i = num; i < num + 50; i++){
    if (i % 2 !== 0){
        imprimir += (i.toString()) + ", ";
    }
}
    return imprimir;
}


const num = prompt("Introduce un número");
function impar(num){
    const arr = [];
    let imprimir = arr.join(', ');
    for(let i = num; i < num + 50; i++){
    if (i % 2 !== 0){
        arr.push(i);
    }
}
    return imprimir;
}
