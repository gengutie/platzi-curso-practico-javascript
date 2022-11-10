// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
    return lado *lado; 
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

// Código del triángulo
// console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;  
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
}
// console.log("El area del triángulo es: " + areaTriangulo +  "cm^2");

console.groupEnd();

// Código del circulo
console.group("Círculos");

// Radio 
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area 
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

} 
function calcularAlturaTrianguloIsosceles() {

    const lado1 = document.getElementById("InputLado1");
    const trianguloGrandeLado1 = lado1.value;
    const lado2 = document.getElementById("InputLado2");
    const trianguloGrandeLado2 = lado2.value;
    const base = document.getElementById("InputBase");
    const trianguloGrandeBase = base.value;

    const altura = alturaTrianguloIsosceles(trianguloGrandeLado1, trianguloGrandeLado2, trianguloGrandeBase);
    alert(altura);

    limpiarFormulario();
    
    lado1.focus();
}

    

function alturaTrianguloIsosceles(trianguloGrandeLado1, trianguloGrandeLado2, trianguloGrandeBase) {
    if (trianguloGrandeLado1 != trianguloGrandeLado2) {
        return("Los lados 1 y 2 no son iguales");
    }else {
        debugger
        const trianguloPequenoLado2 = trianguloGrandeBase /2;
        const trianguloPequenoBase = trianguloGrandeLado1;

        const trianguloPequenoLado2Cuadrado = trianguloPequenoLado2 * trianguloPequenoLado2;
        const trianguloPequenoBaseCuadrado = trianguloPequenoBase * trianguloPequenoBase;

        const trianguloPequenoLado1 = Math.sqrt(trianguloPequenoBaseCuadrado - trianguloPequenoLado2Cuadrado);

        const trianguloGrandeAltura = trianguloPequenoLado1;
        return trianguloGrandeAltura;

    }
}

function limpiarFormulario() {
    const lado1 = document.getElementById("InputLado1");
    lado1.value = "";
    const lado2 = document.getElementById("InputLado2");
    lado2.value = "";
    const base = document.getElementById("InputBase");
    base.value = "";

}


