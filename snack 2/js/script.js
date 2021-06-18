//Funzione che resistuisce un numero random tra 1 e max
const getRandomNumber = (min, max) => Math.floor(Math.random()* (max - min + 1 )) + min;

// ES6

const squadra = [
    {
        nome: "Cagliari",
        punti: 0,
        falliS: 0    
    },
    {
        nome: "Napoli",
        punti: 0,
        falliS:0    
    },
    {
        nome: "Milan",
        punti: 0,
        falliS:0    }
];

console.log(squadra);


for (let x = 0; x < squadra.length; x++) {
    squadra[x].punti = getRandomNumber(0,30);
    squadra[x].falliS = getRandomNumber(0,50);
      

}

let newArray=[];

for (let x = 0; x < squadra.length; x++) {
    const { nome, falliS } = squadra[x];
    newArray[x]={
        nome, 
        falliS
    };
      

}
 console.log(newArray);






// function getRandomNumber(max){
//     return (Math.floor(Math.random() * (max ))+1);
//   }


//   for (let x = 0; x < squadra.length; x++) {
    //     for (const key in squadra[x]) {
    //         if ( key === "punti"){
    //             squadra[x].key = getRandomNumber(30);
    //         } else{
    //             if(key === "falliS"){
    //                 squadra[x].key = getRandomNumber(50);
    //             }
    //         }
    //     }
    // }


