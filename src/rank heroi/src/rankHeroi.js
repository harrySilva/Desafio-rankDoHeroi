let wins = 100 
let loses = 26
let rank = ""

function calculatePoints() {
    let points = wins * 10 - loses * 5;
    return points > 0 ? points : 0; 
}
let points = calculatePoints();

if (wins > 0 && points === calculatePoints()) {
    if (points <= 10) {
        rank = "FERRO";
    } else if (points <= 20) {
        rank = "BRONZE";
    } else if (points <= 50) {
        rank = "PRATA";
    } else if (points <= 80) {
        rank = "OURO";
    } else if (points <= 90) {
        rank = "PLATINA";
    } else if (points <= 100) {
        rank = "ASCENDENTE";
    } else if (points <= 250) {
        rank = "RADIANTE";
    } else {
        rank = "IMORTAL";
    }
} else {
    rank = "Sem rank"; 
}

console.log("O Herói tem de saldo de: " + points,
"vitórias e está no rank: " + rank)


/*PS.: As fontes usadas para criação desse código foram as aulas da plataforma disponibilizadas, 
a documentação da linguagem JavaScript e o site do StackOverflow.*/ 
