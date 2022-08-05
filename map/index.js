
// usando o map 

let numbers = [25, 16, 9, 4, 1];

let raizes = numbers.map(numero => Math.sqrt(numero));

console.log(raizes);

//uma conta onde uso o map para mapear os valores que tenho junto com uma arrow function
//para fazer o calculo e me retornar as reizes dos valores 



let vendaDeCarro = [
    {
        carro: "gol",
        ano: "1998"
    },
    {
        carro: "civic",
        ano: "2008"
    },
    {
        carro: "uno",
        ano: "1994"
    }
];

let modelo = vendaDeCarro.map(function (item, indice) {
    return item.carro;
});

console.log(modelo);

//desta vez usei o map para mapear meu array e mostar os modelos de carros


let numeros = [1, 2, 3, 4, 5];

let aoQuadrado = numeros.map(function (item) {
    return Math.pow(item, 2);
});

console.log(aoQuadrado);

//desta vez o map retornou os valores ao quadrado