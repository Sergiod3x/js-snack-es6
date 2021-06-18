




// var biciArray = [
//     {
//         nome: 'Scoot',
//         peso: 5
//     },
//     {
//         nome: 'Ktm',
//         peso: 7
//     },
//     {
//         nome: 'Rockrider',
//         peso: 9
//     }
// ];

// var lightCycle = biciArray[0];
// var lightCycleWeight = biciArray[0].peso;

// for (var x = 1; x < biciArray.length; x++) {
//     if (lightCycleWeight > biciArray[x].peso) {
//         lightCycle = biciArray[x];
//         lightCycleWeight = biciArray[x].peso;
//     }



// }


//  console.log("La bici più leggera è :", lightCycle.nome , "il suo peso è di", lightCycle.peso, "kg");

// ES6

const biciArray = [
    {
        nome: 'Scoot',
        peso: 5
    },
    {
        nome: 'Ktm',
        peso: 7
    },
    {
        nome: 'Rockrider',
        peso: 9
    }
];

let lightCycle = biciArray[0];
let lightCycleWeight = biciArray[0].peso;

for (var x = 1; x < biciArray.length; x++) {
    const {peso} = biciArray [x];
    if (lightCycleWeight > biciArray[x].peso) {
        lightCycle = biciArray[x];
        lightCycleWeight = peso;
    }

}

const { nome, peso } = lightCycle;

console.log(`La bici più leggera è ${nome}  e pesa solo ${peso} kg`)
