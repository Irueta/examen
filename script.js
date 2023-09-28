//1

function contarLetra(str, letra) {
    str = str.toLowerCase();
    letra = letra.toLowerCase();
    let cuenta = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letra) {
        cuenta++;
      }
    }
    return cuenta;
  }

//2 OPCION1

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

//2 OPCION2
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
