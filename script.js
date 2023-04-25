//pegar elementos html pelo dom

let resultadoSoma = document.getElementById('resultadoSoma');

let resultadoSubtracaoA = document.getElementById('resultadoSubtracaoA');
let resultadoSubtracaoB = document.getElementById('resultadoSubtracaoB');

let resultadoMultiplicacao = document.getElementById('resultadoMultiplicacao');

let resultadoDivisaoA = document.getElementById('resultadoDivisaoA');
let resultadoDivisaoB = document.getElementById('resultadoDivisaoB');

let resultadoPotenciaA = document.getElementById('resultadoPotenciaA');
let resultadoPotenciaB = document.getElementById('resultadoPotenciaB');

let resultadoRaizA = document.getElementById('resultadoRaizA');
let resultadoRaizB = document.getElementById('resultadoRaizB');

let resultadoFatorialA = document.getElementById('resultadoFatorialA');
let resultadoFatorialB = document.getElementById('resultadoFatorialB');

let resultadoPorcentagemA = document.getElementById('resultadoPorcentagemA');
let resultadoPorcentagemB = document.getElementById('resultadoPorcentagemB');

let resultadoMedia = document.getElementById('resultadoMedia');

//

resultadoSoma.innerHTML = 0;

resultadoSubtracaoA.innerHTML = 0;
resultadoSubtracaoB.innerHTML = 0;

resultadoMultiplicacao.innerHTML = 0;

resultadoDivisaoA.innerHTML = 0;
resultadoDivisaoB.innerHTML = 0;

resultadoPotenciaA.innerHTML = 0;
resultadoPotenciaB.innerHTML = 0;

resultadoRaizA.innerHTML = 0;
resultadoRaizB.innerHTML = 0;

resultadoFatorialA.innerHTML = 0;
resultadoFatorialB.innerHTML = 0;

resultadoPorcentagemA.innerHTML = 0;
resultadoPorcentagemB.innerHTML = 0;

resultadoMedia.innerHTML = 0;

// fazer cálculos
// arrow function


// S O M A
function calcularSoma(a, b) {
    return a + b;
}


// S U B T R A Ç Ã O
function calcularSubtracaoA(a, b) {
    return a - b;
}
function calcularSubtracaoB(b, a) {
    return b - a;
}


// M U L T I P L I C A Ç Ã O
function calcularMultiplicacao(a, b) {
    return a * b;
}


// D I V I S Ã O
function calcularDivisaoA(a, b) {
    return a / b;
}
function calcularDivisaoB(b, a) {
    return b / a;
}


// P O T Ê N C I A
const calcularPotenciaA = (a) => (a ** a).toFixed(a);
const calcularPotenciaB = (b) => (b ** b).toFixed(b);


// R A I Z    Q U A D R A D A
const calcularRaizA = (a) => Math.sqrt(a).toFixed(2);
const calcularRaizB = (b) => Math.sqrt(b).toFixed(2);


// F A T O R I A L
const calcularFatorialA = (a) => factorial(a);
const calcularFatorialB = (b) => factorial(b);


// P O R C E N T A G E M
const calcularPorcentagemA = (a, b) => Math.round(((b * 100) / a));
const calcularPorcentagemB = (b, a) => Math.round(((a * 100) / b));


// M É D I A
function calcularMedia(a, b) {
    return (a + b) / 2;
}

// função para executar os cálculos

function calcular() {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    resultadoSoma.innerHTML = calcularSoma(a, b);

    resultadoSubtracaoA.innerHTML = calcularSubtracaoA(a, b);
    resultadoSubtracaoB.innerHTML = calcularSubtracaoB(b, a);

    resultadoMultiplicacao.innerHTML = calcularMultiplicacao(a, b);

    resultadoDivisaoA.innerHTML = Math.sqrt(calcularDivisaoA(a, b)).toFixed(2);
    resultadoDivisaoB.innerHTML = Math.sqrt(calcularDivisaoB(b, a)).toFixed(2);

    resultadoPotenciaA.innerHTML = calcularPotenciaA(a, b);
    resultadoPotenciaB.innerHTML = calcularPotenciaB(b, a);

    resultadoRaizA.innerHTML = calcularRaizA(a, b);
    resultadoRaizB.innerHTML = calcularRaizB(b, a);

    resultadoFatorialA.innerHTML = calcularFatorialA(a, b);
    resultadoFatorialB.innerHTML = calcularFatorialB(b, a);

    resultadoPorcentagemA.innerHTML = `${calcularPorcentagemA(a, b)}%`;
    resultadoPorcentagemB.innerHTML = `${calcularPorcentagemB(b, a)}%`;

    resultadoMedia.innerHTML = calcularMedia(a, b);

}

// função para fatorial dos cálculos

var f = [];
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}
