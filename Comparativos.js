let heroLvl = 1;
let heroName = "HERÓI" + "!";
let completeQuests = 0; // QUESTS COMPLETADAS PELO USUARIO
completeQuests++;
let xpToNextLevel = 0;
let rank = "FERRO"; // INICIA COM FERRO
let xpPoints = 0; // VERIFICANDO O RANK ATUAL DO HEROI COM BASE NO XP ATUAL

function questsRealizadas() {
  xpPoints += 100;
  completeQuests++;

  console.log("Parabéns, você completou uma quest! \n", "XP + 100" + "\n");

  if (xpPoints <= 1000) {
    rank = "FERRO";
  } else if (xpPoints <= 2000) {
    rank = "BRONZE";
  } else if (xpPoints <= 5000) {
    rank = "PRATA";
  } else if (xpPoints <= 7000) {
    rank = "OURO";
  } else if (xpPoints <= 8000) {
    rank = "PLATINA";
  } else if (xpPoints <= 9000) {
    rank = "ASCENDENTE";
  } else if (xpPoints <= 10000) {
    rank = "IMORTAL";
  } else if (xpPoints <= 11000) {
    rank = "RADIANTE";
  }

  // Atualiza xpToNextLevel para a quantidade de XP restante até o próximo nível
  if (rank !== "RADIANTE") {
    let nextRankXP = rank === "FERRO" ? 1000 : rank === "BRONZE" ? 2000 : rank === "PRATA" ? 5000 : rank === "OURO" ? 7000 : rank === "PLATINA" ? 8000 : rank === "ASCENDENTE" ? 9000 : rank === "IMORTAL" ? 10000 : 11000;
    xpToNextLevel = nextRankXP - xpPoints;
  } else {
    xpToNextLevel = 0; // Se já alcançou o nível máximo, xpToNextLevel é 0
  }
}

// SIMULAÇÃO CASO O HERÓI TENHA REALIZADO AS QUESTS E ACUMULADO PONTOS DE XP
for (let i = 1; i <= 60; i++) {
  console.log("Quest realizadas: " + completeQuests);
  questsRealizadas();

  let xpOverflow = xpPoints - xpToNextLevel;

  while (xpOverflow >= 0) {
    heroLvl++;
    console.log(
      "PARABÉNS, " + heroName,
      "VOCÊ SUBIU DE NÍVEL! \n",
      "NOVO NÍVEL: " + heroLvl + "\n"
    );
    xpOverflow = xpPoints - xpToNextLevel;
    questsRealizadas(); // Atualiza o rank após a subida de nível
  }
}

let levelConsult = xpPoints;

console.log(
  "SEU SALDO ATUAL DE XP É DE: " + levelConsult + "\n",
  "E FALTAM " + xpToNextLevel + " PONTOS DE XP PARA ALCANÇAR O PRÓXIMO NÍVEL" +
  "\n" +
  "(RANK ATUAL: " + rank + ")"
);
