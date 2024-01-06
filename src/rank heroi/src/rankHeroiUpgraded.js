let wins = 0
let loses = 0
let rank = ""

function simulateGame (){
    let result = Math.random()
    if(result > 0.5){
        wins++
            console.log("VITÓRIA!🏆")
    } else {
        loses++
            console.log ("DERROTA ❌")
    }
}
for (i=0; i<3; i++){
//alterar o valor de i caso deseje mais simulações
    simulateGame()
}
function calculatePoints (){
    let points = wins * 15 - loses *10
    return points < 0 ? 0 : points // <- achei essa forma de realizar o "if else" mais rapida em um video no instagram
}
let points = calculatePoints()

if(wins > 0 && points === calculatePoints()){
    if (points <= 10) {
        rank = "🟤 FERRO 🟤";
    } else if (points <= 20) {
        rank = "🟠 BRONZE 🟠";
    } else if (points <= 50) {
        rank = "⚪ PRATA ⚪";
    } else if (points <= 80) {
        rank = "🟡 OURO 🟡";
    } else if (points <= 90) {
        rank = "🔵 PLATINA  🔵";
    } else if (points <= 100) {
        rank = "🟣 ASCENDENTE 🟣";
    } else if (points <= 250) {
        rank = "🔷🔹RADIANTE🔹🔷";
    } else {
        rank = "🔸🔶IMORTAL🔶🔸";
    }
} else {
    rank = "SEM RANK HABILITADO"
}
console.log (
    "O Herói tem um total de: \n"+ 
    points, " PTS.\n"+
    wins, " VITÓRIAS.\n"+
    loses, " DERROTAS.\n"+
    "E está no rank de nível: "+ rank
)