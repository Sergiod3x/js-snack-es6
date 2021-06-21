var tableHTML = document.querySelector(".table-container")

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


let teamFalli = "";
let falliTop = 0;

for (let x = 0; x < squadra.length; x++) {
    if (falliTop < squadra[x].falliS) {
        teamFalli = squadra[x].nome;
        falliTop = squadra[x].falliS
    }

}

console.log(falliTop, teamFalli);


for (let x = 0; x < squadra.length; x++) {
    let tableRow = "<ul>";
    let team = squadra[x];
    if (team.nome===teamFalli){
        tableRow += "<li id='falli'>" + team.nome + "</li>";
        tableRow += "<li id='falli'>" + team.punti + "</li>";
        tableRow += "<li id='falli'>" + team.falliS + "</li>";
        tableRow += "</ul>";
    } else {
        tableRow += "<li>" + team.nome + "</li>";
        tableRow += "<li>" + team.punti + "</li>";
        tableRow += "<li>" + team.falliS + "</li>";
        tableRow += "</ul>";
    }
    tableHTML.innerHTML += tableRow;

}










