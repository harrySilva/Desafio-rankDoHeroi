let heroLvl = 1
let heroName = "HERÓI" + "!"
let completeQuests = 0 //QUESTS COMPLETADAS PELO USUARIO
completeQuests ++
let xpToNextLevel = 0
let rank = "FERRO" //INICIA COM FERRO
let xpPoints = 0 //VERIFICANDO O RANK ATUAL DO HEROI COM BASE NO XP ATUAL

if (xpPoints <= 1000) {
  rank = "FERRO";
} else (xpPoints >= 1001 && xpPoints <= 2000); {
  rank = "BRONZE";
}

if (xpPoints >= 2001 && xpPoints <= 5000) {
  rank = "PRATA";
} else (xpPoints >= 5001 && xpPoints <= 7000); {
  rank = "OURO";
} 

if (xpPoints >= 7001 && xpPoints <= 8000) {
  rank = "PLATINA";
} else (xpPoints >= 8001 && xpPoints <= 9000); {
  rank = "ASCENDENTE";
} 

if (xpPoints >= 9001 && xpPoints <= 10000) {
  rank = "IMORTAL";
} else (xpPoints >= 10001 && xpPoints <= 11000); {
  rank = "RADIANTE";
}

function questsRealizadas (){
    xpPoints += 100
    completeQuests ++

    console.log("Parabéns, você completou uma quest! \n", "XP + 100" + "\n");
}

//SIMULAÇÃO CASO O HERÓI TENHA REALIZADO AS QUESTS E ACUMULADO PONTOS DE XP
for (let i = 1; i <=100; i++) {
    console.log ("Quest realizadas: " + completeQuests)
    questsRealizadas ()

  let xpOverflow = xpPoints - xpToNextLevel;

  while (xpOverflow >= 0) {
    heroLvl++;
    console.log(
    "PARABÉNS, " + heroName,
    "VOCÊ SUBIU DE NÍVEL! \n",
    "NOVO NÍVEL: " + heroLvl + "\n"
  );
  xpPoints = xpOverflow;
  xpToNextLevel += 1000;
  xpOverflow = xpPoints - xpToNextLevel;
  updaterank()
  }
}
let levelConsult = xpPoints;

console.log(
  "SEU SALDO ATUAL DE XP É DE: " + levelConsult + "\n",
  "E FALTAM " + xpToNextLevel + " PONTOS DE XP PARA ALCANÇAR O PRÓXIMO NÍVEL" +
  "\n" +
  "(RANK ATUAL: " + rank + ")"
);
