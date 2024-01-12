function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

let resultado;

do {
    let numero = prompt("Ingrese un número para calcular su factorial: ");
    resultado = parseInt(numero);

    if (isNaN(resultado)) {
        alert("Por favor, ingrese un valor numérico válido");
    }
} while (isNaN(resultado));

document.write(`El factorial de ${resultado} es: ${factorial(resultado)}`);

